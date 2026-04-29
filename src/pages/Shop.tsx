import { useState } from "react";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import Layout from "@/components/site/Layout";
import Doodles from "@/components/site/Doodles";
import Sticker from "@/components/site/Sticker";

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
      {/* HERO */}
      <section className="relative bg-yellow overflow-hidden">
        <Doodles variant="wallpaper" tone="light" />
        <Sticker variant="starburst" color="red" rotate={-10} className="absolute top-10 left-[6%] w-28 h-28 text-xs hidden md:grid z-10">
          GIFT<br/>WRAP<br/>FREE
        </Sticker>
        <div className="container py-24 text-center relative">
          <h1 className="font-display text-6xl md:text-8xl text-navy text-balance">Take the Funny Home.</h1>
          <p className="mt-6 text-navy/80 text-xl max-w-2xl mx-auto">
            Gift tickets and merch. Both make excellent presents. One more than the other.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="absolute top-6 right-6 rounded-full bg-navy text-white px-5 py-3 font-bold flex items-center gap-2 z-20"
          >
            <ShoppingBag className="w-5 h-5" /> {cart.reduce((a, i) => a + i.qty, 0)}
          </button>
        </div>
      </section>

      {/* GIFT TICKETS */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-5xl md:text-6xl text-navy">Give the Gift of Awkward Joy.</h2>
          <p className="mt-3 text-muted-foreground italic">A ticket to HaHaHouse. For someone you like. Or someone you owe an apology to.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {giftTickets.map((g) => (
              <div key={g.id} className="rounded-3xl border-2 border-primary p-7 flex flex-col">
                <span className="text-4xl">{g.emoji}</span>
                <h3 className="mt-4 font-display text-2xl text-navy">{g.name}</h3>
                <p className="mt-1 font-display text-3xl text-primary">€{g.price}</p>
                <p className="mt-3 text-navy/70 flex-1 italic">{g.desc}</p>
                <button
                  onClick={() => add(g.id, g.name, g.price)}
                  className="mt-6 rounded-full bg-yellow text-navy font-bold px-6 py-3 hover:bg-red hover:text-white transition-colors"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground italic">delivered digitally. instantly. no wrapping paper required.</p>
        </div>
      </section>

      {/* MERCH */}
      <section className="py-24 bg-orange">
        <div className="container">
          <h2 className="font-display text-5xl md:text-6xl text-white">Wear the Bit.</h2>
          <p className="mt-3 text-white/90 italic">Limited merch. Unlimited personality.</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merch.map((m) => (
              <div key={m.id} className="rounded-3xl bg-white p-6 flex flex-col">
                <div className="aspect-square rounded-2xl bg-cool-gray grid place-items-center text-7xl">{m.emoji}</div>
                <h3 className="mt-5 font-display text-xl text-navy">{m.name}</h3>
                <p className="text-primary font-bold">€{m.price}</p>
                <button
                  onClick={() => add(m.id, m.name, m.price)}
                  className="mt-4 rounded-full border-2 border-primary text-primary font-bold px-5 py-2 hover:bg-primary hover:text-white transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/90 italic">yes the socks are real. yes people buy them. no we don't question it.</p>
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
