import React from "react";
import HeroSection from "@/components/HeroSection";
import ThreatSection from "@/components/ThreatSection";
import SafePracticesSection from "@/components/SafePracticesSection";
import LegislationSection from "@/components/LegislationSection";
import QuizSection from "@/components/QuizSection";
import ReportingTool from "@/components/ReportingTool";
import MysteriousBottle from "@/components/MysteriousBottle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
      
      <main className="relative z-10">
        <HeroSection />
        <ThreatSection />
        <SafePracticesSection />
        <LegislationSection />
        <QuizSection />
        <ReportingTool />
      </main>

      {/* Hidden chatbot */}
      <MysteriousBottle />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CyberShield Education. Protecting your digital rights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
