import doodles from "@/assets/doodles.png";

/* Floating doodle decorations — used on hero sections */
const Doodles = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    <img src={doodles} alt="" className="absolute -top-6 -left-10 w-72 opacity-40 animate-float" style={{ animationDelay: "0s" }} />
    <img src={doodles} alt="" className="absolute top-1/3 -right-20 w-96 opacity-30 animate-float" style={{ animationDelay: "2s" }} />
    <img src={doodles} alt="" className="absolute bottom-0 left-1/4 w-80 opacity-25 animate-float" style={{ animationDelay: "4s" }} />
  </div>
);

export default Doodles;
