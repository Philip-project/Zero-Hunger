import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AppNotification,
  BENEFICIARIES,
  CharityToken,
  CharityTokenStatus,
  CONSENTED_DELIVERY_PHOTOS,
  INITIAL_CHARITY_TOKENS,
  MealProduct,
  Order,
  Payment,
} from '../data/mealProgram';

export interface CartItem {
  product: MealProduct;
  quantity: number;
}

interface PlaceOrderInput {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  paymentMethod: 'UPI' | 'CARD' | 'NET_BANKING';
}

interface PlaceOrderResult {
  order: Order;
  payment: Payment;
  tokens: CharityToken[];
}

interface MealProgramContextValue {
  cart: CartItem[];
  cartCount: number;
  cartTotalInr: number;
  sponsoredMealsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: MealProduct) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  tokens: CharityToken[];
  orders: Order[];
  notifications: AppNotification[];
  unreadCount: number;
  activeToast: AppNotification | null;
  dismissToast: () => void;
  markNotificationsRead: () => void;
  placeOrder: (input: PlaceOrderInput) => PlaceOrderResult;
  findToken: (tokenNumber: string) => CharityToken | undefined;
  markTokenDelivered: (tokenNumber: string, beneficiaryId?: string, location?: string) => void;
  uploadDeliveryPhoto: (tokenNumber: string, photoUrl: string) => void;
  sendCustomerNotification: (tokenNumber: string) => void;
  updateTokenStatus: (tokenNumber: string, status: CharityTokenStatus) => void;
}

const MealProgramContext = createContext<MealProgramContextValue | undefined>(
  undefined
);

const STORAGE_KEY_TOKENS = 'zh_charity_tokens_v1';
const STORAGE_KEY_NOTIFICATIONS = 'zh_notifications_v1';

function generateUniqueTokenCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let suffix = '';
  for (let i = 0; i < 6; i++) {
    suffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `ZH-2026-${suffix}`;
}

export const MealProgramProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [tokens, setTokens] = useState<CharityToken[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TOKENS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback to initial seeded tokens
    }
    return INITIAL_CHARITY_TOKENS;
  });

  const [orders, setOrders] = useState<Order[]>([]);

  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_NOTIFICATIONS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return [
      {
        id: 'notif-seed-1',
        tokenNumber: 'ZH-2026-A8F42K',
        recipientName: 'Philip',
        channels: ['WEBSITE', 'EMAIL', 'WHATSAPP'],
        title: 'Your sponsored meal has been delivered.',
        message:
          'A nutritious meal has reached a child (Beneficiary ID: ZH-10482) through our Hyderabad Community Centre distribution program.',
        createdAt: '01 OCT 2026',
        read: false,
      },
    ];
  });

  const [activeToast, setActiveToast] = useState<AppNotification | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TOKENS, JSON.stringify(tokens));
    } catch {
      // ignore storage errors
    }
  }, [tokens]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY_NOTIFICATIONS,
        JSON.stringify(notifications)
      );
    } catch {
      // ignore storage errors
    }
  }, [notifications]);

  const addToCart = (product: MealProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Customer ONLY pays ₹150 per meal box — the sponsored child meal is funded by this purchase at ₹0 extra charge
  const cartTotalInr = cart.reduce(
    (sum, item) => sum + item.product.priceInr * item.quantity,
    0
  );
  const sponsoredMealsCount = cartCount;

  const placeOrder = (input: PlaceOrderInput): PlaceOrderResult => {
    const orderId = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowLabel = '29 SEP 2026';

    const newOrder: Order = {
      id: orderId,
      userId: `USR-${Date.now()}`,
      customerName: input.customerName || 'Valued Supporter',
      customerEmail: input.customerEmail || 'supporter@zerohunger.org',
      customerPhone: input.customerPhone || '+91 98480 00000',
      deliveryAddress: input.deliveryAddress || 'Banjara Hills, Hyderabad',
      totalAmountInr: cartTotalInr,
      sponsoredMealsCount,
      customerMealStatus: 'PREPARING_IN_KITCHEN',
      createdAt: nowLabel,
    };

    const newPayment: Payment = {
      id: `PAY-${Date.now()}`,
      orderId,
      amountInr: cartTotalInr,
      method: input.paymentMethod,
      status: 'SUCCESS',
      transactionReference: `TXN${Math.floor(10000000 + Math.random() * 90000000)}`,
      paidAt: nowLabel,
    };

    // Generate CharityToken(s) for the order
    const createdTokens: CharityToken[] = [];
    const itemsToProcess =
      cart.length > 0
        ? cart
        : [
            {
              product: {
                id: 'meal-01',
                name: 'Protein Power Meal',
                priceInr: 150,
              } as MealProduct,
              quantity: 1,
            },
          ];

    itemsToProcess.forEach((item, idx) => {
      for (let q = 0; q < item.quantity; q++) {
        const ben = BENEFICIARIES[(idx + q) % BENEFICIARIES.length];
        const tokenCode = generateUniqueTokenCode();
        createdTokens.push({
          id: `tok-${Date.now()}-${idx}-${q}`,
          tokenNumber: tokenCode,
          orderId,
          productId: item.product.id,
          productName: item.product.name,
          customerName: newOrder.customerName,
          customerEmail: newOrder.customerEmail,
          customerPhone: newOrder.customerPhone,
          amountPaidInr: item.product.priceInr,
          customerMealStatus: 'PREPARING_IN_KITCHEN',
          beneficiaryId: ben.beneficiaryCode,
          deliveryLocation: ben.communityCenter,
          status: 'ASSIGNED',
          purchasedAt: '29 SEP 2026',
          preparedAt: '30 SEP 2026',
          assignedAt: '30 SEP 2026',
          deliveryPhoto: CONSENTED_DELIVERY_PHOTOS[0].url,
          photoUploaded: false,
          notificationSent: false,
        });
      }
    });

    setOrders((prev) => [newOrder, ...prev]);
    setTokens((prev) => [...createdTokens, ...prev]);
    clearCart();

    return {
      order: newOrder,
      payment: newPayment,
      tokens: createdTokens,
    };
  };

  const findToken = (tokenNumber: string): CharityToken | undefined => {
    const clean = tokenNumber.trim().toUpperCase();
    return tokens.find((t) => t.tokenNumber.toUpperCase() === clean);
  };

  const updateTokenStatus = (
    tokenNumber: string,
    status: CharityTokenStatus
  ) => {
    setTokens((prev) =>
      prev.map((t) => {
        if (t.tokenNumber.toUpperCase() !== tokenNumber.toUpperCase()) return t;
        return {
          ...t,
          status,
          preparedAt: t.preparedAt || '30 SEP 2026',
          assignedAt: t.assignedAt || '30 SEP 2026',
          deliveredAt: status === 'DELIVERED' ? '01 OCT 2026' : t.deliveredAt,
        };
      })
    );
  };

  const markTokenDelivered = (
    tokenNumber: string,
    beneficiaryId?: string,
    location?: string
  ) => {
    setTokens((prev) =>
      prev.map((t) => {
        if (t.tokenNumber.toUpperCase() !== tokenNumber.toUpperCase()) return t;
        return {
          ...t,
          status: 'DELIVERED',
          beneficiaryId: beneficiaryId || t.beneficiaryId || 'ZH-10482',
          deliveryLocation:
            location || t.deliveryLocation || 'Hyderabad Community Centre',
          preparedAt: t.preparedAt || '30 SEP 2026',
          assignedAt: t.assignedAt || '30 SEP 2026',
          deliveredAt: '01 OCT 2026',
          customerMealStatus: 'DELIVERED_TO_CUSTOMER',
        };
      })
    );
  };

  const uploadDeliveryPhoto = (tokenNumber: string, photoUrl: string) => {
    setTokens((prev) =>
      prev.map((t) => {
        if (t.tokenNumber.toUpperCase() !== tokenNumber.toUpperCase()) return t;
        return {
          ...t,
          deliveryPhoto: photoUrl,
          photoUploaded: true,
        };
      })
    );
  };

  const sendCustomerNotification = (tokenNumber: string) => {
    const target = findToken(tokenNumber);
    setTokens((prev) =>
      prev.map((t) => {
        if (t.tokenNumber.toUpperCase() !== tokenNumber.toUpperCase()) return t;
        return {
          ...t,
          status: 'DELIVERED',
          deliveredAt: t.deliveredAt || '01 OCT 2026',
          photoUploaded: true,
          notificationSent: true,
        };
      })
    );

    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      tokenNumber: target ? target.tokenNumber : tokenNumber.toUpperCase(),
      recipientName: target ? target.customerName : 'Supporter',
      channels: ['WEBSITE', 'EMAIL', 'WHATSAPP'],
      title: 'Your sponsored meal has been delivered.',
      message: `A nutritious meal has reached a child (Beneficiary ID: ${
        target?.beneficiaryId || 'ZH-10482'
      }) through our community distribution program. Thank you for being part of the mission. ❤️`,
      createdAt: '01 OCT 2026',
      read: false,
    };

    setNotifications((prev) => [newNotif, ...prev]);
    setActiveToast(newNotif);
  };

  const dismissToast = () => setActiveToast(null);

  const markNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <MealProgramContext.Provider
      value={{
        cart,
        cartCount,
        cartTotalInr,
        sponsoredMealsCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        tokens,
        orders,
        notifications,
        unreadCount,
        activeToast,
        dismissToast,
        markNotificationsRead,
        placeOrder,
        findToken,
        markTokenDelivered,
        uploadDeliveryPhoto,
        sendCustomerNotification,
        updateTokenStatus,
      }}
    >
      {children}
    </MealProgramContext.Provider>
  );
};

export const useMealProgram = (): MealProgramContextValue => {
  const ctx = useContext(MealProgramContext);
  if (!ctx) {
    throw new Error('useMealProgram must be used within a MealProgramProvider');
  }
  return ctx;
};
