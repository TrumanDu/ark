import { Link, Outlet } from "umi";
import styles from "./index.less";
import Header from "./header";
import Footer from "./footer";
import React from "react";

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
