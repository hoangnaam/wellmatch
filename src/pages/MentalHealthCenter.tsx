import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Leaf, Trophy, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MentalHealthChallenge from "@/components/MentalHealthChallenge";
import ResourceCard from "@/components/ResourceCard";

const MentalHealthCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="Peaceful mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Mental Health Resource Center</h1>
            <p className="text-xl opacity-90">Supporting your well-being journey</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="resources" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="apps">Apps</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Meditation Guides"
              description="Learn different meditation techniques for stress relief"
              icon={<Leaf className="h-6 w-6" />}
              link="/resources/meditation"
            />
            <ResourceCard
              title="Stress Management"
              description="Practical tips for managing workplace stress"
              icon={<Heart className="h-6 w-6" />}
              link="/resources/stress"
            />
            <ResourceCard
              title="Work-Life Balance"
              description="Strategies for maintaining a healthy work-life balance"
              icon={<Leaf className="h-6 w-6" />}
              link="/resources/balance"
            />
          </div>
        </TabsContent>

        <TabsContent value="apps" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Headspace
                </CardTitle>
                <CardDescription>Guided meditation and mindfulness</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("https://www.headspace.com", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Calm
                </CardTitle>
                <CardDescription>Sleep stories and meditation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("https://www.calm.com", "_blank")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MentalHealthChallenge
              title="Daily Mindfulness"
              description="Complete 5 minutes of mindfulness each day"
              progress={60}
              reward="Mindfulness Badge"
            />
            <MentalHealthChallenge
              title="Gratitude Journal"
              description="Write three things you're grateful for daily"
              progress={30}
              reward="Gratitude Master"
            />
            <MentalHealthChallenge
              title="Wellness Walks"
              description="Take a 15-minute walk during work breaks"
              progress={45}
              reward="Active Mind Badge"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalHealthCenter;