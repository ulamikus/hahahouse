import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Doodles from "@/components/site/Doodles";

const tiers = [
  { emoji: "👶", name: "Kids", sub: "(up to 12)", price: "€9", desc: "they laugh for free in spirit. we charge €9 in practice." },
  { emoji: "♿", name: "Disabled", sub: "", price: "€9", desc: "everyone's welcome. always." },
  { emoji: "🎟️", name: "Regular", sub: "", price: "€12", desc: "the standard. the classic. the one." },
  { emoji: "👨‍👩‍👧‍👦", name: "Family", sub: "(2 adults + 2 kids)", price: "€35", desc: "cheaper than pretending to enjoy the park." },
];

const Tickets = () => (
  <Layout>
    <section className="relative bg-primary text-white overflow-hidden">
      <Doodles />
      <div className="container relative py-28 text-center">
        <h1 className="font-display text-6xl md:text-8xl text-balance">Get In. It's Worth It.</h1>
        <p className="mt-6 text-xl text-white/85">Pick your ticket. We'll handle the laughing part.</p>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-navy">What It Costs</h2>
        <p className="mt-3 text-muted-foreground italic">less than a bad dinner out.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-3xl bg-white border-2 border-navy/10 p-7 flex flex-col border-t-8 border-t-primary">
              <span className="text-4xl">{t.emoji}</span>
              <h3 className="mt-4 font-display text-2xl text-navy">{t.name} <span className="text-base text-navy/60">{t.sub}</span></h3>
              <p className="mt-2 font-display text-5xl text-primary">{t.price}</p>
              <p className="mt-3 text-navy/70 flex-1">{t.desc}</p>
              <button className="mt-6 group rounded-full bg-yellow text-navy font-bold px-6 py-3 hover:bg-red hover:text-white transition-colors">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground italic">
          tickets also make great gifts. just saying.{" "}
          <Link to="/shop" className="text-primary underline underline-offset-4">go to shop</Link>
        </p>
      </div>
    </section>

    <section className="py-24 bg-turquoise">
      <div className="container text-center">
        <h2 className="font-display text-5xl md:text-6xl text-navy text-balance max-w-3xl mx-auto">Buying for Someone Else?</h2>
        <p className="mt-4 text-navy/80 text-lg">Gift tickets live in the Shop. You get the credit. They get the experience.</p>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-primary text-white font-bold px-8 py-4 hover:bg-navy transition-colors"
        >
          Go to Shop →
        </Link>
      </div>
    </section>
  </Layout>
);

export default Tickets;
