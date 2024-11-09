import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

interface MentalHealthChallengeProps {
  title: string;
  description: string;
  progress: number;
  reward: string;
}

const MentalHealthChallenge = ({
  title,
  description,
  progress,
  reward,
}: MentalHealthChallengeProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="text-sm text-muted-foreground">
          Reward: {reward}
        </div>
      </CardContent>
    </Card>
  );
};

export default MentalHealthChallenge;