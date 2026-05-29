import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BDO Checkout",
  description: "BDO Checkout built on the BDO design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bdo-unibank" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
