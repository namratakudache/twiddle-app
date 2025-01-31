import { Inter } from "next/font/google";

import { Metadata } from "next";
import "../global.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "twiddle",
  description: "A social media app",
}; //used by SEO..apllication is regconise by seo
const inter = Inter({
  subsets: ["latin"],
}); //font should include latin subset of characters

export default function Rootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <ClerkProvider>
          <body>
            <main className={`${inter.className} bg-dark-1`}>
              <div className="w-full flex justify-center items-center min-h-screen">
                {children}
              </div>
            </main>
          </body>
        </ClerkProvider>
      </html>
    </>
  );
}
