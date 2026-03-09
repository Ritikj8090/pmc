import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-league-spartan",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Management Club - UTD",
  description: `Welcome to PMC UT Dallas, where passion fuels project management excellence! 
  Embark on an empowering journey with us as we ignite future leaders' minds through dynamic 
  activities. Join our vibrant community dedicated to advancing knowledge in project and 
  product management, while having a blast along the way. Let's unlock your potential 
  together!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} antialiased bg-linear-to-br from-green-100/10 via-green-300/20 to-green-500/30`}
      >
        <Navbar />
        <main className="container flex justify-center items-center mx-auto min-h-screen w-full pt-20">
          <div
            className="absolute inset-0 pointer-events-none animate-[gridDrift_22s_linear_infinite]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,197,94,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
