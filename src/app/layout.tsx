import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/layout/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Akash Chaudhary — Developer Portfolio",
  description: "Portfolio of Akash Chaudhary, B.Tech CSE student at LPU. Software Engineer Intern at The Educode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-mono bg-cream text-text-black antialiased selection:bg-mustard selection:text-black`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
