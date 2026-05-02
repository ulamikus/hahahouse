import { useState } from "react";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import Layout from "@/components/site/Layout";
import Sticker from "@/components/site/Sticker";
import hahaWordmark from "@/assets/haha-wordmark.png";

type Item = { id: string; name: string; price: number; qty: number };

const giftTickets = [
  { id: "g1", emoji: "🎟️", name: "Single Gift Ticket", price: 12, desc: "one person. one good time." },
  { id: "g2", emoji: "🎟️🎟️", name: "Duo Gift Ticket", price: 24, desc: "two people. double the chaos." },
  { id: "g3", emoji: "🎁", name: "Gift Card", price: 25, desc: "let them choose. you get the credit." },
];

const merch = [
  { id: "m1", emoji: "🧦", name: "HaHa Socks", price: 14 },
  { id: "m2", emoji: "✨", name: "Sticker Pack", price: 6 },
  { id: "m3", emoji: "👜", name: "Tote Bag", price: 18 },
  { id: "m4", emoji: "📦", name: "Mystery Box", price: 35 },
];

const Shop = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);

  const add = (id: string, name: string, price: number) => {
    setCart((c) => {
      const f = c.find((i) => i.id === id);
      if (f) return c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { id, name, price, qty: 1 }];
    });
    setOpen(true);
  };

  const inc = (id: string) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id: string) =>
    setCart((c) =>
      c.flatMap((i) => (i.id === id ? (i.qty - 1 <= 0 ? [] : [{ ...i, qty: i.qty - 1 }]) : [i]))
    );

  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);

  return (
    <Layout>
      {/* HERO, matches homepage intro pattern */}
      <section className="relative bg-white border-b border-navy/10">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open cart"
          className="absolute top-6 right-6 rounded-full bg-navy text-white px-5 py-3 font-bold flex items-center gap-2 z-20 hover:bg-primary transition-colors"
        >
          <ShoppingBag className="w-5 h-5" /> {cart.reduce((a, i) => a + i.qty, 0)}
        </button>
        <div className="container py-24 grid gap-12 md:gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-primary text-3xl md:text-4xl mb-6">Take home a piece of</p>
            <img
              src={hahaWordmark}
              alt="HaHa House"
              className="w-64 md:w-80 h-auto mb-8"
            />
            <p className="text-navy text-lg md:text-xl leading-relaxed">
              Gift tickets and merch. Both make excellent presents. One more than the other. Either way, someone gets to laugh and you get to feel generous. Win-win. Mostly win.
            </p>
          </div>
          <div className="relative">
            <Sticker variant="starburst" color="red" rotate={-8} className="absolute -top-4 -right-2 w-28 h-28 text-xs z-10">
              GIFT<br/>WRAP<br/>FREE
            </Sticker>
            <h1 className="font-display text-6xl md:text-8xl text-navy text-balance">
              Take the Funny Home.
            </h1>
          </div>
        </div>
      </section>

      {/* SUB-STRIP */}
      <div className="bg-white border-b border-navy/10">
        <p className="container py-4 text-center font-mono uppercase tracking-[0.25em] text-xs md:text-sm text-navy font-bold">
          Free shipping over €40 · Digital tickets delivered instantly
        </p>
      </div>

      {/* GIFT TICKETS */}
      <section className="py-12 bg-white border-b border-navy/10">
        <div className="container">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <div>
              <p className="italic text-primary text-sm mb-1">the gift that doesn't end up in a drawer.</p>
              <h2 className="font-display text-3xl md:text-4xl text-navy">Gift Tickets</h2>
            </div>
            <Sticker variant="pill" color="turquoise" rotate={3} className="text-xs">
              INSTANT DELIVERY
            </Sticker>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {giftTickets.map((g) => (
              <button
                key={g.id}
                onClick={() => add(g.id, g.name, g.price)}
                className="flex items-center justify-between gap-4 rounded-2xl border-2 border-primary px-5 py-4 text-left hover:bg-primary hover:text-white transition-colors group"
              >
                <div className="min-w-0">
                  <p className="font-display text-lg text-navy group-hover:text-white truncate">{g.name}</p>
                  <p className="text-xs text-navy/60 group-hover:text-white/80 italic truncate">{g.desc}</p>
                </div>
                <span className="font-display text-2xl text-primary group-hover:text-white shrink-0">€{g.price}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MERCH, horizontal scroll like exhibits */}
      <section className="relative py-24 bg-white overflow-hidden border-t border-navy/10">
        <div className="container">
          <p className="italic text-primary text-sm mb-3">limited drops. unlimited personality.</p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl text-navy">Wear the Bit</h2>
            <Sticker variant="arrow" color="yellow" rotate={-4} className="text-base">
              SCROLL →
            </Sticker>
          </div>

          <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6">
            {merch.map((m, i) => {
              const tints = ["bg-yellow", "bg-turquoise", "bg-orange", "bg-red"];
              return (
                <div key={m.id} className="snap-start shrink-0 w-[80vw] md:w-[380px]">
                  <div className={`rounded-3xl overflow-hidden aspect-[4/3] ${tints[i % tints.length]} grid place-items-center text-8xl`}>
                    {m.emoji}
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <p className="font-display text-2xl text-navy">{m.name}</p>
                    <p className="font-display text-2xl text-primary">€{m.price}</p>
                  </div>
                  <button
                    onClick={() => add(m.id, m.name, m.price)}
                    className="mt-3 font-bold text-primary hover:text-navy transition-colors"
                  >
                    Add to Cart →
                  </button>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-muted-foreground italic">yes the socks are real. yes people buy them.</p>
        </div>
      </section>

      {/* CART DRAWER */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-navy/60" onClick={() => setOpen(false)} />
          <aside className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="font-display text-2xl text-navy">Your Cart</h3>
              <button onClick={() => setOpen(false)} aria-label="Close"><X /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 && <p className="text-navy/60 italic">empty. like the void. but fixable.</p>}
              {cart.map((i) => (
                <div key={i.id} className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-navy">{i.name}</p>
                    <p className="text-sm text-navy/60">€{i.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => dec(i.id)} className="w-8 h-8 rounded-full bg-cool-gray grid place-items-center"><Minus className="w-4 h-4" /></button>
                    <span className="w-6 text-center font-bold">{i.qty}</span>
                    <button onClick={() => inc(i.id)} className="w-8 h-8 rounded-full bg-cool-gray grid place-items-center"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between font-display text-2xl text-navy">
                <span>Total</span>
                <span>€{total}</span>
              </div>
              <button disabled={cart.length === 0} className="w-full rounded-full bg-yellow text-navy font-bold py-4 hover:bg-red hover:text-white transition-colors disabled:opacity-50">
                Check Out
              </button>
              <p className="text-center text-sm text-navy/60 italic">you won't regret this. probably.</p>
            </div>
          </aside>
        </div>
      )}
    </Layout>
  );
};

export default Shop;
