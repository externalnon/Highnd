import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinButton from "@/components/ui/join-button";

const LogoShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-glow">HIGHEND</span> Brand
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A symbol of excellence in competitive gaming
          </p>
        </div>

        {/* Enhanced Logo Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 via-background to-primary-glow/20 rounded-3xl p-16 backdrop-blur-sm border border-primary/30">
            {/* Main Logo */}
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <img
                  src="/src/assets/highend-logo-rebranded.png"
                  alt="HIGHEND Gaming Logo"
                  className="h-40 w-auto mx-auto transition-all duration-500 hover:scale-110"
                />
                
                {/* Glow Effects */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
                <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>

            {/* Brand Message */}
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Where <span className="text-primary">Elite</span> Meets <span className="text-primary-glow">Excellence</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The HIGHEND logo represents our commitment to pushing the boundaries of competitive gaming. 
                Every line, every curve, crafted to embody the precision and dedication of our athletes.
              </p>
              
              {/* Brand Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">H</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Heritage</h4>
                  <p className="text-muted-foreground text-sm">Built on years of competitive excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">E</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Excellence</h4>
                  <p className="text-muted-foreground text-sm">Striving for perfection in every match</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">H</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Honor</h4>
                  <p className="text-muted-foreground text-sm">Competing with integrity and respect</p>
                </div>
              </div>

              <JoinButton className="mt-8">
                Join Our Legacy
                <ArrowRight className="ml-2 h-5 w-5" />
              </JoinButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;