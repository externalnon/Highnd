import { Trophy, Star, Twitch, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Teams = () => {
  const teams = [
    {
      game: "Valorant",
      name: "HIGHEND Valorant",
      rank: "#3 World Ranking",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      achievements: ["VCT Champions", "Masters Winner", "Regional Champions"],
      players: 5,
    },
    {
      game: "League of Legends",
      name: "HIGHEND LoL",
      rank: "#5 Regional",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      achievements: ["LCS Playoffs", "Worlds Qualifier", "Split Champions"],
      players: 5,
    },
    {
      game: "CS2",
      name: "HIGHEND CS2",
      rank: "#8 Global",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      achievements: ["Major Champions", "ESL Pro League", "BLAST Winner"],
      players: 5,
    },
  ];

  const creators = [
    {
      name: "StreamKing",
      game: "Variety",
      followers: "0",
      platform: "Twitch",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "GameMaster",
      game: "FPS",
      followers: "0",
      platform: "YouTube",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "ProGamer",
      game: "MOBA",
      followers: "0",
      platform: "Twitch",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section id="teams" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-glow">Elite Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class athletes and content creators competing at the highest level
          </p>
        </div>

        {/* Esports Teams */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Competitive Teams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="card-gaming group hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {team.game}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-2">{team.name}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-primary font-semibold">{team.rank}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Recent Achievements:</p>
                  <div className="flex flex-wrap gap-2">
                    {team.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs bg-secondary px-2 py-1 rounded">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="btn-outline-gaming w-full">
                  View Team Profile
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Creators */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Content Creators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creators.map((creator, index) => (
              <div key={index} className="card-gaming text-center">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary"
                />
                <h4 className="text-xl font-bold mb-2">{creator.name}</h4>
                <p className="text-muted-foreground mb-2">{creator.game} Specialist</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {creator.platform === "Twitch" ? (
                    <Twitch className="h-5 w-5 text-purple-500" />
                  ) : (
                    <Youtube className="h-5 w-5 text-red-500" />
                  )}
                  <span className="text-primary font-semibold">{creator.followers}</span>
                </div>
                <div className="flex justify-center gap-3">
                  <Button size="sm" variant="outline" className="p-2">
                    <Twitch className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Youtube className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;