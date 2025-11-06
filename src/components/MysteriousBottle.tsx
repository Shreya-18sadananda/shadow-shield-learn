import { useState } from "react";
import { FlaskConical, X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MysteriousBottle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your privacy guardian. Ask me anything about digital security, and I'll speak my answers to you!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in production, this would call Lovable AI)
    setTimeout(() => {
      const responses = [
        "Always use strong, unique passwords for each account. A password manager can help you manage them securely.",
        "Two-factor authentication adds an extra layer of security. I highly recommend enabling it on all your important accounts.",
        "Be cautious of suspicious emails asking for personal information. Legitimate companies won't ask for sensitive data via email.",
        "Keep your software updated to protect against known vulnerabilities and security threats.",
        "Use a VPN when connecting to public WiFi to encrypt your internet traffic and protect your privacy.",
      ];
      
      const response = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage: Message = { role: "assistant", content: response };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
      
      // Auto-speak the response
      speak(response);
    }, 1000);
  };

  return (
    <>
      {/* Mysterious Bottle Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="relative group"
          aria-label="Open mysterious chatbot"
        >
          <div className="absolute inset-0 animate-pulse-glow rounded-full blur-xl bg-primary/50" />
          <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-full border-2 border-primary/50 backdrop-blur-sm hover:scale-110 transition-transform duration-300 animate-float">
            <FlaskConical className="w-12 h-12 text-primary" />
          </div>
          <div className="absolute -top-12 right-0 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-primary/50 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Discover the secret...
          </div>
        </button>
      </div>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <Card className="w-full max-w-2xl h-[600px] flex flex-col bg-card/95 backdrop-blur-md border-primary/50 shadow-2xl cyber-glow">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 animate-pulse-glow">
                    <FlaskConical className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Privacy Guardian</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={isSpeaking ? stopSpeaking : undefined}
                    disabled={!isSpeaking}
                  >
                    {isSpeaking ? (
                      <Volume2 className="w-5 h-5 text-primary animate-pulse" />
                    ) : (
                      <VolumeX className="w-5 h-5 text-muted-foreground" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsOpen(false);
                      stopSpeaking();
                    }}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground border border-border/50"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-secondary text-secondary-foreground p-4 rounded-lg border border-border/50">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about digital privacy..."
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="cyber-glow"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default MysteriousBottle;
