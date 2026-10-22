/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MealProgramProvider } from './context/MealProgramContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { SupportModal, SupportTab } from './components/SupportModal';
import { NotificationToast } from './components/NotificationToast';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Impact } from './pages/Impact';
import { Contact } from './pages/Contact';
import { MealBox } from './pages/MealBox';
import { TrackMeal } from './pages/TrackMeal';
import { CelebrateAndGive } from './pages/CelebrateAndGive';
import { CSRTaxBenefits } from './pages/CSRTaxBenefits';

function AppContent() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [supportModalTab, setSupportModalTab] = useState<SupportTab>('donate');
  const [preselectedProject, setPreselectedProject] = useState<string>('all');
  const { pathname } = useLocation();

  const handleOpenSupport = (
    tab: SupportTab = 'donate',
    projectSlug: string = 'all'
  ) => {
    setSupportModalTab(tab);
    setPreselectedProject(projectSlug);
    setSupportModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#080808] selection:bg-[#D7262F] selection:text-white">
      <Navbar onOpenSupport={(tab) => handleOpenSupport(tab, 'all')} />

      <div className="flex-1">
        <PageTransition>
          <Routes>
            <Route
              path="/"
              element={<Home onOpenSupport={handleOpenSupport} />}
            />
            <Route path="/meal-box" element={<MealBox />} />
            <Route path="/track-meal" element={<TrackMeal />} />
            <Route path="/celebrate-and-give" element={<CelebrateAndGive />} />
            <Route path="/csr-tax-benefits" element={<CSRTaxBenefits />} />
            <Route
              path="/about"
              element={<About onOpenSupport={handleOpenSupport} />}
            />
            <Route
              path="/projects"
              element={<Projects onOpenSupport={handleOpenSupport} />}
            />
            <Route
              path="/projects/:slug"
              element={<ProjectDetail onOpenSupport={handleOpenSupport} />}
            />
            <Route
              path="/impact"
              element={<Impact onOpenSupport={handleOpenSupport} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </div>

      <Footer />

      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        initialTab={supportModalTab}
        preselectedProjectSlug={preselectedProject}
      />

      <NotificationToast />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MealProgramProvider>
        <AppContent />
      </MealProgramProvider>
    </BrowserRouter>
  );
}
