import React from "react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { toast } from "@/components/ui/use-toast";
import { CheckSquare, XSquare, Info, Filter } from "lucide-react";
import JobCard from "./JobCard";
import Navbar from "./Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  cultureHighlights: string[];
  compatibilityFactors: {
    factor: string;
    score: number;
    description: string;
  }[];
  overallMatch: number;
  values: string[];
}

const JobMatchDashboard = () => {
  const jobMatches: JobMatch[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Mindful Tech Co",
      location: "Remote",
      description: "Join our team focused on building wellness applications...",
      cultureHighlights: [
        "Flexible work hours",
        "Mental health days",
        "Wellness programs",
      ],
      compatibilityFactors: [
        {
          factor: "Work-Life Balance",
          score: 95,
          description: "Strong alignment with your preferred work-life balance",
        },
        {
          factor: "Company Values",
          score: 88,
          description: "Shared emphasis on employee well-being and growth",
        },
      ],
      overallMatch: 92,
      values: ["Work-Life Balance", "Innovation", "Wellness"],
    },
  ];

  const handleSaveJob = (jobId: string) => {
    toast({
      title: "Job Saved",
      description: "This job has been saved to your profile",
    });
  };

  const handleDismissJob = (jobId: string) => {
    toast({
      title: "Job Dismissed",
      description: "This job won't appear in your matches anymore",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-wellmatch-dark">Your Job Matches</h1>
          <div className="flex items-center space-x-4">
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="match">Best Match</SelectItem>
                <SelectItem value="company">Company Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobMatches.map((match) => (
            <div key={match.id} className="relative">
              <JobCard
                title={match.title}
                company={match.company}
                location={match.location}
                matchPercentage={match.overallMatch}
                values={match.values}
              />
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-0">
                          <Info className="h-4 w-4 text-wellmatch-accent" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Compatibility Breakdown</h4>
                          {match.compatibilityFactors.map((factor, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{factor.factor}</span>
                                <span className="font-medium">{factor.score}%</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{factor.description}</p>
                            </div>
                          ))}
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSaveJob(match.id)}
                      className="text-wellmatch-primary hover:text-wellmatch-primary/80"
                    >
                      <CheckSquare className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDismissJob(match.id)}
                      className="text-wellmatch-dark hover:text-wellmatch-dark/80"
                    >
                      <XSquare className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <h4 className="font-medium mb-1">Culture Highlights:</h4>
                  <ul className="list-disc list-inside">
                    {match.cultureHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobMatchDashboard;