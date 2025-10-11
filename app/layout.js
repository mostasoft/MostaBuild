import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import SupportButton from "./home/Support";
import BackToTopButton from "./home/ScrollTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Build Your Next Dream Place",
  description: "MostaBuild , Constract Your Home Today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <SupportButton/>
        <BackToTopButton/>
        <Footer/>
      </body>
    </html>
  );
}
