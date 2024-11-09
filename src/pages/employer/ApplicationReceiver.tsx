import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmployerNavbar from "@/components/employer/EmployerNavbar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckSquare, XSquare, FileText, User } from "lucide-react";

const ApplicationReceiver = () => {
  return (
    <>
      <EmployerNavbar />
      <div className="container mx-auto px-4 py-24 space-y-8 animate-fadeIn">
        <Card>
          <CardHeader>
            <CardTitle>Application Inbox</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Match Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>Senior Developer</TableCell>
                  <TableCell className="text-green-600">95%</TableCell>
                  <TableCell>Pending Review</TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="text-green-600">
                      <CheckSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      <XSquare className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ApplicationReceiver;