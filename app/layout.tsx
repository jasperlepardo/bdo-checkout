import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Prototypes", template: "%s · Prototypes" },
  description: "A gallery of prototypes built on the BDO design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
