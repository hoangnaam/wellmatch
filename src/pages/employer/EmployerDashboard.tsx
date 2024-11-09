import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Briefcase, Users, FileText, CheckSquare, XSquare } from "lucide-react";

const EmployerDashboard = () => {
  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <h1 className="text-3xl font-bold text-wellmatch-dark">Employer Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <Users className="h-4 w-4 text-wellmatch-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+20% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
              <Briefcase className="h-4 w-4 text-wellmatch-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Active job listings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Matched Candidates</CardTitle>
              <CheckSquare className="h-4 w-4 text-wellmatch-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Based on your criteria</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;