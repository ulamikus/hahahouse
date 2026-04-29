import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Star, MapPin, Clock, Mail } from "lucide-react";
import Layout from "@/components/site/Layout";
import Doodles from "@/components/site/Doodles";
import TicketReminder from "@/components/site/TicketReminder";
import exhibit1 from "@/assets/exhibit-1.jpg";
import exhibit2 from "@/assets/exhibit-2.jpg";
import exhibit3 from "@/assets/exhibit-3.jpg";
import exhibit4 from "@/assets/exhibit-4.jpg";

const exhibits = [
  { img: exhibit1, label: "Neon Hall" },
  { img: exhibit2, label: "Inflatable Room" },
  { img: exhibit3, label: "Mirror Maze" },
  { img: exhibit4, label: "The Tunnel" },
  { img: exhibit1, label: "More Stuff" },
];

const offers = [
  {
    emoji: "🎂",
    title: "Birthdays",
    desc: "Another year older. At least you'll actually laugh this time.",
  },
  {
    emoji: "🏆",
    title: "Team Building",
    desc: "Your team needs this. Your team will deny needing this. Book it anyway.",
  },
  {
    emoji: "🎉",
    title: "Pregame Party",
    desc: "Start here. Everything after is your problem.",
  },
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
  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-primary text-white overflow-hidden min-h-[92vh] flex items-center">
        <Doodles />
        <div className="container relative z-10 py-24 text-center">
          <p className="font-mono text-yellow tracking-widest text-sm mb-6">MUSEUM OF LAUGHTER · ZAGREB</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-balance leading-[0.9]">
            A museum.<br />
            <span className="text-yellow">But make it funny.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/85 max-w-2xl mx-auto text-balance">
            40+ exhibits. Scientifically unverified. Deeply necessary.
          </p>

          <div className="mt-12">
            <Link
              to="/tickets"
              className="group inline-flex items-center rounded-full bg-yellow text-navy font-bold px-10 py-5 text-lg transition-colors hover:bg-red hover:text-white"
            >
              <span className="group-hover:hidden">BUY TICKETS</span>
              <span className="hidden group-hover:inline">fine.</span>
            </Link>
            <p className="mt-4 text-sm text-white/70">starting from €9. cheaper than therapy.</p>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
          <span className="text-xs uppercase tracking-widest text-white/60 mr-2">we're there too</span>
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="opacity-80 hover:opacity-100 hover:text-yellow transition" aria-label="Social">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </section>

      {/* EXHIBITS */}
      <section className="py-24 bg-white">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">actual photos. no filter needed.</p>
          <h2 className="font-display text-5xl md:text-7xl text-navy">What's Inside</h2>

          <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-thin">
            {exhibits.map((e, i) => (
              <div key={i} className="snap-start shrink-0 w-[80vw] md:w-[480px]">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-cool-gray">
                  <img src={e.img} alt={e.label} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 font-display text-2xl text-navy">{e.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground italic">yes it looks like this in real life.</p>
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-24 bg-orange">
        <div className="container">
          <h2 className="font-display text-5xl md:text-7xl text-white text-center">Pick Your Poison</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {offers.map((o) => (
              <div key={o.title} className="bg-white rounded-3xl p-8 flex flex-col">
                <span className="text-5xl">{o.emoji}</span>
                <h3 className="mt-4 font-display text-3xl text-navy">{o.title}</h3>
                <p className="mt-3 text-navy/80 flex-1">{o.desc}</p>
                <Link to="/private-events" className="mt-6 font-bold text-primary hover:text-red transition-colors">
                  See More →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-white/90 italic">all of these live under Private Events. yes, that tab up there.</p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl md:text-7xl text-navy">What's On</h2>
          <p className="mt-3 text-muted-foreground italic">updated monthly. more reliable than your horoscope.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {events.map((e) => (
              <article key={e.title} className="border-2 border-navy/10 rounded-3xl p-8 hover:border-primary transition-colors">
                <span className="inline-block bg-turquoise text-navy font-bold px-3 py-1 rounded-md text-sm">{e.date}</span>
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
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-white">
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
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <h2 className="font-display text-5xl md:text-7xl text-balance max-w-3xl">Other People Came. They Left Happy.</h2>
          <p className="mt-3 text-white/70 italic">we have proof.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-3xl p-7 text-navy">
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
          <p className="mt-8 text-white/70 italic">reviews are real. we just can't stop reading them.</p>
        </div>
      </section>

      <TicketReminder />
    </Layout>
  );
};

export default Index;
