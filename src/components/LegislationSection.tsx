import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const legislations = [
  {
    title: "GDPR (General Data Protection Regulation)",
    region: "European Union",
    year: "2018",
    description: "Comprehensive data protection law giving EU citizens control over their personal data and how it's processed by organizations.",
    keyPoints: [
      "Right to access your data",
      "Right to be forgotten",
      "Data portability",
      "Mandatory breach notifications",
    ],
  },
  {
    title: "CCPA (California Consumer Privacy Act)",
    region: "California, USA",
    year: "2020",
    description: "Grants California residents rights over their personal information collected by businesses.",
    keyPoints: [
      "Know what data is collected",
      "Delete personal information",
      "Opt-out of data selling",
      "Non-discrimination for exercising rights",
    ],
  },
  {
    title: "Digital Services Act (DSA)",
    region: "European Union",
    year: "2024",
    description: "Creates safer digital spaces with transparency and accountability for online platforms.",
    keyPoints: [
      "Content moderation transparency",
      "Protection against illegal content",
      "Algorithmic accountability",
      "Enhanced user rights",
    ],
  },
];

const LegislationSection = () => {
  return (
    <section id="legislation" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Privacy <span className="text-primary">Legislation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about laws protecting your digital rights worldwide.
          </p>
        </div>

        <div className="space-y-6">
          {legislations.map((law, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{law.title}</CardTitle>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {law.region}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {law.year}
                      </span>
                    </div>
                  </div>
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {law.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Points:</h4>
                  <ul className="space-y-2">
                    {law.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="cyber-border group">
            View All Legislation Updates
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegislationSection;
