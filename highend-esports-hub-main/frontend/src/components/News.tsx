import React from "react";
import { Calendar, ArrowRight, Trophy, Users2, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      title: "HIGHEND Valorant Wins Regional Championship",
      excerpt: "Our Valorant team dominated the regional finals with a clean 3-0 victory, securing their spot in the international tournament.",
      date: "March 15, 2024",
      category: "Tournament Win",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      icon: Trophy,
    },
    {
      title: "New Content Creator Partnership Announced",
      excerpt: "Welcome StreamMaster to the HIGHEND family! Our newest content creator brings expertise in FPS games.",
      date: "March 12, 2024",
      category: "Team Update",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      icon: Users2,
    },
    {
      title: "HIGHEND Opens Applications for CS2 Team",
      excerpt: "Looking for top-tier CS2 players to join our competitive roster. Applications now open for skilled professionals.",
      date: "March 10, 2024",
      category: "Recruitment",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      icon: Gamepad2,
    },
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-glow">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest achievements, team updates, and announcements
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-primary px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  Featured
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{newsItems[0].title}</h3>
                <p className="text-white/90 text-sm">{newsItems[0].excerpt}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {React.createElement(newsItems[0].icon, { className: "h-8 w-8 text-primary" })}
                <span className="text-primary font-semibold text-lg">{newsItems[0].category}</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight">{newsItems[0].title}</h3>
              <p className="text-muted-foreground text-lg">{newsItems[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {newsItems[0].date}
                </div>
                <Button className="btn-gaming">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent News Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Recent Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <div key={index} className="card-gaming group hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-3">
                  {React.createElement(item.icon, { className: "h-6 w-6 text-primary flex-shrink-0 mt-1" })}
                  <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-outline-gaming">
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;