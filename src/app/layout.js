import { Fraunces, Hanken_Grotesk, Newsreader } from "next/font/google";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "./case-study.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://toobaameer.co.uk"),
  title: "Tooba Ameer — Product & Development, Consumer Goods",
  description: "Design & Development Manager with 8 years building physical consumer products end to end.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tooba Ameer Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${newsreader.variable} ${geistSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
