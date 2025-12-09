
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { nutritionService } from "@/services/nutritionService";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
    title: z.string().min(2, "Title is required."),
    calories: z.coerce.number().min(0, "Calories must be positive"),
    protein: z.coerce.number().min(0),
    carbs: z.coerce.number().min(0),
    fat: z.coerce.number().min(0),
    type: z.string().min(1, "Type is required"),
    notes: z.string().optional(),
});

interface Meal {
    id?: string;
    title: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    notes?: string;
    dateTime?: string;
}

interface MealFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Meal | null;
}

export default function MealFormModal({ isOpen, onClose, initialData }: MealFormModalProps) {
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            type: "breakfast",
            notes: "",
        },
    });

    React.useEffect(() => {
        if (initialData) {
            form.reset({
                title: initialData.title,
                calories: initialData.calories,
                protein: initialData.protein,
                carbs: initialData.carbs,
                fat: initialData.fat,
                type: initialData.type,
                notes: initialData.notes || "",
            });
        } else {
            form.reset({
                title: "",
                calories: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
                type: "breakfast",
                notes: "",
            });
        }
    }, [initialData, form, isOpen]);

    const mutation = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (initialData?.id) {
                return nutritionService.update(initialData.id, values as any);
            }
            return nutritionService.create(values as any);
        },
        onSuccess: () => {
            toast.success(initialData ? "Meal updated!" : "Meal logged successfully!");
            queryClient.invalidateQueries({ queryKey: ['meals'] });
            queryClient.invalidateQueries({ queryKey: ['dashboardSummary'] });
            form.reset();
            onClose();
        },
        onError: (error) => {
            toast.error(`Failed to log meal: ${error}`);
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        mutation.mutate(values);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] card-glass">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Meal" : "Log Meal"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Update your meal details." : "Track your nutrition."}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Meal Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Chicken Salad" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="breakfast">Breakfast</SelectItem>
                                                <SelectItem value="lunch">Lunch</SelectItem>
                                                <SelectItem value="dinner">Dinner</SelectItem>
                                                <SelectItem value="snack">Snack</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="calories"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Calories</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="protein"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Protein (g)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="carbs"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Carbs (g)</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fat (g)</FormLabel>
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
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Notes</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Description..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end pt-2">
                            <Button type="button" variant="ghost" onClick={onClose} className="mr-2">Cancel</Button>
                            <Button type="submit" disabled={mutation.isPending}>
                                {mutation.isPending ? "Saving..." : (initialData ? "Update Meal" : "Log Meal")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
