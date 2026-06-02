import { SuccessView } from "./success-view";

type SuccessSearchParams = Promise<{
  customerName?: string;
  email?: string;
  amount?: string;
  description?: string;
  expiry?: string;
  sellersNotes?: string;
}>;

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: SuccessSearchParams;
}) {
  const sp = await searchParams;

  const createdDate = new Date();
  const createdAt = createdDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const referenceNumber = `PR-${createdDate
    .getTime()
    .toString(36)
    .toUpperCase()
    .slice(-8)}`;

  return (
    <SuccessView
      customerName={sp.customerName}
      email={sp.email}
      amount={sp.amount}
      description={sp.description}
      expiry={sp.expiry}
      sellersNotes={sp.sellersNotes}
      createdAt={createdAt}
      referenceNumber={referenceNumber}
      invoiceLink="http://bdocheckout.bdo.com.ph/MailPaymentConfirm.asp"
    />
  );
}
