import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Star, Users, Heart, Video, MessageSquare, Camera, Play, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CompanyProfile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("culture");

  const handleJoinQA = () => {
    toast({
      title: "Q&A Session",
      description: "You'll be notified when the next Q&A session begins.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Company Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">TechWell Solutions</h1>
            <p className="text-lg opacity-90">Creating healthy workplaces for tomorrow</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="culture" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="culture">Culture</TabsTrigger>
          <TabsTrigger value="wellbeing">Well-being</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="culture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Company Culture
              </CardTitle>
              <CardDescription>Our values and work environment</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Core Values</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Innovation & Creativity</li>
                    <li>Work-Life Balance</li>
                    <li>Continuous Learning</li>
                    <li>Inclusive Environment</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Work Environment</h3>
                  <p className="text-gray-600">
                    Our offices are designed to promote collaboration while respecting individual work styles.
                    We offer flexible spaces for both focused work and team activities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellbeing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Well-being Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Mental Health Support', 'Fitness Programs', 'Work-Life Balance'].map((initiative) => (
                  <div key={initiative} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{initiative}</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive programs and resources available to all employees.
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Employee Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-2">
                      "Great work environment with focus on employee well-being and growth opportunities."
                    </p>
                    <p className="text-sm text-gray-500">Software Engineer • 2 years at company</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Community Engagement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Interactive Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="h-5 w-5" />
                    <h3 className="font-semibold">Virtual Office Tour</h3>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <Play className="h-12 w-12 text-gray-400" />
                  </div>
                  <Button className="w-full">Start VR Tour</Button>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Video className="h-5 w-5" />
                    <h3 className="font-semibold">Live Q&A Sessions</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join our weekly Q&A sessions with team members and leadership.
                  </p>
                  <Button onClick={handleJoinQA} className="w-full">Join Next Session</Button>
                </div>
              </div>

              {/* Employee Content */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Employee Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((story) => (
                    <div key={story} className="space-y-2">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-sm font-medium">Employee Story #{story}</p>
                      <p className="text-xs text-gray-500">2 minutes</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyProfile;