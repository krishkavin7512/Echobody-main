
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { workoutService } from "@/services/workoutService";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
    date: z.string().optional(),
    name: z.string().min(2, "Name must be at least 2 characters."),
    muscleGroup: z.string().min(2, "Muscle group is required."),
    sets: z.coerce.number().min(1, "Sets must be at least 1"),
    reps: z.coerce.number().min(1, "Reps must be at least 1"),
    weight: z.coerce.number().min(0, "Weight cannot be negative"),
    caloriesBurned: z.coerce.number().min(0).optional(),
    notes: z.string().optional(),
});

interface Workout {
    id?: string;
    date?: string;
    name: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    weight: number;
    caloriesBurned?: number;
    notes?: string;
}

interface WorkoutFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Workout | null;
}

export default function WorkoutFormModal({ isOpen, onClose, initialData }: WorkoutFormModalProps) {
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: new Date().toISOString().split('T')[0],
            name: "",
            muscleGroup: "",
            sets: 3,
            reps: 10,
            weight: 0,
            caloriesBurned: 0,
            notes: "",
        },
    });

    React.useEffect(() => {
        if (initialData) {
            form.reset({
                date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                name: initialData.name,
                muscleGroup: initialData.muscleGroup,
                sets: initialData.sets,
                reps: initialData.reps,
                weight: initialData.weight,
                caloriesBurned: initialData.caloriesBurned || 0,
                notes: initialData.notes || "",
            });
        } else {
            form.reset({
                date: new Date().toISOString().split('T')[0],
                name: "",
                muscleGroup: "",
                sets: 3,
                reps: 10,
                weight: 0,
                caloriesBurned: 0,
                notes: "",
            });
        }
    }, [initialData, form, isOpen]);

    const mutation = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            // Ensure date is properly formatted with time if needed, OR backend handles LocalDate properly
            // Ideally send ISO string with time, but date picker gives YYYY-MM-DD.
            // Backend expects LocalDateTime. append T00:00:00 or T12:00:00?
            // Let's rely on standard ISO string.
            const fullDate = values.date ? new Date(values.date).toISOString() : new Date().toISOString();

            const payload = { ...values, date: fullDate };

            if (initialData?.id) {
                return workoutService.update(initialData.id, payload as any);
            }
            return workoutService.create(payload as any);
        },
        onSuccess: () => {
            toast.success(initialData ? "Workout updated!" : "Workout logged successfully!");
            queryClient.invalidateQueries({ queryKey: ['workouts'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
            form.reset();
            onClose();
        },
        onError: (error) => {
            toast.error(`Failed to log workout: ${error}`);
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        mutation.mutate(values);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] card-glass">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Workout" : "Log Workout"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Update your workout details." : "Track your progress by logging your workout details."}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Workout Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Morning Cardio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="muscleGroup"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Muscle Group</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Legs, Chest, Cardio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="sets"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sets</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reps"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reps</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weight (kg)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="caloriesBurned"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Calories Burned (Est.)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="How did it feel?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end pt-2">
                            <Button type="button" variant="ghost" onClick={onClose} className="mr-2">Cancel</Button>
                            <Button type="submit" disabled={mutation.isPending}>
                                {mutation.isPending ? "Saving..." : (initialData ? "Update Workout" : "Log Workout")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
