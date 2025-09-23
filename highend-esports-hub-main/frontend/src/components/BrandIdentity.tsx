import { Palette, Zap, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrandIdentity = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            New <span className="text-glow">Brand Identity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A bold evolution reflecting our commitment to excellence in esports
          </p>
        </div>

        {/* Logo Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* New Logo */}
          <div className="card-gaming text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">New HIGHEND Logo</h3>
            <div className="bg-gradient-to-br from-background to-secondary/30 rounded-xl p-8 mb-6">
              <img
                src="/src/assets/highend-logo-rebranded.png"
                alt="New HIGHEND Logo"
                className="h-32 w-auto mx-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Modern, bold typography with premium gaming aesthetics designed for the future of esports.
            </p>
          </div>

          {/* Alternative Design */}
          <div className="card-gaming text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary-glow">Alternative Design</h3>
            <div className="bg-gradient-to-br from-background to-secondary/30 rounded-xl p-8 mb-6">
              <img
                src="/src/assets/highend-logo-alt.png"
                alt="Alternative HIGHEND Logo"
                className="h-32 w-auto mx-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Geometric approach with angular elements representing competitive precision and elite performance.
            </p>
          </div>
        </div>

        {/* Brand Elements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Brand Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card-gaming text-center">
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Color Palette</h4>
              <div className="space-y-2">
                <div className="w-full h-4 bg-gradient-to-r from-primary to-primary-glow rounded" />
                <p className="text-sm text-muted-foreground">Primary Red Gradient</p>
              </div>
            </div>
            
            <div className="card-gaming text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Typography</h4>
              <p className="text-sm text-muted-foreground mb-2">Bold, Modern Sans-Serif</p>
              <p className="font-bold text-lg">HIGHEND</p>
            </div>
            
            <div className="card-gaming text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Precision</h4>
              <p className="text-sm text-muted-foreground">Clean lines and geometric shapes representing competitive accuracy</p>
            </div>
            
            <div className="card-gaming text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">Premium aesthetic befitting a championship organization</p>
            </div>
          </div>
        </div>

        {/* Brand Story */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">The Evolution of Excellence</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Our rebranded logo represents more than just a visual update—it's a statement of our evolution as an organization. 
            The bold, modern design captures the energy and precision of competitive gaming while maintaining the professional 
            standards that define HIGHEND. Every element has been carefully crafted to represent our commitment to pushing 
            the boundaries of what's possible in esports.
          </p>
          <Button className="btn-gaming">
            Download Brand Assets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;