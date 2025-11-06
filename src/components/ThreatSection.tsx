import { AlertTriangle, Bug, Mail, CreditCard, Eye, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const threats = [
  {
    icon: Mail,
    title: "Phishing Attacks",
    description: "Deceptive emails and messages designed to steal your credentials and personal information.",
    color: "text-destructive",
  },
  {
    icon: Bug,
    title: "Malware & Ransomware",
    description: "Malicious software that can encrypt your files or spy on your activities.",
    color: "text-accent",
  },
  {
    icon: CreditCard,
    title: "Identity Theft",
    description: "Criminals using your personal information to commit fraud or other crimes.",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Data Tracking",
    description: "Companies and websites collecting your browsing habits and personal data without consent.",
    color: "text-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Threats",
    description: "Malicious apps and vulnerabilities targeting smartphones and tablets.",
    color: "text-destructive",
  },
  {
    icon: AlertTriangle,
    title: "Social Engineering",
    description: "Psychological manipulation to trick you into divulging confidential information.",
    color: "text-primary",
  },
];

const ThreatSection = () => {
  return (
    <section id="threats" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Common Digital <span className="text-primary">Threats</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding threats is the first step to protecting yourself online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 group-hover:cyber-glow transition-all duration-300`}>
                    <Icon className={`w-6 h-6 ${threat.color}`} />
                  </div>
                  <CardTitle className="text-xl">{threat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {threat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreatSection;
