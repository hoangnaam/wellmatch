import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Slider } from "@/components/ui/slider";
import { FileText, Save } from "lucide-react";

const Criteria = () => {
  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <Card>
          <CardHeader>
            <CardTitle>Job Matching Criteria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Required Skills</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill1" />
                  <label htmlFor="skill1">JavaScript</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill2" />
                  <label htmlFor="skill2">React</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="skill3" />
                  <label htmlFor="skill3">Node.js</label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Experience Level</h3>
              <Slider defaultValue={[3]} max={10} step={1} />
              <div className="text-sm text-muted-foreground">Minimum years of experience: 3</div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Education Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="edu1" />
                  <label htmlFor="edu1">Bachelor's Degree</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="edu2" />
                  <label htmlFor="edu2">Master's Degree</label>
                </div>
              </div>
            </div>

            <Button className="w-full md:w-auto">
              <Save className="h-4 w-4 mr-2" />
              Save Criteria
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Criteria;