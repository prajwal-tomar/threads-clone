import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Leftbar from "@/components/shared/Leftbar";
import Rightbar from "@/components/shared/Rightbar";
import Bottombar from "@/components/shared/Bottombar";
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
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            {/* Flex makes the contents inside the main section flow from left to right */}
            <Leftbar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <Rightbar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
