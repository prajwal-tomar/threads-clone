import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
// import LeftSidebar from "@/components/shared/LeftSidebar";
// import Bottombar from "@/components/shared/Bottombar";
// import RightSidebar from "@/components/shared/RightSidebar";
// import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
