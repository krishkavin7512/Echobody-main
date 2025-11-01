import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Heart, RotateCcw } from 'lucide-react';
import { toast } from "sonner";

const SampleLogMood: React.FC = () => {
  const navigate = useNavigate();
  const [moodDate, setMoodDate] = useState<string>('');
  const [moodLevel, setMoodLevel] = useState<number[]>([5]); // Slider value
  const [moodFactors, setMoodFactors] = useState<string[]>([]);
  const [moodNotes, setMoodNotes] = useState<string>('');

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleFactorChange = (factor: string, checked: boolean) => {
    setMoodFactors((prev) =>
      checked ? [...prev, factor] : prev.filter((f) => f !== factor)
    );
  };

  const handleClearForm = () => {
    setMoodDate('');
    setMoodLevel([5]);
    setMoodFactors([]);
    setMoodNotes('');
    toast.info("Form cleared!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const moodData = {
      moodDate,
      moodLevel: moodLevel[0],
      moodFactors,
      moodNotes,
    };
    console.log("Logged Mood:", moodData);
    toast.success("Mood logged successfully! (See console for data)");
    // In a real app, you would send this data to a backend API
    handleClearForm(); // Clear form after successful submission
    // navigate(-1); // Optionally go back to dashboard after logging
  };

  const moodLabels = ["Terrible", "Bad", "Neutral", "Good", "Great"];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden p-8">
      {/* Glowing background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[-20%] w-[700px] h-[700px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          variant="outline"
          className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground mb-8"
          onClick={() => navigate(-1)} // Go back to the previous page (dashboard)
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <motion.h1
          className="text-4xl font-bold mb-8"
          variants={slideInUp}
          initial="hidden"
          animate="visible"
        >
          Log Your Mood <Heart className="inline-block ml-2" />
        </motion.h1>

        <motion.div variants={slideInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <Card className="bg-white/5 border-border h-full">
            <CardHeader>
              <CardTitle className="text-foreground">Mood Details</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="moodDate" className="text-muted-foreground">Date</Label>
                    <Input
                      id="moodDate"
                      type="date"
                      value={moodDate}
                      onChange={(e) => setMoodDate(e.target.value)}
                      className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moodLevel" className="text-muted-foreground">Mood Level: {moodLabels[moodLevel[0] - 1]}</Label>
                    <Slider
                      id="moodLevel"
                      min={1}
                      max={5}
                      step={1}
                      value={moodLevel}
                      onValueChange={setMoodLevel}
                      className="[&>span:first-child]:bg-white/10 [&>span:first-child]:border-border [&>span:first-child]:focus:ring-primary"
                      thumbClassName="[&>span]:bg-gradient-to-r [&>span]:from-primary [&>span]:to-secondary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 (Terrible)</span>
                      <span>5 (Great)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Factors Influencing Mood</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[ "Sleep", "Stress", "Exercise", "Nutrition", "Work", "Social" ].map((factor) => (
                      <div key={factor} className="flex items-center space-x-2">
                        <Checkbox
                          id={factor}
                          checked={moodFactors.includes(factor)}
                          onCheckedChange={(checked) => handleFactorChange(factor, checked as boolean)}
                          className="border-border data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-secondary data-[state=checked]:text-foreground"
                        />
                        <Label htmlFor={factor} className="text-muted-foreground">{factor}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="moodNotes" className="text-muted-foreground">Mood Notes</Label>
                  <Textarea
                    id="moodNotes"
                    value={moodNotes}
                    onChange={(e) => setMoodNotes(e.target.value)}
                    className="bg-white/10 border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Any additional thoughts or feelings..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-grow bg-gradient-to-r from-primary to-secondary text-foreground">
                    Save Mood
                  </Button>
                  <Button type="button" variant="outline" className="flex-grow bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground" onClick={handleClearForm}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Clear Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: animate-blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SampleLogMood;
