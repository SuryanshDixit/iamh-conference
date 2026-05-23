import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWorkshopButton from "@/components/FloatingWorkshopButton";

export const metadata: Metadata = {
  title: "IAMH–BHU National Conference 2026 | Mental Health Care",
  description: "National Conference on Mental Health Care in the Contemporary Era — 10–12 July 2026, K.N. Udupa Auditorium, IMS-BHU, Varanasi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <FloatingWorkshopButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
