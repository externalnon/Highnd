import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinButton from "@/components/ui/join-button";

const Jobs = () => {
  const positions = [
    {
      title: "Professional Valorant Player",
      type: "Full-time",
      location: "Remote / Gaming House",
      department: "Esports",
      salary: "Competitive + Winnings",
      description: "Join our world-class Valorant roster. Looking for skilled players with tournament experience.",
      requirements: ["Immortal+ Rank", "Tournament Experience", "Team Communication", "Professional Mindset"],
    },
    {
      title: "Content Creator - FPS Games",
      type: "Contract",
      location: "Remote",
      department: "Content",
      salary: "$50K - $80K + Revenue Share",
      description: "Create engaging content around FPS games. Grow your audience with our support and resources.",
      requirements: ["50K+ Followers", "Consistent Content", "Video Editing Skills", "Community Engagement"],
    },
    {
      title: "CS2 Team Coach",
      type: "Full-time",
      location: "Los Angeles, CA",
      department: "Esports",
      salary: "$70K - $90K",
      description: "Lead our CS2 team to victory. Develop strategies, analyze gameplay, and mentor players.",
      requirements: ["Coaching Experience", "High-Level CS2 Knowledge", "Leadership Skills", "Data Analysis"],
    },
    {
      title: "Social Media Manager",
      type: "Full-time",
      location: "Remote",
      department: "Marketing",
      salary: "$45K - $60K",
      description: "Manage our social presence across all platforms. Create viral content and engage our community.",
      requirements: ["Social Media Experience", "Gaming Industry Knowledge", "Creative Skills", "Analytics Experience"],
    },
  ];

  const benefits = [
    "Competitive salaries and prize pool sharing",
    "Full health, dental, and vision coverage",
    "Professional gaming equipment provided",
    "Mental health and wellness support",
    "Career development and training programs",
    "Flexible remote work options",
  ];

  return (
    <section id="jobs" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join <span className="text-glow">HIGHEND</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career in esports with one of the most prestigious gaming organizations
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose HIGHEND?</h3>
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Open Positions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="card-gaming group hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                    </div>
                  </div>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {position.department}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {position.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-sm">Requirements:</h5>
                  <div className="flex flex-wrap gap-2">
                    {position.requirements.map((req, i) => (
                      <span key={i} className="bg-secondary px-2 py-1 rounded text-xs">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-primary font-semibold">{position.salary}</div>
                  <JoinButton>
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </JoinButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Application Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gaming text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                1
              </div>
              <h4 className="font-bold mb-2">Submit Application</h4>
              <p className="text-muted-foreground text-sm">
                Send us your resume and portfolio showcasing your skills and experience.
              </p>
            </div>
            <div className="card-gaming text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                2
              </div>
              <h4 className="font-bold mb-2">Skills Assessment</h4>
              <p className="text-muted-foreground text-sm">
                Participate in our evaluation process to demonstrate your abilities.
              </p>
            </div>
            <div className="card-gaming text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                3
              </div>
              <h4 className="font-bold mb-2">Join the Team</h4>
              <p className="text-muted-foreground text-sm">
                Welcome to HIGHEND! Begin your journey to esports excellence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see a position that fits? We're always looking for exceptional talent.
          </p>
          <JoinButton className="btn-outline-gaming">Send General Application</JoinButton>
        </div>
      </div>
    </section>
  );
};

export default Jobs;