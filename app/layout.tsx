import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBarProvider } from "@/context/use-sidebar-context";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Jua Smart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarProvider>{children}</SideBarProvider>
      </body>
    </html>
  );
}
