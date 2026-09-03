import React from 'react';
import { StudyProvider, useStudy } from './context/StudyContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/landing/Hero';
import { EnterpriseTrustSection } from './components/landing/EnterpriseTrustSection';
import { ProblemSolver } from './components/landing/ProblemSolver';
import { CoreLoopSection } from './components/landing/CoreLoopSection';
import { InteractiveDemoPreview } from './components/landing/InteractiveDemoPreview';
import { EnterpriseTestimonials } from './components/landing/EnterpriseTestimonials';
import { RoadmapView } from './components/roadmap/RoadmapView';
import { ExamSimulator } from './components/testEngine/ExamSimulator';
import { SnapSolveStudio } from './components/doubtSolver/SnapSolveStudio';
import { CollegeHubView } from './components/collegeHub/CollegeHubView';
import { AnalyticsView } from './components/analytics/AnalyticsView';

const MainAppContent: React.FC = () => {
  const { activeTab } = useStudy();

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100">
      <Navbar />

      <main className="flex-grow">
        {activeTab === 'landing' && (
          <>
            <Hero />
            <EnterpriseTrustSection />
            <ProblemSolver />
            <CoreLoopSection />
            <InteractiveDemoPreview />
            <EnterpriseTestimonials />
          </>
        )}

        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'testEngine' && <ExamSimulator />}
        {activeTab === 'doubtSolver' && <SnapSolveStudio />}
        {activeTab === 'collegeHub' && <CollegeHubView />}
        {activeTab === 'analytics' && <AnalyticsView />}
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StudyProvider>
      <MainAppContent />
    </StudyProvider>
  );
};

export default App;
