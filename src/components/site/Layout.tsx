import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Nav />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
