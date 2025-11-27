import { NavLink } from "@/components/NavLink";
import { Flower2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Haarwala</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Environment & Devotional Care
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Transforming devotional waste into environmental blessings since 2018.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/process" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Process
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/book-appointment" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Book Appointment
                </NavLink>
              </li>
              <li>
                <NavLink to="/donate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Donate
                </NavLink>
              </li>
              <li>
                <a href="#volunteer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#partner" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@haarwala.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Haarwala Environment & Devotional Care Foundation. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
