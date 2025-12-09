
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Zap } from "lucide-react";

import { MoodEntry } from "@/services/moodService";

interface MoodEntryCardProps {
  entry: MoodEntry;
  onSelect: (entryId: string) => void;
  onEdit: (entryId: string) => void;
  onDelete: (entryId: string) => void;
}

const getMoodEmoji = (mood: string) => {
  switch (mood.toLowerCase()) {
    case "great":
      return "😊";
    case "good":
      return "🙂";
    case "okay":
      return "😐";
    case "low":
      return "😟";
    case "poor":
      return "😞";
    default:
      return "";
  }
};

export default function MoodEntryCard({
  entry,
  onSelect,
  onEdit,
  onDelete,
}: MoodEntryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 20px rgba(0,255,220,0.1)" }}
      className="mood-neon rounded-xl overflow-hidden cursor-pointer focus-outline"
      onClick={() => entry.id && onSelect(entry.id)}
      tabIndex={0}
      role="button"
      aria-label={`View details for mood on ${entry.date}`}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="text-2xl">{getMoodEmoji(entry.mood)}</span> {entry.mood}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {entry.date ? new Date(entry.date).toLocaleDateString() : 'Just now'}
          </p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-yellow-400" /> Energy: <span className="text-foreground font-medium">{entry.energy}/10</span>
          </p>
          {entry.notes && (
            <p className="mt-2 line-clamp-2">Notes: <span className="text-foreground font-medium">{entry.notes}</span></p>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              entry.id && onEdit(entry.id);
            }}
            aria-label={`Edit mood`}
            className="focus-outline"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              entry.id && onDelete(entry.id);
            }}
            aria-label={`Delete mood`}
            className="focus-outline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
