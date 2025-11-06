import { Shield, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Animated shield icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            <Shield className="w-24 h-24 text-primary relative z-10" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Your Digital Privacy Matters
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Navigate the digital world with confidence. Learn about privacy threats, protect yourself from scams, and stay informed about your digital rights.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="cyber-glow group"
            onClick={() => scrollToSection("threats")}
          >
            Explore Threats
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="cyber-border"
            onClick={() => scrollToSection("quiz")}
          >
            Test Your Knowledge
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: "4.7B", label: "Records Breached in 2023" },
            { value: "92%", label: "Of Attacks Start With Email" },
            { value: "$4.45M", label: "Average Data Breach Cost" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 cyber-border hover:cyber-glow transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
