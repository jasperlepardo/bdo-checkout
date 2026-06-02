"use client";

import { useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  ButtonGroup,
  Card,
  Column,
  FooterCheckout,
  List,
  Logo,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  Page,
  Row,
  Section,
  Text,
  Textarea,
} from "@jasperlepardo/design-system";

interface SuccessViewProps {
  customerName?: string;
  email?: string;
  amount?: string;
  description?: string;
  expiry?: string;
  sellersNotes?: string;
  createdAt: string;
  referenceNumber: string;
  invoiceLink: string;
}

const orDash = (value?: string) =>
  value && value.trim() !== "" ? value : "—";

const checkCircleStyle: CSSProperties = {
  width: 72,
  height: 72,
  borderRadius: "9999px",
  backgroundColor: "var(--color-success)",
  color: "var(--color-on-success, #fff)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 1,
};

export function SuccessView({
  customerName,
  email,
  amount,
  description,
  expiry,
  sellersNotes,
  createdAt,
  referenceNumber,
  invoiceLink,
}: SuccessViewProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(invoiceLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  const rows = [
    { label: "Customer Name", value: orDash(customerName) },
    { label: "Email Address", value: orDash(email) },
    { label: "Amount", value: amount?.trim() ? `PHP ${amount}` : "—" },
    { label: "Description", value: orDash(description) },
    { label: "Link Expiry", value: expiry?.trim() ? `${expiry} day(s)` : "—" },
    { label: "Seller's Note", value: orDash(sellersNotes) },
    { label: "Reference Number", value: referenceNumber },
  ];

  return (
    <Page>
      <Navbar>
        <NavbarBrand>
          <Logo name="bdo/checkout" orientation="horizontal" inverse />
        </NavbarBrand>
        <NavbarContent>
          <NavbarActions>
            <Button intent="white" variant="link" leadingIcon="action/logout">
              Logout
            </Button>
          </NavbarActions>
        </NavbarContent>
      </Navbar>

      <Section paddingY="4xl">
        <Section.Container>
          <Row>
            <Column variant="centered-wide">
              <Card density="spacious">
                <Card.Body>
                  <div className="flex gap-4xl">
                    {/* Left — confirmation */}
                    <div className="flex flex-1 flex-col gap-2xl">
                      <div className="flex flex-col gap-sm">
                        <span
                          style={{
                            color: "var(--color-warning)",
                            fontSize: "var(--font-size-sm)",
                            fontWeight: 700,
                          }}
                        >
                          {createdAt}
                        </span>
                        <Text as="h2" variant="heading-4" weight="bold">
                          Payment request successfully created
                        </Text>
                      </div>

                      <div className="flex flex-col items-center gap-xl">
                        <span style={checkCircleStyle} aria-hidden>
                          ✓
                        </span>
                        <div className="flex items-baseline gap-xs">
                          <Text variant="text-lg" weight="bold">
                            PHP
                          </Text>
                          <Text variant="heading-2" weight="bold">
                            {amount?.trim() ? amount : "0.00"}
                          </Text>
                        </div>
                      </div>

                      <div className="flex flex-col gap-sm">
                        <Text variant="text-sm" weight="bold">
                          Link to invoice
                        </Text>
                        <Textarea
                          readOnly
                          rows={2}
                          value={invoiceLink}
                          aria-label="Link to invoice"
                        />
                        <ButtonGroup fill>
                          <Button variant="outline" onClick={copyLink}>
                            {copied ? "Copied!" : "Copy Link"}
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>

                    {/* Right — request details */}
                    <div className="flex flex-1 flex-col gap-2xl">
                      <List>
                        <List.Group divider>
                          {rows.map((row) => (
                            <List.Item
                              key={row.label}
                              title={row.label}
                              content={row.value}
                            />
                          ))}
                        </List.Group>
                      </List>
                      <ButtonGroup fill>
                        <Button onClick={() => router.push("/")}>
                          Send another Payment Request
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Column>
          </Row>
        </Section.Container>
      </Section>

      <FooterCheckout>BDOCheckout@bdo.com.ph</FooterCheckout>
    </Page>
  );
}
