
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Dumbbell } from "lucide-react";

interface RecordItemProps {
  record: {
    id: string;
    name: string;
    date: string;
    value: number;
    unit: string;
  };
  onEdit: (recordId: string) => void;
  onDelete: (recordId: string) => void;
}

export default function RecordItem({
  record,
  onEdit,
  onDelete,
}: RecordItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50, opacity: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,220,0.1)" }}
      className="flex items-center justify-between p-4 rounded-lg bg-card progress-neon focus-outline"
      tabIndex={0}
      aria-label={`${record.name} personal record: ${record.value} ${record.unit} on ${record.date}`}
    >
      <div className="flex items-center gap-3">
        <Dumbbell className="h-5 w-5 text-primary" />
        <div>
          <p className="font-semibold text-foreground">{record.name}</p>
          <p className="text-sm text-muted-foreground">{record.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-primary">{record.value} {record.unit}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(record.id);
          }}
          aria-label={`Edit ${record.name} record`}
          className="focus-outline"
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(record.id);
          }}
          aria-label={`Delete ${record.name} record`}
          className="focus-outline"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
