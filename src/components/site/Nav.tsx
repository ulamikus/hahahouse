import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand-logo-light.png";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/private-events", label: "Private Events" },
  { to: "/about", label: "About Us" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-[0_1px_0_0_hsl(var(--border))]">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" aria-label="HaHaHouse home" className="flex items-center">
          <img src={logo} alt="HaHaHouse, Museum of Laughter" className="h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-medium text-primary hover:text-red transition-colors ${isActive ? "underline underline-offset-8 decoration-2" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/tickets"
            className="group inline-flex items-center rounded-full bg-yellow px-6 py-3 font-bold text-navy transition-colors hover:bg-red hover:text-white"
          >
            Tickets
          </Link>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-medium text-primary py-2"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/tickets"
              onClick={() => setOpen(false)}
              className="rounded-full bg-yellow px-6 py-3 font-bold text-navy text-center"
            >
              Tickets
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
