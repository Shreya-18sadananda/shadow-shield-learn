import { useState } from "react";
import { AlertTriangle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const ReportingTool = () => {
  const [formData, setFormData] = useState({
    type: "",
    subject: "",
    description: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.type || !formData.subject || !formData.description) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Report submitted successfully! ✓",
      description: "Our security team will review your report. Thank you for helping keep the community safe.",
    });

    setFormData({
      type: "",
      subject: "",
      description: "",
      email: "",
    });
  };

  return (
    <section id="report" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Report a <span className="text-destructive">Scam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help protect others by reporting suspicious activities and digital scams
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Submit a Report</CardTitle>
            <CardDescription>
              All reports are confidential and help us track emerging threats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="type">Type of Scam *</Label>
                <Select value={formData.type} onValueChange={(val) => setFormData({ ...formData, type: val })}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select scam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phishing">Phishing Email</SelectItem>
                    <SelectItem value="identity">Identity Theft</SelectItem>
                    <SelectItem value="financial">Financial Fraud</SelectItem>
                    <SelectItem value="malware">Malware/Ransomware</SelectItem>
                    <SelectItem value="social">Social Engineering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of the incident"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide as much detail as possible including URLs, email addresses, phone numbers, etc."
                  className="min-h-32"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                  Provide your email if you'd like updates on your report
                </p>
              </div>

              <Button type="submit" className="w-full cyber-glow" size="lg">
                <Send className="mr-2 w-4 h-4" />
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReportingTool;
