"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import MobileDock from "@/components/MobileDock";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { CustomizationButton, CustomizationPanel } from "@/components/customization";

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  if (pathname === "/cv") return children;

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <MobileDock />
      <BackToTop />
      <FloatingContact />
      <CustomizationButton />
      <CustomizationPanel />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
