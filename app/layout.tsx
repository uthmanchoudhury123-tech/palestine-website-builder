import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palestina — FC Palestina Floral Jersey",
  description: "Wear Palestine. The limited FC Palestina floral jersey. 20% of every sale funds Medical Aid for Palestinians. Free Palestine.",
  openGraph: {
    title: "Palestina — Wear The Movement",
    description: "Limited FC Palestina floral jersey. 20% of every sale goes directly to Medical Aid for Palestinians.",
    siteName: "Palestina",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palestina — Wear The Movement",
    description: "Limited FC Palestina floral jersey. 20% of every sale goes directly to Medical Aid for Palestinians.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0d0d0d] text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
