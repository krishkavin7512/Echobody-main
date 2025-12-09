import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoodEntry } from "@/services/moodService";

interface MoodChartProps {
    entries: MoodEntry[];
}

export default function MoodChart({ entries }: MoodChartProps) {
    // Map mood strings to numbers for charting
    const moodValueMap: Record<string, number> = {
        "Great": 5, "Good": 4, "Okay": 3, "Low": 2, "Poor": 1,
        "😊": 5, "🙂": 4, "😐": 3, "😕": 2, "😢": 1 // Handle emojis too just in case
    };

    const data = entries.map(entry => ({
        date: new Date(entry.date || "").toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        moodScore: moodValueMap[entry.mood] || 3,
        energy: entry.energy
    })).slice(-7); // Last 7 entries

    return (
        <Card className="glass-card mb-8">
            <CardHeader>
                <CardTitle className="text-white">Mood vs Energy (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="date" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} domain={[0, 10]} />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                        />
                        <Legend wrapperStyle={{ paddingTop: '10px' }} />
                        <Line type="monotone" dataKey="moodScore" name="Mood (1-5)" stroke="#a855f7" strokeWidth={3} dot={{ r: 4, fill: '#a855f7' }} />
                        <Line type="monotone" dataKey="energy" name="Energy (1-10)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b' }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
