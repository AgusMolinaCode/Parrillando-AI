import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Menu from "@/components/sections/Navbar";
import { Providers } from "./providers";
import Footer from "../components/sections/Footer";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parrillando",
  description: "Recetas de parrilla y asado con AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Providers>
            <div className="bg-[#FCFBF4]">
              <Menu />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
