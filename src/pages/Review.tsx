import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FeedbackSection from "@/components/FeedbackSection";

const Review = () => {
  const { id } = useParams();
  
  // TODO: In a real app, we would check if the user actually works at this company
  const userWorksAtCompany = true; // This should be replaced with actual authentication logic
  
  if (!userWorksAtCompany) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold text-wellmatch-dark mb-8">
          Review Your Company
        </h1>
        <div className="mb-8">
          <p className="text-muted-foreground">
            Share your experience working at your company. Your honest feedback helps others make informed decisions.
          </p>
        </div>
        <FeedbackSection companyId={id || ""} />
      </div>
    </>
  );
};

export default Review;