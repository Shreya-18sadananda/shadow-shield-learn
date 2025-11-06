import { CheckCircle2, Lock, Shield, Key, Globe, Database } from "lucide-react";

const practices = [
  {
    icon: Lock,
    title: "Use Strong Passwords",
    description: "Create unique passwords with 12+ characters, mixing letters, numbers, and symbols. Use a password manager.",
  },
  {
    icon: Shield,
    title: "Enable Two-Factor Authentication",
    description: "Add an extra layer of security to your accounts with 2FA using authenticator apps or security keys.",
  },
  {
    icon: Key,
    title: "Keep Software Updated",
    description: "Regularly update your operating system, browsers, and apps to patch security vulnerabilities.",
  },
  {
    icon: Globe,
    title: "Use VPN on Public WiFi",
    description: "Protect your internet traffic with a VPN when using public networks to prevent eavesdropping.",
  },
  {
    icon: Database,
    title: "Backup Your Data",
    description: "Regularly backup important files to external drives or encrypted cloud storage services.",
  },
  {
    icon: CheckCircle2,
    title: "Verify Before Clicking",
    description: "Always verify sender identity and hover over links before clicking. When in doubt, don't click.",
  },
];

const SafePracticesSection = () => {
  return (
    <section id="practices" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Safe Internet <span className="text-accent">Practices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential habits to keep your digital life secure and private.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SafePracticesSection;
