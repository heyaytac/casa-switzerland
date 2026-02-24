import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CASA Switzerland – KI-gestützte Immobilienplattform",
  description:
    "Die intelligente Immobilienplattform der Schweiz. Finden Sie Ihr Traumobjekt oder registrieren Sie sich als Makler und profitieren Sie von unserem KI-Telefonagenten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
