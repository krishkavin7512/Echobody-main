
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RecordItem from "./RecordItem";
import { Skeleton } from "@/components/ui/skeleton";

interface RecordsListProps {
  records: any[]; // Replace 'any' with actual Record type
  loading: boolean;
  onEdit: (recordId: string) => void;
  onDelete: (recordId: string) => void;
}

export default function RecordsList({
  records,
  loading,
  onEdit,
  onDelete,
}: RecordsListProps) {
  if (loading && records.length === 0) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (records.length === 0 && !loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-muted-foreground"
      >
        <p className="text-lg">No personal records yet. Log a workout to set one!</p>
      </motion.div>
    );
  }

  return (
    <motion.div layout className="space-y-4">
      <AnimatePresence>
        {records.map((record) => (
          <RecordItem
            key={record.id}
            record={record}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
