import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energy, setEnergy] = useState([5]);
  const [notes, setNotes] = useState("");

  const moods = [
    { emoji: "😊", label: "Great", value: 5 },
    { emoji: "🙂", label: "Good", value: 4 },
    { emoji: "😐", label: "Okay", value: 3 },
    { emoji: "😕", label: "Low", value: 2 },
    { emoji: "😢", label: "Poor", value: 1 },
  ];

  const history = [
    { date: "2024-01-15", mood: "😊", energy: 8, notes: "Great workout today!" },
    { date: "2024-01-14", mood: "🙂", energy: 7, notes: "Feeling good" },
    { date: "2024-01-13", mood: "😐", energy: 5, notes: "Tired from work" },
  ];

  const handleSubmit = () => {
    if (!selectedMood) {
      toast.error("Please select a mood");
      return;
    }
    toast.success("Mood logged successfully!");
    setSelectedMood(null);
    setEnergy([5]);
    setNotes("");
  };

  return (
    <Layout title="Mood & Energy">
      <div className="space-y-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Log Today's Mood</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mood Selector */}
            <div className="space-y-3">
              <label className="text-sm font-medium">How are you feeling?</label>
              <div className="flex justify-between gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.emoji)}
                    className={`flex-1 p-4 rounded-lg border-2 transition-smooth ${
                      selectedMood === mood.emoji
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{mood.emoji}</div>
                    <div className="text-sm font-medium">{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Energy Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Energy Level</label>
                <span className="text-2xl font-bold text-primary">{energy[0]}/10</span>
              </div>
              <Slider
                value={energy}
                onValueChange={setEnergy}
                min={1}
                max={10}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Notes (optional)</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="How are you feeling today? Any thoughts?"
                rows={4}
              />
            </div>

            <Button onClick={handleSubmit} className="w-full gradient-primary text-white">
              Save Entry
            </Button>
          </CardContent>
        </Card>

        {/* History */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Mood History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {history.map((entry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 flex items-start gap-4"
                >
                  <div className="text-3xl">{entry.mood}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium">
                        {new Date(entry.date).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Energy: {entry.energy}/10
                      </span>
                    </div>
                    {entry.notes && (
                      <p className="text-sm text-muted-foreground">{entry.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Mood;
