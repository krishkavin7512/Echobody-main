import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function EchoScoreCard() {
  return (
    <Card className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden h-full">
      <CardHeader>
        <CardTitle>Your Echo Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-6">
        <div className="relative h-48 w-48">
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            <circle
              className="stroke-current text-gray-700/50"
              strokeWidth="4"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            />
            <circle
              className="stroke-current text-cyan-400 transition-all duration-1000 ease-in-out"
              strokeWidth="4"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * 82) / 100}
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">82</span>
            <span className="text-sm text-gray-400">Excellent</span>
          </div>
        </div>
        <div className="w-full space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-sm font-medium">
              <span>Workout Consistency</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="h-2 bg-gray-700" />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm font-medium">
              <span>Nutrition Goal</span>
              <span>90%</span>
            </div>
            <Progress value={90} className="h-2 bg-gray-700" />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm font-medium">
              <span>Mindfulness</span>
              <span>80%</span>
            </div>
            <Progress value={80} className="h-2 bg-gray-700" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
