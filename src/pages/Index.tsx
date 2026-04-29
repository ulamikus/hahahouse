import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Star, MapPin, Clock, Mail } from "lucide-react";
import Layout from "@/components/site/Layout";
import Doodles from "@/components/site/Doodles";
import Sticker from "@/components/site/Sticker";
import TicketReminder from "@/components/site/TicketReminder";
import RotatingHeadline from "@/components/site/RotatingHeadline";
import collage from "@/assets/brand-collage.jpg";
import roundLogo from "@/assets/haha-hero-logo.png";
import hahaInterior from "@/assets/haha-interior.png";
import exhibitSumo from "@/assets/exhibit-sumo.jpg";
import exhibitLaundryWall from "@/assets/exhibit-laundry-wall.jpg";
import exhibitWashers from "@/assets/exhibit-washers.jpg";
import exhibitBallpit from "@/assets/exhibit-ballpit.jpg";
import exhibitWheel from "@/assets/exhibit-wheel.jpg";

const exhibits = [
  { img: exhibitSumo, label: "Sumo Smackdown", color: "bg-yellow" },
  { img: exhibitLaundryWall, label: "Laundry Rules", color: "bg-orange" },
  { img: exhibitWashers, label: "Spin Cycle", color: "bg-red" },
  { img: exhibitBallpit, label: "Ball Pit Abyss", color: "bg-turquoise" },
  { img: exhibitWheel, label: "Wheel of Life", color: "bg-green" },
];

const offers = [
  { emoji: "🎂", title: "Birthdays", desc: "Another year older. At least you'll actually laugh this time.", color: "bg-yellow" },
  { emoji: "🏆", title: "Team Building", desc: "Your team needs this. Your team will deny needing this. Book it anyway.", color: "bg-turquoise" },
  { emoji: "🎉", title: "Pregame Party", desc: "Start here. Everything after is your problem.", color: "bg-red text-white" },
];

const events = [
  { date: "MAY 12", title: "Stand-Up Night #4", desc: "Five comedians. One stage. Zero refunds." },
  { date: "MAY 19", title: "Improv Open Mic", desc: "Anything could happen. Mostly does." },
  { date: "JUN 02", title: "Family Funday", desc: "Kids in. Parents pretend they hate it." },
];

const reviews = [
  { name: "Marko T.", quote: "I came for a joke. Stayed for the existential crisis. 10/10." },
  { name: "Lana P.", quote: "Genuinely funny. I don't say that often. Or ever, really." },
  { name: "Ivo K.", quote: "Took my mother-in-law. We bonded. Terrifying." },
];

const Index = () => {
  const [loopCount, setLoopCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <Layout>
      {/* HERO — full-bleed walkthrough video, Color Factory style */}
      <section className="relative w-full h-[88vh] min-h-[560px] overflow-hidden bg-navy">
        {/* Video layer */}
        <video
          ref={videoRef}
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          onTimeUpdate={(e) => {
            // Detect loop restart (time jumps back near 0)
            const v = e.currentTarget;
            if (v.currentTime < 0.3 && (v as any)._lastT > 1) {
              setLoopCount((c) => c + 1);
            }
            (v as any)._lastT = v.currentTime;
          }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-walkthrough.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50 pointer-events-none"
        />

        {/* Round logo, top-left */}
        <Link
          to="/"
          aria-label="HaHa House home"
          className="absolute top-5 left-5 md:top-7 md:left-7 z-20"
        >
          <img
            src={roundLogo}
            alt="HaHa House"
            className="h-[72px] w-[72px] md:h-[110px] md:w-[110px] rounded-full object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]"
          />
        </Link>

        {/* Rotating headline */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none">
          <RotatingHeadline
            messages={[
              "LIKE A MUSEUM. BUT FUNNY.",
              "40+ EXHIBITS DESIGNED TO MAKE YOU LAUGH.",
            ]}
            hold={5000}
            fade={600}
            initialDelay={800}
            resetKey={loopCount}
            className="text-4xl md:text-6xl lg:text-7xl max-w-5xl"
          />
        </div>

        {/* Tickets corner */}
        <Link
          to="/tickets"
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 inline-flex items-center rounded-full bg-yellow text-navy font-bold px-6 py-3 md:px-8 md:py-4 shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:bg-red hover:text-white transition-colors"
        >
          BUY TICKETS
        </Link>
      </section>

      {/* Sub-hero strip */}
      <div className="bg-white border-b border-navy/10">
        <p className="container py-4 text-center font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-navy font-bold">
          Voted #1 best place to laugh in Zagreb · 2026
        </p>
      </div>

      {/* EXHIBITS */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">actual photos. no filter needed.</p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl text-navy">What's Inside</h2>
            <Sticker variant="arrow" color="turquoise" rotate={-4} className="text-base">
              SCROLL →
            </Sticker>
          </div>

          <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6">
            {exhibits.map((e, i) => (
              <div key={i} className="snap-start shrink-0 w-[80vw] md:w-[480px]">
                <div className={`rounded-3xl overflow-hidden aspect-[4/3] ${e.color}`}>
                  <img src={e.img} alt={e.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 font-display text-2xl text-navy">{e.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground italic">yes it looks like this in real life.</p>
        </div>
      </section>

      {/* COLLAGE STRIP — actual brand collage */}
      <section className="relative py-0 overflow-hidden">
        <img src={collage} alt="HaHa House moments" className="w-full h-auto block" />
      </section>

      {/* OFFERS */}
      <section className="relative py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl md:text-7xl text-navy text-center">Pick Your Poison</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className={`${o.color} rounded-[2rem] p-8 flex flex-col`}
              >
                <span className="text-6xl">{o.emoji}</span>
                <h3 className="mt-4 font-display text-3xl text-navy">{o.title}</h3>
                <p className="mt-3 text-navy/80 flex-1">{o.desc}</p>
                <Link to="/private-events" className="mt-6 font-bold text-navy hover:text-primary transition-colors">
                  See More →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-navy/60 italic">all of these live under Private Events.</p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="relative py-24 bg-white overflow-hidden">
        <Doodles variant="scatter" />
        <div className="container relative">
          <h2 className="font-display text-5xl md:text-7xl text-navy">What's On</h2>
          <p className="mt-3 text-muted-foreground italic">updated monthly. more reliable than your horoscope.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {events.map((e) => (
              <article key={e.title} className="bg-white border-4 border-navy rounded-3xl p-8 hover:bg-yellow transition-colors shadow-[0_8px_0_hsl(var(--navy))]">
                <span className="inline-block bg-red text-white font-bold px-3 py-1 rounded-md text-sm">{e.date}</span>
                <h3 className="mt-5 font-display text-2xl text-primary">{e.title}</h3>
                <p className="mt-2 text-navy/80">{e.desc}</p>
                <button className="mt-6 rounded-full border-2 border-primary text-primary font-bold px-5 py-2 hover:bg-primary hover:text-white transition">
                  Reserve
                </button>
              </article>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground italic">can't make it? we'll survive. probably.</p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-cool-gray">
        <div className="container">
          <h2 className="font-display text-5xl md:text-7xl text-navy">We Exist in Real Life</h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-white border-4 border-navy">
              <iframe
                title="HaHaHouse map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=15.974%2C45.810%2C15.984%2C45.815&layer=mapnik&marker=45.8125%2C15.979"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl text-navy">Hours</p>
                  <p className="text-navy/80">09:00–21:00 — yes, every day</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl text-navy">Address</p>
                  <p className="text-navy/80">Gajeva 7/1, Zagreb</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-display text-2xl text-navy">Email</p>
                  <a className="text-navy/80 hover:text-primary" href="mailto:info@haha.house">info@haha.house</a>
                </div>
              </div>
              <p className="italic text-navy/60">easier to find than you think.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative py-24 bg-grad-jungle text-navy overflow-hidden">
        <Doodles variant="wallpaper" tone="dark" />
        <div className="container relative">
          <h2 className="font-display text-5xl md:text-7xl text-balance max-w-3xl text-navy">Other People Came. They Left Happy.</h2>
          <p className="mt-3 text-navy/70 italic">we have proof.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="bg-white rounded-3xl p-7 text-navy shadow-[0_8px_0_hsl(var(--navy))]"
                style={{ transform: `rotate(${i === 1 ? 1.5 : -1.5}deg)` }}
              >
                <div className="flex gap-1 text-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow" />
                  ))}
                </div>
                <p className="mt-4 font-display text-xl leading-snug">"{r.quote}"</p>
                <p className="mt-4 font-bold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TicketReminder />
    </Layout>
  );
};

export default Index;
