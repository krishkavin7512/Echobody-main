
import React, { useState } from "react";
import { motion } from "framer-motion";
import MoodToolbar from "../components/mood/MoodToolbar";
import MoodList from "../components/mood/MoodList";
import MoodDetailModal from "../components/mood/MoodDetailModal";
import MoodFormModal from "../components/mood/MoodFormModal";
import "../styles/mood.css";
// import { useCurrentUser } from "../hooks/useCurrentUser"; 
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { moodService, MoodEntry } from "@/services/moodService";
import { toast } from "sonner";

export default function MoodV2() {
  const queryClient = useQueryClient();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<MoodEntry | null>(null);

  // Fetch Moods
  const { data: moodEntries = [], isLoading } = useQuery({
    queryKey: ['moods'],
    queryFn: moodService.getAll,
  });

  const deleteMutation = useMutation({
    mutationFn: moodService.delete,
    onSuccess: () => {
      toast.success("Mood deleted");
      queryClient.invalidateQueries({ queryKey: ['moods'] });
    },
    onError: () => toast.error("Failed to delete mood"),
  });

  const handleLogMood = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectEntry = (entryId: string) => {
    const entry = moodEntries.find((e: MoodEntry) => e.id === entryId);
    if (entry) {
      setSelectedEntry(entry);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditEntry = (entryId: string) => {
    // For now, treat edit same as select, but we could open a different modal or mode
    const entry = moodEntries.find((e: MoodEntry) => e.id === entryId);
    if (entry) {
      setSelectedEntry(entry);
      setIsDetailModalOpen(true);
    }
  };

  const handleDeleteEntry = (entryId: string) => {
    if (window.confirm("Are you sure you want to delete this mood entry?")) {
      deleteMutation.mutate(entryId);
    }
  };

  const handleSaveDetail = (updatedEntry: MoodEntry) => {
    // This is where update logic would go if MoodDetailModal handles edits
    // For now we just close it as it might be read-only or we implement update later
    setIsDetailModalOpen(false);
    toast.info("Update feature coming soon!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8"
    >
      <MoodToolbar onLogMood={handleLogMood} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">Mood History</h2>
        <MoodList
          entries={moodEntries}
          onSelect={handleSelectEntry}
          onEdit={handleEditEntry}
          onDelete={handleDeleteEntry}
          loading={isLoading}
        />
      </motion.div>

      <MoodDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onSave={handleSaveDetail}
        initialEntry={selectedEntry}
      />

      <MoodFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </motion.div>
  );
}
