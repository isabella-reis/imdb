import "./globals.css";

import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "IMDb Clone",
  description:
    "This is an IMDb Clone website, created by Isabollinha and Sahand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />
          
          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
