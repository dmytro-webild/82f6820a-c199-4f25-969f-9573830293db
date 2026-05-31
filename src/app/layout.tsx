import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Samarth Gold - Exquisite Gold Jewellery',
  description: 'Discover timeless gold jewellery at Samarth Gold. Handcrafted designs, certified purity, and exceptional service for your most cherished moments.',
  openGraph: {
    "title": "Samarth Gold - Exquisite Gold Jewellery",
    "description": "Discover timeless gold jewellery at Samarth Gold. Handcrafted designs, certified purity, and exceptional service for your most cherished moments.",
    "url": "/",
    "siteName": "Samarth Gold",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-indian-woman-wearing-sari_23-2149400863.jpg",
        "alt": "Elegant gold necklace"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Samarth Gold - Exquisite Gold Jewellery",
    "description": "Discover timeless gold jewellery at Samarth Gold. Handcrafted designs, certified purity, and exceptional service for your most cherished moments.",
    "images": [
      "http://img.b2bpic.net/free-photo/young-indian-woman-wearing-sari_23-2149400863.jpg"
    ]
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
