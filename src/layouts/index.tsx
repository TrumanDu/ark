import { Link, Outlet } from "umi";
import styles from "./index.less";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
