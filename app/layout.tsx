import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Orrery Web App",
  description: "NASA Space Apps Hackathon 2024 - Team VAMK'd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="@/public/image/favicon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-tertiary`}
      >
        {children}
      </body>
    </html>
  );
}
