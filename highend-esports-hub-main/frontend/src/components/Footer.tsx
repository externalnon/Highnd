import { Twitter, Youtube, Twitch, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitch, href: "#", label: "Twitch" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    "Organization": ["About Us", "Teams", "News", "Careers"],
    "Esports": ["Valorant", "League of Legends", "CS2", "Tournaments"],
    "Content": ["Streams", "Videos", "Highlights", "Podcasts"],
    "Support": ["Contact", "Partnerships", "Press Kit", "Legal"],
  };

  return (
    <footer className="bg-gradient-to-t from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img
                  src="/src/assets/highend-logo-rebranded.png"
                  alt="HIGHEND Gaming Logo"
                  className="h-14 w-auto transition-all duration-300"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              Elite gaming organization dedicated to developing world-class esports athletes and content creators.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl p-6 mb-8">
          <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">info@highend.gg</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+91 8888928937</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 HIGHEND Gaming Organization. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;