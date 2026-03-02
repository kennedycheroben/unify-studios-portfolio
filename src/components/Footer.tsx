import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Unify Studios" className="h-10 w-10 rounded-md" />
              <span className="font-display text-xl font-bold text-foreground">
                Unify<span className="text-primary"> Studios</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Turning ideas into interactive designs that inspire and connect.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Portfolio", "Services", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:kennedycheroben001@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <i className="fa-solid fa-envelope text-xs" /> kennedycheroben001@gmail.com
              </a>
              <a href="https://wa.me/254792399815" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <i className="fa-brands fa-whatsapp text-xs" /> +254 792 399 815
              </a>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-xs" /> Kenya
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Unify Studios — Kennedy Cheroben. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
