import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Log Workout
        </Button>
        <Button variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Log Meal
        </Button>
        <Button variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          Log Mood
        </Button>
      </CardContent>
    </Card>
  );
}
