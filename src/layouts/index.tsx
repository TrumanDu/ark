import { Outlet } from "umi";
import { LanguageProvider } from "../i18n/context";
import Header from "./header";
import Footer from "./footer";
import React from "react";

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
