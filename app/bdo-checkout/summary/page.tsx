import { SummaryView } from "./summary-view";

type SummarySearchParams = Promise<{
  customerName?: string;
  email?: string;
  amount?: string;
  description?: string;
  expiry?: string;
  sellersNotes?: string;
}>;

export default async function SummaryPage({
  searchParams,
}: {
  searchParams: SummarySearchParams;
}) {
  const sp = await searchParams;

  return (
    <SummaryView
      customerName={sp.customerName}
      email={sp.email}
      amount={sp.amount}
      description={sp.description}
      expiry={sp.expiry}
      sellersNotes={sp.sellersNotes}
    />
  );
}
