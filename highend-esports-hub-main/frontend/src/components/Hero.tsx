import { ArrowRight, Gamepad2, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinButton from "@/components/ui/join-button";
import heroImage from "@/assets/hero-gaming-setup.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional gaming setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-glow bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              HIGHEND
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Elite Gaming Organization • Esports Athletes • Content Creators
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Join the ranks of professional esports athletes and content creators. 
            HIGHEND is where talent meets opportunity in the competitive gaming world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <JoinButton className="text-lg px-8 py-4">
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </JoinButton>
            <Button className="btn-outline-gaming text-lg px-8 py-4">
              View Our Athletes
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gaming text-center">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-glow mb-2">0</h3>
              <p className="text-muted-foreground">Championship Titles</p>
            </div>
            <div className="card-gaming text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-glow mb-2">0</h3>
              <p className="text-muted-foreground">Professional Athletes</p>
            </div>
            <div className="card-gaming text-center">
              <Gamepad2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-glow mb-2">0</h3>
              <p className="text-muted-foreground">Game Titles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;