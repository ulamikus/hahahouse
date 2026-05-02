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
import hahaWordmark from "@/assets/haha-wordmark.png";
import exhibitSumo from "@/assets/exhibit-sumo.jpg";
import exhibitLaundryWall from "@/assets/exhibit-laundry-wall.jpg";
import exhibitWashers from "@/assets/exhibit-washers.jpg";
import exhibitBallpit from "@/assets/exhibit-ballpit.jpg";
import exhibitWheel from "@/assets/exhibit-wheel.jpg";

const exhibits = [
  { img: exhibitSumo, label: "The Arena", desc: "Suit up, square off, and find out who in your group has been waiting their whole life to do this.", color: "bg-yellow" },
  { img: exhibitLaundryWall, label: "The Wall of Rules", desc: "Read them. Break them. We don't actually enforce any of them. That's the point.", color: "bg-orange" },
  { img: exhibitWashers, label: "The Spin Room", desc: "A wall of washing machines doing a job none of them were built for. You'll get it when you see it.", color: "bg-red" },
  { img: exhibitBallpit, label: "The Pit", desc: "It's a ball pit. For adults. We don't have to explain it. You already want to jump in.", color: "bg-turquoise" },
  { img: exhibitWheel, label: "The Big Wheel", desc: "Spin it. Do whatever it says. Refuse and your group decides your punishment.", color: "bg-green" },
];

const offers = [
  "Birthdays",
  "Team Building",
  "Pregame Parties",
  "Bachelor / Bachelorette",
  "Music Videos & Shoots",
  "Brand Activations",
  "Retirements. Divorces. Whatever.",
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
      {/* HERO, full-bleed walkthrough video, Color Factory style */}
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
          className="absolute bottom-16 left-1/2 -translate-x-1/2 md:bottom-20 z-20 inline-flex items-center rounded-full bg-yellow text-navy font-bold px-6 py-3 md:px-8 md:py-4 shadow-[0_8px_0_rgba(0,0,0,0.25)] hover:bg-red hover:text-white transition-colors"
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

      {/* WHAT IS, intro section */}
      <section className="py-24 bg-white">
        <div className="container grid gap-12 md:gap-16 md:grid-cols-2 md:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="font-display text-primary text-3xl md:text-4xl mb-6">What is</p>
            <img
              src={hahaWordmark}
              alt="HaHa House"
              className="w-64 md:w-80 h-auto mb-8"
            />
            <p className="text-navy text-lg md:text-xl leading-relaxed">
              A world's first museum of laughter where you actually have to participate. Not just look at things. Actually engage with them. Every room is designed to make you laugh. That's it. That's the whole concept. 40 exhibits built so you have no choice but to interact with them. Works for kids. Works for adults who remember how to have fun. Come laugh at something other than your life for a few hours.
            </p>
          </div>
          <div className="h-full min-h-[320px]">
            <img
              src={hahaInterior}
              alt="Inside HaHa House"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* EXHIBITS */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">part museum, part playground, fully unhinged.</p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl text-navy">What's Inside</h2>
            <Sticker variant="arrow" color="turquoise" rotate={-4} className="text-base">
              SCROLL →
            </Sticker>
          </div>
          <p className="mt-6 max-w-2xl text-navy/80 text-lg">
            The house is split into zones. Each one is a hands-on experience built around one stupidly fun idea. You don't observe. You participate. Here's a taste.
          </p>

          <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6">
            {exhibits.map((e, i) => (
              <div key={i} className="snap-start shrink-0 w-[80vw] md:w-[420px]">
                <div className={`rounded-3xl overflow-hidden aspect-[4/3] ${e.color}`}>
                  <img src={e.img} alt={e.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 font-display text-2xl text-navy">{e.label}</p>
                <p className="mt-2 text-navy/80">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground italic">and that's just five of them. there are forty.</p>
        </div>
      </section>

      {/* OFFERS */}
      <section className="relative py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="italic text-primary text-sm mb-3">the part where we make the case.</p>
            <h2 className="font-display text-5xl md:text-7xl text-navy">Pick Your Poison</h2>
            <p className="mt-4 text-navy/70 text-lg italic">
              we also host basically anything. brand collabs, music videos, your aunt's third wedding. if it has people in it, we're probably down.
            </p>
            <p className="mt-6 text-navy/80 text-lg md:text-xl leading-relaxed">
              Restaurants are boring. Bars are loud. Bowling is bowling. We're the third option you didn't know existed, a whole house of stuff designed to make a group of people laugh together. Birthdays land harder. Teams actually bond. Bachelorettes don't end in regret. Even your weird uncle's retirement party becomes a story people retell. Whatever the occasion, it's better here.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((title) => (
              <Link
                key={title}
                to="/private-events"
                className="rounded-[2rem] border-2 border-primary px-7 py-6 flex items-center justify-between gap-4 hover:bg-primary hover:text-white transition-colors group"
              >
                <h3 className="font-display text-2xl text-navy leading-tight group-hover:text-white">{title}</h3>
                <span className="font-display text-2xl text-primary group-hover:text-white shrink-0">→</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/private-events"
              className="inline-flex rounded-full bg-yellow text-navy font-bold px-8 py-4 hover:bg-red hover:text-white transition-colors shadow-[0_8px_0_rgba(0,0,0,0.18)]"
            >
              Plan Your Event →
            </Link>
            <p className="mt-4 text-navy/60 italic text-sm">we reply within 48 hours. usually less.</p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="relative py-24 bg-white">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">updated monthly. more reliable than your horoscope.</p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl text-navy">What's On</h2>
            <Sticker variant="pill" color="red" rotate={3} className="text-sm">
              BOOK AHEAD
            </Sticker>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {events.map((e) => (
              <article key={e.title} className="flex flex-col border-t-4 border-navy pt-6">
                <span className="inline-block self-start bg-navy text-white font-bold px-3 py-1 rounded-md text-sm font-mono tracking-wider">
                  {e.date}
                </span>
                <h3 className="mt-5 font-display text-3xl text-navy">{e.title}</h3>
                <p className="mt-3 text-navy/80 flex-1">{e.desc}</p>
                <button className="mt-6 self-start font-bold text-primary hover:text-navy transition-colors">
                  Reserve →
                </button>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-navy/60 italic">can't make it? we'll survive. probably.</p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-white">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">yes, we have an actual address.</p>
          <h2 className="font-display text-5xl md:text-7xl text-navy">We Exist in Real Life</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-5 md:items-stretch">
            <div className="md:col-span-3 rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px]">
              <iframe
                title="HaHaHouse map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=15.974%2C45.810%2C15.984%2C45.815&layer=mapnik&marker=45.8125%2C15.979"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2 grid gap-8 content-center">
              <div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <p className="font-display text-2xl text-navy">Hours</p>
                </div>
                <p className="mt-2 text-navy/80">09:00–21:00, yes, every day</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <p className="font-display text-2xl text-navy">Address</p>
                </div>
                <p className="mt-2 text-navy/80">Gajeva 7/1, Zagreb</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <p className="font-display text-2xl text-navy">Email</p>
                </div>
                <a className="mt-2 block text-navy/80 hover:text-primary" href="mailto:info@haha.house">
                  info@haha.house
                </a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-navy/60 italic">easier to find than you think.</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative py-24 bg-white">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">don't take our word for it.</p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl text-navy text-balance max-w-3xl">
              Other People Came. They Left Happy.
            </h2>
            <Sticker variant="starburst" color="red" rotate={-8} className="w-28 h-28 text-sm">
              5 STARS
            </Sticker>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="flex flex-col">
                <div className="flex gap-1 text-red">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-red" />
                  ))}
                </div>
                <p className="mt-4 font-display text-2xl text-navy leading-snug flex-1">
                  "{r.quote}"
                </p>
                <p className="mt-6 font-bold text-navy">, {r.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-navy/60 italic">we didn't pay them. probably.</p>
        </div>
      </section>

      <TicketReminder />
    </Layout>
  );
};

export default Index;
