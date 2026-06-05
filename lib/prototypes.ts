/**
 * Registry of prototypes hosted in this repo.
 *
 * To add a prototype: create `app/<slug>/` (with its own `layout.tsx` +
 * `page.tsx`), then add one entry here. The gallery at `/` is generated from
 * this list. See README for the full recipe.
 */
export type Prototype = {
  /** URL segment and folder name under `app/`, e.g. "bdo-checkout". */
  slug: string;
  title: string;
  description: string;
};

export const prototypes: Prototype[] = [
  {
    slug: "bdo-checkout",
    title: "BDO Checkout",
    description: "Create-payment-request flow on the BDO design system.",
  },
];
