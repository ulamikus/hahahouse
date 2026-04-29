import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src={logo} alt="HaHaHouse" className="h-14 w-auto bg-white rounded-xl p-2 inline-block" />
          <p className="mt-6 font-display text-2xl leading-tight text-balance">
            Laughter is our currency.<br />
            <span className="opacity-70">(We also accept €.)</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-display text-xl mb-4">Visit</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/tickets" className="hover:text-yellow">Tickets</Link></li>
              <li><Link to="/shop" className="hover:text-yellow">Shop</Link></li>
              <li><Link to="/private-events" className="hover:text-yellow">Private Events</Link></li>
              <li><Link to="/about" className="hover:text-yellow">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-yellow">Terms</a></li>
              <li><a href="#" className="hover:text-yellow">Privacy</a></li>
              <li><a href="#" className="hover:text-yellow">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4">Find us elsewhere</h4>
          <p className="text-white/70 text-sm mb-4">tag us or it didn't happen</p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-yellow hover:text-navy grid place-items-center transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-white/60 text-sm">Gajeva 7/1, Zagreb</p>
          <p className="text-white/60 text-sm">info@haha.house</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-white/60 text-sm">
          © 2026 HaHaHouse. Not responsible for sore cheeks.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
