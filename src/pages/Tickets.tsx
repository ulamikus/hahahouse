import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/site/Layout";
import Sticker from "@/components/site/Sticker";
import TicketReminder from "@/components/site/TicketReminder";
import hahaWordmark from "@/assets/haha-wordmark.png";

const tiers = [
  {
    emoji: "👶",
    name: "Kids",
    sub: "(up to 12)",
    price: "€9",
    desc: "they laugh for free in spirit. we charge €9 in practice.",
    color: "bg-yellow",
  },
  {
    emoji: "♿",
    name: "Disabled",
    sub: "",
    price: "€9",
    desc: "everyone's welcome. always.",
    color: "bg-turquoise",
  },
  {
    emoji: "🎟️",
    name: "Regular",
    sub: "",
    price: "€12",
    desc: "the standard. the classic. the one.",
    color: "bg-orange",
    badge: "MOST PICKED",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    name: "Family",
    sub: "(2 adults + 2 kids)",
    price: "€35",
    desc: "cheaper than pretending to enjoy the park.",
    color: "bg-red text-white",
  },
];

const includes = [
  { emoji: "🚪", title: "Full access", desc: "all 40 exhibits. no roped-off bits." },
  { emoji: "⏱️", title: "Stay as long as you want", desc: "within opening hours. we're not monsters." },
  { emoji: "📸", title: "Photos encouraged", desc: "no flash on Mr. H though. he's shy." },
  { emoji: "🎟️", title: "Re-entry same day", desc: "snack break, then back into the ball pit." },
];

const faqs = [
  { q: "Do I need to book in advance?", a: "Recommended on weekends. On a random Tuesday at 10am? Just walk in." },
  { q: "Can I get a refund?", a: "Up to 24 hours before your slot. After that, send a friend instead. Both will laugh." },
  { q: "How long does a visit take?", a: "Most people stay 90 minutes. Some never leave. We have to ask them." },
  { q: "Is there an age limit?", a: "Nope. We've had toddlers and we've had 81-year-olds. Both behaved roughly the same." },
  { q: "Group discounts?", a: "10+ people, drop us a line. We do nice things for nice groups." },
  { q: "Can I gift a ticket?", a: "Yes. Gift tickets live in the Shop. You get the credit. They get the experience." },
];

const Tickets = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-white border-b border-navy/10">
      <div className="container py-24 grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-display text-primary text-3xl md:text-4xl mb-6">Get into</p>
          <img src={hahaWordmark} alt="HaHa House" className="w-64 md:w-80 h-auto mb-8" />
          <p className="text-navy text-lg md:text-xl leading-relaxed">
            Four ticket types. One museum. Pick whichever one applies, hand us some money, and we'll handle the laughing part. No hidden fees. No timed exits. No sad gift shop you have to walk through to leave. Well, there is a gift shop. But it's a good one.
          </p>
        </div>
        <div className="relative">
          <Sticker
            variant="starburst"
            color="yellow"
            rotate={-12}
            className="absolute -top-4 -right-2 w-28 h-28 text-xs z-10"
          >
            FROM<br />
            <span className="text-2xl">€9</span>
          </Sticker>
          <h1 className="font-display text-6xl md:text-8xl text-navy text-balance">
            Get In. It's Worth It.
          </h1>
        </div>
      </div>
    </section>

    {/* SUB-STRIP */}
    <div className="bg-white border-b border-navy/10">
      <p className="container py-4 text-center font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-navy font-bold">
        Open daily 09:00–21:00 · Walk-ins welcome · Booking recommended on weekends
      </p>
    </div>

    {/* TIERS */}
    <section className="py-24 bg-white border-b border-navy/10">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">less than a bad dinner out.</p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-7xl text-navy">Pick Your Ticket</h2>
          <Sticker variant="pill" color="turquoise" rotate={3} className="text-xs">
            NO HIDDEN FEES
          </Sticker>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`${t.color} relative rounded-3xl p-7 flex flex-col shadow-[0_10px_0_hsl(var(--navy))] hover-wiggle`}
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              {t.badge && (
                <Sticker
                  variant="starburst"
                  color="red"
                  rotate={8}
                  className="absolute -top-5 -right-3 w-20 h-20 text-[9px]"
                >
                  {t.badge}
                </Sticker>
              )}
              <span className="text-5xl">{t.emoji}</span>
              <h3 className="mt-4 font-display text-2xl text-navy">
                {t.name} <span className="text-base text-navy/60">{t.sub}</span>
              </h3>
              <p className="mt-2 font-display text-5xl text-navy">{t.price}</p>
              <p className="mt-3 text-navy/80 flex-1">{t.desc}</p>
              <button className="mt-6 group rounded-full bg-navy text-white font-bold px-6 py-3 hover:bg-primary transition-colors">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground italic">
          tickets also make great gifts. just saying.{" "}
          <Link to="/shop" className="text-primary underline underline-offset-4">
            go to shop
          </Link>
        </p>
      </div>
    </section>

    {/* WHAT'S INCLUDED */}
    <section className="py-24 bg-white border-b border-navy/10">
      <div className="container">
        <p className="italic text-primary text-sm mb-3">one ticket, all the chaos.</p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="font-display text-5xl md:text-7xl text-navy">What You Get</h2>
          <Sticker variant="arrow" color="yellow" rotate={-4} className="text-base">
            WORTH IT →
          </Sticker>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {includes.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border-2 border-navy p-6 bg-white shadow-[6px_6px_0_0_hsl(var(--navy))]"
            >
              <span className="text-4xl">{it.emoji}</span>
              <p className="mt-4 font-display text-2xl text-navy">{it.title}</p>
              <p className="mt-2 text-navy/80">{it.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground italic">
          no upsells. no "premium experience". one ticket, the whole house.
        </p>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 bg-cream border-b border-navy/10">
      <div className="container max-w-3xl">
        <p className="italic text-primary text-sm mb-3">we anticipated these.</p>
        <h2 className="font-display text-5xl md:text-7xl text-navy">Before You Ask</h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="border-b border-navy/10">
              <AccordionTrigger className="text-left font-display text-xl text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-navy/80 text-base pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* GIFT CTA */}
    <section className="py-24 bg-white">
      <div className="container text-center max-w-3xl">
        <p className="italic text-primary text-sm mb-3">no wrapping required.</p>
        <h2 className="font-display text-5xl md:text-6xl text-navy text-balance">
          Buying for Someone Else?
        </h2>
        <p className="mt-6 text-navy/80 text-lg">
          Gift tickets live in the Shop. You get the credit. They get the experience. Everybody wins. Mostly you.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-primary text-white font-bold px-8 py-4 hover:bg-navy transition-colors shadow-[0_8px_0_rgba(0,0,0,0.18)]"
        >
          Go to Shop →
        </Link>
      </div>
    </section>

    <TicketReminder
      headline="Still scrolling? The exhibits are right there."
      cta="Okay Fine, Buy Tickets."
    />
  </Layout>
);

export default Tickets;
