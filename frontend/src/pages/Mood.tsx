import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2, Calendar, Battery, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { moodService, MoodEntry } from "@/services/moodService";
import MoodChart from "@/components/mood/MoodChart";
import { motion, AnimatePresence } from "framer-motion";

const Mood = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [energy, setEnergy] = useState([5]);
  const [notes, setNotes] = useState("");

  const { data: history = [], isLoading } = useQuery({
    queryKey: ['moods'],
    queryFn: moodService.getAll,
  });

  const createMutation = useMutation({
    mutationFn: moodService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moods'] });
      toast.success("Mood logged successfully!");
      setOpen(false);
      // Reset form
      setSelectedMood(null);
      setEnergy([5]);
      setNotes("");
    },
    onError: () => toast.error("Failed to log mood"),
  });

  const deleteMutation = useMutation({
    mutationFn: moodService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['moods'] });
      toast.success("Entry deleted");
    },
    onError: () => toast.error("Failed to delete entry"),
  });

  const moods = [
    { emoji: "😊", label: "Great", value: "Great", color: "bg-emerald-500", glow: "shadow-emerald-500/50" },
    { emoji: "🙂", label: "Good", value: "Good", color: "bg-blue-500", glow: "shadow-blue-500/50" },
    { emoji: "😐", label: "Okay", value: "Okay", color: "bg-yellow-500", glow: "shadow-yellow-500/50" },
    { emoji: "😕", label: "Low", value: "Low", color: "bg-orange-500", glow: "shadow-orange-500/50" },
    { emoji: "😢", label: "Poor", value: "Poor", color: "bg-red-500", glow: "shadow-red-500/50" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) {
      toast.error("Please select a mood");
      return;
    }

    const newEntry: MoodEntry = {
      mood: selectedMood,
      energy: energy[0],
      notes: notes,
      date: new Date().toISOString(), // Ensure backend handles ISO string
    };

    createMutation.mutate(newEntry);
  };

  return (
    <Layout>
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm">
              Mood & Energy
            </h1>
            <p className="text-muted-foreground mt-1">
              Reflect on your day and track your mental state.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 text-white font-bold hover:bg-purple-700 shadow-neon-purple transition-all hover:scale-105">
                <Plus className="w-4 h-4 mr-2" />
                Check In
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/10 text-white sm:max-w-xl backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Daily Check-In</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                {/* Mood Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">How are you feeling?</label>
                  <div className="grid grid-cols-5 gap-2">
                    {moods.map((mood) => (
                      <motion.button
                        key={mood.value}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMood(mood.value)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 ${selectedMood === mood.value
                            ? `${mood.color} border-transparent ${mood.glow} text-white`
                            : "bg-black/40 border-white/10 text-gray-400 hover:border-white/30"
                          }`}
                      >
                        <div className="text-3xl mb-1 filter drop-shadow-md">{mood.emoji}</div>
                        <div className="text-[10px] uppercase font-bold tracking-wider">{mood.label}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Energy Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-300">Energy Level</label>
                    <span className="text-2xl font-bold text-yellow-400 text-glow">{energy[0]}<span className="text-sm text-gray-500">/10</span></span>
                  </div>
                  <Slider
                    value={energy}
                    onValueChange={setEnergy}
                    min={1}
                    max={10}
                    step={1}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-widest">
                    <span>Low Battery</span>
                    <span>Fully Charged</span>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">Notes (optional)</label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={3}
                    className="bg-black/40 border-white/10 resize-none focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={createMutation.isPending}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-neon-purple mt-2"
                >
                  {createMutation.isPending ? "Saving..." : "Save Entry"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Analytics Chart */}
        {!isLoading && history.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <MoodChart entries={history} />
          </motion.div>
        )}

        {/* History List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {history.map((entry: any, index: number) => {
              const moodObj = moods.find(m => m.value === entry.mood) || moods[2];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="glass-card p-5 rounded-2xl relative group hover:border-purple-500/30 transition-colors"
                  layout
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${moodObj.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {moodObj.emoji}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{moodObj.label}</div>
                        <div className="text-xs text-purple-400 flex items-center gap-1">
                          <Battery className="w-3 h-3" /> Energy: {entry.energy}/10
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteMutation.mutate(entry.id)}
                      className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 -mt-1 -mr-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {entry.notes && (
                    <div className="mt-3 p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 italic">
                      <MessageSquare className="w-3 h-3 inline mr-2 text-muted-foreground" />
                      "{entry.notes}"
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-muted-foreground/60">
                    <Calendar className="w-3 h-3" />
                    {new Date(entry.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {!isLoading && history.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-2xl">
              <div className="text-6xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-white">No entries yet</h3>
              <p className="text-muted-foreground mt-2">Take a moment to check in with yourself.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Mood;

