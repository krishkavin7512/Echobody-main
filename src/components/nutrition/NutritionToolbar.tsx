
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PlusCircle, Calendar as CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface NutritionToolbarProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  onNewMeal: () => void;
  onDateChange: (date: Date | undefined) => void;
}

export default function NutritionToolbar({
  onSearch,
  onFilter,
  onNewMeal,
  onDateChange,
}: NutritionToolbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  useEffect(() => {
    onDateChange(date);
  }, [date, onDateChange]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
    >
      <h1 className="text-3xl font-bold text-foreground">Your Nutrition</h1>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-[180px] justify-start text-left font-normal focus-outline ${!date && "text-muted-foreground"}`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search meals..."
            className="pl-10 w-full focus-outline"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search meals"
          />
        </div>
        <Select onValueChange={onFilter} aria-label="Filter meals">
          <SelectTrigger className="w-[180px] focus-outline">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="breakfast">Breakfast</SelectItem>
            <SelectItem value="lunch">Lunch</SelectItem>
            <SelectItem value="dinner">Dinner</SelectItem>
            <SelectItem value="snack">Snack</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={onNewMeal} className="focus-outline" aria-label="Log new meal">
          <PlusCircle className="mr-2 h-5 w-5" />
          Log Meal
        </Button>
      </div>
    </motion.div>
  );
}
