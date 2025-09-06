import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandrabon | Authentic Manipuri Handloom Sarees",
  description:
    "Discover authentic Manipuri handloom sarees directly from Sylhet weavers. Chandrabon offers premium traditional & modern designs with nationwide delivery.",
  keywords: [
    "Manipuri saree",
    "Handloom saree Bangladesh",
    "Sylhet saree",
    "Chandrabon saree shop",
    "Traditional saree online",
  ],
  authors: [{ name: "Chandrabon" }],
  openGraph: {
    title: "Chandrabon | Authentic Manipuri Handloom Sarees",
    description:
      "Shop authentic Manipuri handloom sarees, handcrafted by skilled Sylheti weavers. Order online from Chandrabon today!",
    url: "https://chandrabon.vercel.app",
    siteName: "Chandrabon",
    images: [
      {
        url: "/img/hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "Chandrabon Manipuri Sarees",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandrabon | Authentic Manipuri Handloom Sarees",
    description:
      "Authentic Manipuri handloom sarees online — directly from Sylhet weavers.",
    images: ["/img/hero1.jpeg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
