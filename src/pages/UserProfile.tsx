import { User, Globe, Heart, Briefcase, Brain, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ValueMatch from "@/components/ValueMatch";

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
      {/* Header Section */}
      <div className="flex items-center space-x-6 mb-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-wellmatch-dark">John Doe</h1>
          <p className="text-wellmatch-accent">Software Engineer</p>
        </div>
      </div>

      {/* Personal Details */}
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <User className="h-5 w-5 text-wellmatch-primary" />
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p>john.doe@example.com</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p>San Francisco, CA</p>
          </div>
        </CardContent>
      </Card>

      {/* Cultural Preferences */}
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Globe className="h-5 w-5 text-wellmatch-primary" />
          <CardTitle>Cultural Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Work Environment</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ValueMatch percentage={85} />
              <p className="text-sm">Remote-first</p>
              <p className="text-sm">Collaborative</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Communication Style</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ValueMatch percentage={90} />
              <p className="text-sm">Direct</p>
              <p className="text-sm">Transparent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Well-being Goals */}
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Heart className="h-5 w-5 text-wellmatch-primary" />
          <CardTitle>Well-being Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-wellmatch-secondary/20 rounded-lg">
              <h3 className="font-medium mb-2">Work-Life Balance</h3>
              <ValueMatch percentage={95} />
            </div>
            <div className="p-4 bg-wellmatch-secondary/20 rounded-lg">
              <h3 className="font-medium mb-2">Mental Health Support</h3>
              <ValueMatch percentage={80} />
            </div>
            <div className="p-4 bg-wellmatch-secondary/20 rounded-lg">
              <h3 className="font-medium mb-2">Professional Growth</h3>
              <ValueMatch percentage={88} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Past Job Experiences */}
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Briefcase className="h-5 w-5 text-wellmatch-primary" />
          <CardTitle>Past Job Experiences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-2 border-wellmatch-primary pl-4">
            <h3 className="font-medium">Senior Software Engineer</h3>
            <p className="text-sm text-muted-foreground">TechCorp Inc. • 2020-2023</p>
            <p className="mt-2">Led development of core platform features and mentored junior developers.</p>
          </div>
          <div className="border-l-2 border-wellmatch-primary pl-4">
            <h3 className="font-medium">Software Engineer</h3>
            <p className="text-sm text-muted-foreground">StartupXYZ • 2018-2020</p>
            <p className="mt-2">Full-stack development for a growing SaaS platform.</p>
          </div>
        </CardContent>
      </Card>

      {/* Psychological Assessments */}
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Brain className="h-5 w-5 text-wellmatch-primary" />
          <CardTitle>Psychological Assessments</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Personality Type</h3>
            <p className="text-2xl font-semibold text-wellmatch-accent">INFJ-T</p>
            <p className="text-sm text-muted-foreground mt-1">The Advocate</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Work Style</h3>
            <p className="text-2xl font-semibold text-wellmatch-accent">Strategic Thinker</p>
            <p className="text-sm text-muted-foreground mt-1">Analytical & Detail-oriented</p>
          </div>
        </CardContent>
      </Card>

      {/* Value Indicators */}
      <Card>
        <CardHeader className="flex flex-row items-center space-x-2">
          <Target className="h-5 w-5 text-wellmatch-primary" />
          <CardTitle>Value Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium mb-2">Innovation</h3>
              <ValueMatch percentage={92} />
            </div>
            <div>
              <h3 className="font-medium mb-2">Collaboration</h3>
              <ValueMatch percentage={88} />
            </div>
            <div>
              <h3 className="font-medium mb-2">Work-Life Balance</h3>
              <ValueMatch percentage={95} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;