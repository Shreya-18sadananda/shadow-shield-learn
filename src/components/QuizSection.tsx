import { useState } from "react";
import { Brain, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const quizQuestions = [
  {
    question: "What is the most secure way to store passwords?",
    options: [
      "Write them in a notebook",
      "Save them in browser",
      "Use a password manager",
      "Use the same password everywhere",
    ],
    correct: 2,
    explanation: "Password managers encrypt your passwords and generate strong, unique passwords for each account.",
  },
  {
    question: "What should you do if you receive a suspicious email asking for personal information?",
    options: [
      "Reply with the information requested",
      "Click the link to verify",
      "Delete it and report as phishing",
      "Forward it to friends",
    ],
    correct: 2,
    explanation: "Never respond to suspicious emails. Delete them and report as phishing to protect yourself and others.",
  },
  {
    question: "Which of these is the strongest password?",
    options: [
      "password123",
      "MyName2024",
      "T7$mK9#pL2@vN4",
      "qwerty",
    ],
    correct: 2,
    explanation: "Strong passwords use a mix of uppercase, lowercase, numbers, and special characters with 12+ characters.",
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const handleAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    toast({
      title: isCorrect ? "Correct! 🎉" : "Incorrect",
      description: quizQuestions[currentQuestion].explanation,
      variant: isCorrect ? "default" : "destructive",
    });

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }, 2000);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 2000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const percentage = (score / quizQuestions.length) * 100;
    return (
      <section id="quiz" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 cyber-border">
            <CardHeader className="text-center">
              <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-primary mb-4">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                You scored {percentage.toFixed(0)}%!
              </p>
              <p className="text-muted-foreground">
                {percentage >= 70
                  ? "Excellent! You have a strong understanding of digital privacy."
                  : "Good effort! Review the explanations to improve your knowledge."}
              </p>
              <Button onClick={resetQuiz} className="cyber-glow">
                Take Quiz Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section id="quiz" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Test Your <span className="text-primary">Knowledge</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Interactive quiz to assess your digital privacy awareness
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm text-primary font-semibold">
                Score: {score}
              </span>
            </div>
            <CardTitle className="text-2xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer?.toString()} onValueChange={(val) => setSelectedAnswer(parseInt(val))}>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <Button onClick={handleAnswer} className="w-full cyber-glow" size="lg">
              Submit Answer
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
