import type { Metadata } from "next";

export const metadata: Metadata = {
  // Rendered as "BDO Checkout · Prototypes" via the root layout's title template.
  title: "BDO Checkout",
  description: "BDO Checkout built on the BDO design system",
};

export default function BdoCheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The root layout is theme-neutral; each prototype scopes its own theme here.
  // `[data-theme="..."]` selectors set the design-system CSS vars, which cascade
  // to this subtree.
  return (
    <div data-theme="bdo-unibank" style={{ minHeight: "100%" }}>
      {children}
    </div>
  );
}
