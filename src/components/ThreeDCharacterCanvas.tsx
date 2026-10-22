/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type CharacterAction = 'idle' | 'wave' | 'celebrate' | 'serve' | 'dance';

interface ThreeDCharacterCanvasProps {
  action?: CharacterAction;
  onCharacterClick?: () => void;
  className?: string;
  autoRotate?: boolean;
}

export const ThreeDCharacterCanvas: React.FC<ThreeDCharacterCanvasProps> = ({
  action = 'idle',
  onCharacterClick,
  className = 'w-full h-full',
  autoRotate = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<CharacterAction>(action);
  actionRef.current = action;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.45, 3.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.0);
    keyLight.position.set(2.5, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdff4ff, 1.0);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    // Rim light with brand electric green tint
    const rimLight = new THREE.DirectionalLight(0x49e619, 1.2);
    rimLight.position.set(0, 2, -3);
    scene.add(rimLight);

    // Warm under-light for the bowl
    const bowlLight = new THREE.PointLight(0xffaa33, 1.5, 2.5);
    bowlLight.position.set(0, -0.2, 0.7);
    scene.add(bowlLight);

    // --- Character Group ---
    const characterGroup = new THREE.Group();
    characterGroup.position.set(0, -0.2, 0);
    scene.add(characterGroup);

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xffd3a5,
      roughness: 0.35,
      metalness: 0.05,
    });
    const cheekMat = new THREE.MeshStandardMaterial({
      color: 0xff7b89,
      roughness: 0.5,
    });
    const eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
    });
    const pupilMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.2,
    });
    const hatMat = new THREE.MeshStandardMaterial({
      color: 0xfcfcfc,
      roughness: 0.3,
    });
    const redBandMat = new THREE.MeshStandardMaterial({
      color: 0xd7262f, // Brand red
      roughness: 0.3,
    });
    const apronMat = new THREE.MeshStandardMaterial({
      color: 0x122023, // Brand dark slate
      roughness: 0.4,
    });
    const greenAccentMat = new THREE.MeshStandardMaterial({
      color: 0x49e619, // Brand electric green
      roughness: 0.2,
      emissive: 0x228b0d,
      emissiveIntensity: 0.25,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xffbe1a,
      roughness: 0.2,
      metalness: 0.4,
    });
    const bowlMat = new THREE.MeshStandardMaterial({
      color: 0x4edbe2, // Brand vibrant cyan
      roughness: 0.25,
    });
    const foodMat = new THREE.MeshStandardMaterial({
      color: 0xf39c12, // Warm nutritious food
      roughness: 0.6,
      emissive: 0xd35400,
      emissiveIntensity: 0.2,
    });

    // 1. Torso & Body
    const torso = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.46, 0.7, 24),
      apronMat
    );
    torso.position.y = 0;
    characterGroup.add(torso);

    // Apron Badge (Heart / Golden Grain Emblem)
    const badge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.03, 16),
      goldMat
    );
    badge.rotation.x = Math.PI / 2;
    badge.position.set(0, 0.1, 0.41);
    characterGroup.add(badge);

    // Apron Ribbon Trim (Brand Red)
    const apronTrim = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.025, 12, 32),
      redBandMat
    );
    apronTrim.rotation.x = Math.PI / 2;
    apronTrim.position.set(0, 0.25, 0);
    characterGroup.add(apronTrim);

    // 2. Head Group (Rotates and tracks cursor)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.68, 0);
    characterGroup.add(headGroup);

    // Head Base
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.46, 32, 28),
      skinMat
    );
    headGroup.add(head);

    // Cheeks
    const leftCheek = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 16, 16),
      cheekMat
    );
    leftCheek.position.set(-0.28, -0.05, 0.36);
    headGroup.add(leftCheek);

    const rightCheek = leftCheek.clone();
    rightCheek.position.x = 0.28;
    headGroup.add(rightCheek);

    // Eyes
    const createEye = (isRight: boolean) => {
      const eyeGroup = new THREE.Group();
      const white = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 18, 18),
        eyeWhiteMat
      );
      eyeGroup.add(white);

      const pupil = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        pupilMat
      );
      pupil.position.set(0, 0, 0.055);
      eyeGroup.add(pupil);

      const sparkle = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      sparkle.position.set(0.022, 0.022, 0.08);
      eyeGroup.add(sparkle);

      eyeGroup.position.set(isRight ? 0.17 : -0.17, 0.06, 0.41);
      return eyeGroup;
    };

    const leftEye = createEye(false);
    const rightEye = createEye(true);
    headGroup.add(leftEye);
    headGroup.add(rightEye);

    // Smile / Mouth
    const smileGeom = new THREE.TorusGeometry(0.09, 0.02, 10, 20, Math.PI * 0.85);
    const smileMat = new THREE.MeshStandardMaterial({
      color: 0x3a0d11,
      roughness: 0.3,
    });
    const mouth = new THREE.Mesh(smileGeom, smileMat);
    mouth.rotation.x = Math.PI;
    mouth.rotation.z = -Math.PI * 0.075;
    mouth.position.set(0, -0.16, 0.43);
    headGroup.add(mouth);

    // 3. Chef Toque (Hat)
    const hatGroup = new THREE.Group();
    hatGroup.position.set(0, 0.38, 0);
    headGroup.add(hatGroup);

    // Hat Band with red accent stripe
    const hatBand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.42, 0.14, 28),
      redBandMat
    );
    hatGroup.add(hatBand);

    // Hat Band Inner White
    const hatRim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.43, 0.41, 0.04, 28),
      hatMat
    );
    hatRim.position.y = 0.07;
    hatGroup.add(hatRim);

    // Hat Puffy Crown (Pleated chef top)
    const hatPuff = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.42, 0.48, 28),
      hatMat
    );
    hatPuff.position.y = 0.32;
    hatGroup.add(hatPuff);

    // Hat Top Dome
    const hatDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.56, 28, 16),
      hatMat
    );
    hatDome.scale.set(1, 0.5, 1);
    hatDome.position.y = 0.54;
    hatGroup.add(hatDome);

    // Hat Green Leaf / Sparkle Brooch
    const hatBrooch = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 12, 12),
      greenAccentMat
    );
    hatBrooch.position.set(0, 0.01, 0.42);
    hatGroup.add(hatBrooch);

    // 4. Arms & Hands
    // Left Arm (holding bowl / waving)
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.46, 0.18, 0);
    characterGroup.add(leftArmGroup);

    const leftArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 0.4, 16),
      skinMat
    );
    leftArm.position.y = -0.18;
    leftArmGroup.add(leftArm);

    const leftHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 16, 16),
      hatMat // White chef glove
    );
    leftHand.position.y = -0.38;
    leftArmGroup.add(leftHand);

    // Right Arm (waving / gesturing)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.46, 0.18, 0);
    characterGroup.add(rightArmGroup);

    const rightArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 0.4, 16),
      skinMat
    );
    rightArm.position.y = -0.18;
    rightArmGroup.add(rightArm);

    const rightHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 16, 16),
      hatMat // White chef glove
    );
    rightHand.position.y = -0.38;
    rightArmGroup.add(rightHand);

    // 5. Steaming Nutritious Bowl of Food (held in front)
    const bowlGroup = new THREE.Group();
    bowlGroup.position.set(0, -0.05, 0.5);
    characterGroup.add(bowlGroup);

    // Outer Bowl
    const bowl = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.18, 0.24, 28, 1, true),
      bowlMat
    );
    bowlGroup.add(bowl);

    const bowlBottom = new THREE.Mesh(
      new THREE.CircleGeometry(0.18, 28),
      bowlMat
    );
    bowlBottom.rotation.x = Math.PI / 2;
    bowlBottom.position.y = -0.12;
    bowlGroup.add(bowlBottom);

    // Hot Food Inside
    const food = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.28, 0.18, 28),
      foodMat
    );
    food.position.y = 0.02;
    bowlGroup.add(food);

    // Garnish / Herb Sprig (Fresh parsley / mint on top)
    const garnish = new THREE.Mesh(
      new THREE.ConeGeometry(0.06, 0.12, 6),
      greenAccentMat
    );
    garnish.position.set(0.04, 0.14, 0.03);
    garnish.rotation.z = -0.3;
    bowlGroup.add(garnish);

    // 6. Floating Steam Particles
    const steamCount = 18;
    const steamSpheres: Array<{
      mesh: THREE.Mesh;
      speed: number;
      initialX: number;
      initialZ: number;
      offset: number;
    }> = [];

    const steamMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < steamCount; i++) {
      const radius = 0.03 + Math.random() * 0.04;
      const steamMesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 10, 10),
        steamMat.clone()
      );
      const initX = (Math.random() - 0.5) * 0.3;
      const initZ = (Math.random() - 0.5) * 0.3;
      steamMesh.position.set(initX, 0.15 + Math.random() * 0.5, initZ);
      bowlGroup.add(steamMesh);
      steamSpheres.push({
        mesh: steamMesh,
        speed: 0.008 + Math.random() * 0.012,
        initialX: initX,
        initialZ: initZ,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // 7. Legs & Shoes
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x122023,
      roughness: 0.5,
    });
    const shoeMat = new THREE.MeshStandardMaterial({
      color: 0x080808,
      roughness: 0.2,
    });

    const leftLeg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.3, 16),
      legMat
    );
    leftLeg.position.set(-0.18, -0.42, 0);
    characterGroup.add(leftLeg);

    const rightLeg = leftLeg.clone();
    rightLeg.position.x = 0.18;
    characterGroup.add(rightLeg);

    const leftShoe = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.12, 0.28),
      shoeMat
    );
    leftShoe.position.set(-0.18, -0.6, 0.05);
    characterGroup.add(leftShoe);

    const rightShoe = leftShoe.clone();
    rightShoe.position.x = 0.18;
    characterGroup.add(rightShoe);

    // Subtle Ground Shadow
    const shadowGeo = new THREE.CircleGeometry(0.7, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.22,
    });
    const groundShadow = new THREE.Mesh(shadowGeo, shadowMat);
    groundShadow.rotation.x = -Math.PI / 2;
    groundShadow.position.y = -0.66;
    characterGroup.add(groundShadow);

    // --- Interactive Mouse Tracking & Drag Orbit ---
    let targetRotationY = 0;
    let targetHeadTiltX = 0;
    let targetHeadTiltY = 0;
    let isDragging = false;
    let previousMouseX = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        targetRotationY += deltaX * 0.012;
        previousMouseX = e.clientX;
      } else {
        // Look at mouse
        targetHeadTiltY = nx * 0.45;
        targetHeadTiltX = -ny * 0.3;
      }
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);

    // Click handler
    const handleClick = () => {
      onCharacterClick?.();
    };
    domEl.addEventListener('click', handleClick);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let blinkTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const currentAction = actionRef.current;

      // 1. Mouse Drag Rotation Smoothing
      if (autoRotate && !isDragging) {
        targetRotationY += 0.005;
      }
      characterGroup.rotation.y +=
        (targetRotationY - characterGroup.rotation.y) * 0.1;

      // 2. Head Look At Cursor
      headGroup.rotation.y +=
        (targetHeadTiltY - headGroup.rotation.y) * 0.12;
      headGroup.rotation.x +=
        (targetHeadTiltX - headGroup.rotation.x) * 0.12;

      // 3. Eye Blinking (Every ~3.5 seconds)
      blinkTimer += 0.016;
      if (blinkTimer > 3.5) {
        leftEye.scale.y = 0.1;
        rightEye.scale.y = 0.1;
        if (blinkTimer > 3.65) {
          leftEye.scale.y = 1;
          rightEye.scale.y = 1;
          blinkTimer = 0;
        }
      }

      // 4. Steam Particles Animation
      steamSpheres.forEach((s) => {
        s.mesh.position.y += s.speed;
        s.mesh.position.x = s.initialX + Math.sin(elapsed * 2 + s.offset) * 0.06;
        s.mesh.position.z = s.initialZ + Math.cos(elapsed * 2 + s.offset) * 0.06;

        const lifeRatio = (s.mesh.position.y - 0.15) / 0.7;
        const mat = s.mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.max(0, 0.4 * (1 - lifeRatio));
        s.mesh.scale.setScalar(1 + lifeRatio * 1.5);

        if (s.mesh.position.y > 0.85) {
          s.mesh.position.y = 0.15;
          s.mesh.scale.setScalar(1);
        }
      });

      // 5. Actions / Choreography
      switch (currentAction) {
        case 'wave': {
          // Bob body
          characterGroup.position.y = -0.2 + Math.sin(elapsed * 5) * 0.04;
          // Right arm raises high and waves
          rightArmGroup.rotation.z = -2.2 + Math.sin(elapsed * 9) * 0.35;
          rightArmGroup.rotation.x = -0.2;
          // Left arm holds bowl gently
          leftArmGroup.rotation.z = 0.6;
          leftArmGroup.rotation.x = 0.4;
          bowlGroup.position.set(0, -0.05 + Math.sin(elapsed * 5) * 0.02, 0.5);
          break;
        }
        case 'celebrate': {
          // Energetic happy jump
          const jump = Math.abs(Math.sin(elapsed * 6)) * 0.22;
          characterGroup.position.y = -0.2 + jump;
          groundShadow.scale.setScalar(1 - jump * 0.6);

          // Both arms raised high celebrating
          rightArmGroup.rotation.z = -2.4 + Math.sin(elapsed * 12) * 0.2;
          leftArmGroup.rotation.z = 2.4 - Math.sin(elapsed * 12) * 0.2;
          rightArmGroup.rotation.x = 0.1;
          leftArmGroup.rotation.x = 0.1;

          // Bowl lifts up happily
          bowlGroup.position.set(0, 0.12 + jump * 0.5, 0.45);
          break;
        }
        case 'serve': {
          // Present warm meal forward proudly
          characterGroup.position.y = -0.2;
          characterGroup.rotation.x = 0.08; // Slight respectful bow
          // Arms hold bowl extended forward
          rightArmGroup.rotation.z = -0.9;
          rightArmGroup.rotation.x = 0.6 + Math.sin(elapsed * 3) * 0.05;
          leftArmGroup.rotation.z = 0.9;
          leftArmGroup.rotation.x = 0.6 + Math.sin(elapsed * 3) * 0.05;
          // Bowl moves forward and pulses with warm steam
          bowlGroup.position.set(0, -0.02, 0.65 + Math.sin(elapsed * 3) * 0.04);
          bowlLight.intensity = 2.0 + Math.sin(elapsed * 4) * 0.5;
          break;
        }
        case 'dance': {
          // Playful side-to-side groove
          characterGroup.position.y = -0.2 + Math.abs(Math.sin(elapsed * 4)) * 0.06;
          characterGroup.rotation.z = Math.sin(elapsed * 4) * 0.12;
          rightArmGroup.rotation.z = -1.2 + Math.sin(elapsed * 4) * 0.8;
          leftArmGroup.rotation.z = 1.2 - Math.cos(elapsed * 4) * 0.8;
          bowlGroup.position.set(
            Math.sin(elapsed * 4) * 0.08,
            -0.05,
            0.5
          );
          break;
        }
        case 'idle':
        default: {
          // Gentle breathing and floating
          const breath = Math.sin(elapsed * 2.2) * 0.025;
          characterGroup.position.y = -0.2 + breath;
          characterGroup.rotation.x = 0;
          characterGroup.rotation.z = 0;

          // Gentle arm hold
          rightArmGroup.rotation.z = -0.55 + Math.sin(elapsed * 2.2) * 0.04;
          rightArmGroup.rotation.x = 0.35;
          leftArmGroup.rotation.z = 0.55 - Math.sin(elapsed * 2.2) * 0.04;
          leftArmGroup.rotation.x = 0.35;

          bowlGroup.position.set(0, -0.05 + breath * 0.5, 0.5);
          groundShadow.scale.setScalar(1 + breath);
          break;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Observer ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domEl.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
      domEl.removeEventListener('click', handleClick);

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }

      // Dispose Three.js resources
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else if (child.material) {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [autoRotate, onCharacterClick]);

  return (
    <div
      ref={mountRef}
      className={`relative cursor-grab active:cursor-grabbing select-none touch-none ${className}`}
      title="3D Pip Mascot — Drag to rotate, click to animate!"
    />
  );
};
