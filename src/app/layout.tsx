import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP, Klee_One, New_Tegomin, Shippori_Mincho, Hina_Mincho } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/atoms/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  variable: '--font-noto-serif-jp',
  display: 'swap',
  subsets: ['latin'],
  preload: true
})

const kleeOne = Klee_One({
  weight: ['400', '600'],
  variable: "--font-klee-one",
  display: 'swap',
  subsets: ['latin'],
  preload: true
})

const newTegomin = New_Tegomin({
  variable: "--font-new-tegomin",
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  preload: true
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
  preload: true
});

const hinaMincho = Hina_Mincho({
  variable: "--font-hina-mincho",
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  preload: true
});


export const metadata: Metadata = {
  title: "Kanji Study",
  description: "Kanji Study App (a work in progress by Faishal Abdur Rahman)",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased",
          geistSans.variable,
          geistMono.variable,
          kleeOne.variable,
          newTegomin.variable,
          shipporiMincho.variable,
          hinaMincho.variable,
          notoSerif.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
