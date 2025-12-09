
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { moodService } from '@/services/moodService';
import { toast } from 'sonner';

const moodSchema = z.object({
    mood: z.string().min(1, "Mood is required"),
    energy: z.number().min(1).max(10),
    notes: z.string().optional(),
});

type MoodFormValues = z.infer<typeof moodSchema>;

interface MoodFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MoodFormModal({ isOpen, onClose }: MoodFormModalProps) {
    const queryClient = useQueryClient();

    const form = useForm<MoodFormValues>({
        resolver: zodResolver(moodSchema),
        defaultValues: {
            mood: 'Good',
            energy: 5,
            notes: '',
        },
    });

    const mutation = useMutation({
        mutationFn: moodService.create,
        onSuccess: () => {
            toast.success("Mood logged successfully!");
            queryClient.invalidateQueries({ queryKey: ['moods'] });
            form.reset();
            onClose();
        },
        onError: () => {
            toast.error("Failed to log mood.");
        },
    });

    const onSubmit = (data: MoodFormValues) => {
        mutation.mutate(data);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] card-glass border-primary/20">
                <DialogHeader>
                    <DialogTitle>Log Your Mood</DialogTitle>
                    <DialogDescription>How are you feeling right now?</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        <FormField
                            control={form.control}
                            name="mood"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mood</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select mood" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Great">Great 🤩</SelectItem>
                                            <SelectItem value="Good">Good 🙂</SelectItem>
                                            <SelectItem value="Okay">Okay 😐</SelectItem>
                                            <SelectItem value="Low">Low 😔</SelectItem>
                                            <SelectItem value="Bad">Bad 😫</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="energy"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Energy Level ({field.value}/10)</FormLabel>
                                    <FormControl>
                                        <Slider
                                            min={1}
                                            max={10}
                                            step={1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                            className="py-4"
                                        />
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
                                    <FormLabel>Notes (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Why do you feel this way?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                            <Button type="submit" disabled={mutation.isPending}>Save</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
