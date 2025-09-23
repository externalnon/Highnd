import { Target, Award, Zap, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We pursue top-tier performance across competition, content, and community engagement.",
    },
    {
      icon: Award,
      title: "Achievement",
      description:
        "Proven results with championship runs and consistent podium finishes.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Always iterating with data-driven coaching and modern training workflows.",
    },
    {
      icon: Globe,
      title: "Community",
      description:
        "Growing an inclusive global network of players, creators, and fans.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-glow">HIGHEND</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where elite gaming talent meets professional opportunity
          </p>
        </div>

        {/* Intro + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Building the Future of <span className="text-primary">Esports</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HIGHEND is a performance-driven esports organization focused on athlete development,
              sustainable growth, and world-class entertainment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From data-backed coaching to creator support, we invest in people and systems that
              turn promising players into champions and audiences into communities.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-glow mb-1">2025</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow mb-1">$0</div>
                <div className="text-muted-foreground">Prize Winnings</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/15 to-primary-glow/20 rounded-2xl p-8 border border-primary/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Mission</h4>
                  <p className="text-muted-foreground">Elevate gaming talent to global recognition through elite training and support.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Vision</h4>
                  <p className="text-muted-foreground">Build the most trusted, innovative, and community-centered esports ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-gaming text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">Meet Our Founders</h3>
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: "Yash", role: "Co-Founder & CEO" },
                { name: "Daksh", role: "Co-Founder & CTO" },
                { name: "Rajiv", role: "Co-Founder & COO" },
                { name: "Vaibhav", role: "Co-Founder & Head of Esports" },
                { name: "Pratik", role: "Co-Founder & Creative Director" },
              ].map((founder, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {founder.name[0]}
                  </div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {founder.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-glow mb-1">0</div>
              <div className="text-muted-foreground">Athletes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-glow mb-1">0</div>
              <div className="text-muted-foreground">Championships</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-glow mb-1">0</div>
              <div className="text-muted-foreground">Game Titles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-glow mb-1">0</div>
              <div className="text-muted-foreground">Followers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


