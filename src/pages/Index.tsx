import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import CompanyPreview from "../components/CompanyPreview";

const Index = () => {
  const featuredJobs = [
    {
      title: "Wellness Program Manager",
      company: "MindfulCorp",
      location: "Remote",
      matchPercentage: 92,
      values: ["Work-Life Balance", "Mental Health", "Personal Growth"]
    },
    {
      title: "HR Specialist",
      company: "BalanceWorks",
      location: "New York, NY",
      matchPercentage: 88,
      values: ["Flexible Hours", "Wellness Programs", "Inclusive Culture"]
    }
  ];

  const featuredCompanies = [
    {
      name: "MindfulCorp",
      industry: "Technology",
      employeeCount: "500-1000",
      wellnessInitiatives: ["Mental Health Days", "Wellness Stipend", "Flexible Hours"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      name: "BalanceWorks",
      industry: "Healthcare",
      employeeCount: "1000+",
      wellnessInitiatives: ["Work-Life Balance", "Meditation Rooms", "Health Programs"],
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <div className="min-h-screen bg-wellmatch-light">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-wellmatch-dark mb-4">
            Find a job that matches your values
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            WellMatch helps you discover companies that prioritize mental well-being and align with your personal values.
          </p>
          <button className="bg-wellmatch-primary text-white px-8 py-3 rounded-lg hover:bg-wellmatch-accent transition-colors">
            Get Started
          </button>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold text-wellmatch-dark mb-6">Featured Jobs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </section>

        {/* Featured Companies Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold text-wellmatch-dark mb-6">Companies that prioritize well-being</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredCompanies.map((company, index) => (
              <CompanyPreview key={index} {...company} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;