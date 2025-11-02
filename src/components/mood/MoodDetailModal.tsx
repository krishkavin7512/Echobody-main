
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { X, Zap } from "lucide-react";

interface MoodDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (moodEntry: any) => void; // Replace 'any' with actual MoodEntry type
  initialEntry?: {
    id?: string;
    date?: string;
    mood?: string;
    energy?: number;
    notes?: string;
  } | null;
}

const moodOptions = [
  { label: "Great", emoji: "😊" },
  { label: "Good", emoji: "🙂" },
  { label: "Okay", emoji: "😐" },
  { label: "Low", emoji: "😟" },
  { label: "Poor", emoji: "😞" },
];

export default function MoodDetailModal({
  isOpen,
  onClose,
  onSave,
  initialEntry,
}: MoodDetailModalProps) {
  const [selectedMood, setSelectedMood] = useState(initialEntry?.mood || "Okay");
  const [energyLevel, setEnergyLevel] = useState(initialEntry?.energy || 5);
  const [notes, setNotes] = useState(initialEntry?.notes || "");

  useEffect(() => {
    if (initialEntry) {
      setSelectedMood(initialEntry.mood || "Okay");
      setEnergyLevel(initialEntry.energy || 5);
      setNotes(initialEntry.notes || "");
    } else {
      setSelectedMood("Okay");
      setEnergyLevel(5);
      setNotes("");
    }
  }, [initialEntry]);

  const handleSubmit = () => {
    const newEntry = {
      id: initialEntry?.id || Date.now().toString(), // Simple ID generation
      date: initialEntry?.date || new Date().toISOString().split("T")[0],
      mood: selectedMood,
      energy: energyLevel,
      notes,
    };
    onSave(newEntry);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[425px] p-0 overflow-hidden card-glass border-none"
            onEscapeKeyDown={onClose}
            onPointerDownOutside={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <DialogHeader className="relative pb-4">
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {initialEntry ? "Edit Mood Entry" : "Log New Mood"}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Reflect on your emotional and energy state.
                </DialogDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full focus-outline"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How are you feeling?</h3>
                  <div className="flex justify-around gap-2">
                    {moodOptions.map((option) => (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedMood(option.label)}
                        className={`p-3 rounded-lg text-4xl transition-all focus-outline ${selectedMood === option.label
                            ? "bg-primary/20 ring-2 ring-primary" : "bg-muted/30 hover:bg-muted/50"}
                        `}
                        aria-pressed={selectedMood === option.label}
                        aria-label={`Set mood to ${option.label}`}
                      >
                        {option.emoji}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-400" /> Energy Level: <span className="text-primary">{energyLevel}/10</span>
                  </h3>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={[energyLevel]}
                    onValueChange={(val) => setEnergyLevel(val[0])}
                    className="w-full focus-outline"
                    aria-label="Energy level slider"
                    aria-valuemin={1}
                    aria-valuemax={10}
                    aria-valuenow={energyLevel}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Notes (Optional)</h3>
                  <Textarea
                    placeholder="Any thoughts or observations?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[80px] focus-outline"
                    aria-label="Mood notes"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border mt-4">
                <Button onClick={handleSubmit} className="focus-outline mood-animated">
                  {initialEntry ? "Save Changes" : "Log Mood"}
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
