"use client";

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
} from "@jasperlepardo/design-system";

interface SummaryViewProps {
  customerName?: string;
  email?: string;
  amount?: string;
  description?: string;
  expiry?: string;
  sellersNotes?: string;
}

const orDash = (value?: string) =>
  value && value.trim() !== "" ? value : "—";

export function SummaryView({
  customerName,
  email,
  amount,
  description,
  expiry,
  sellersNotes,
}: SummaryViewProps) {
  const router = useRouter();

  const goToSuccess = () => {
    const entries = Object.entries({
      customerName,
      email,
      amount,
      description,
      expiry,
      sellersNotes,
    }).filter(([, v]) => v != null && v !== "") as [string, string][];
    router.push(`/bdo-checkout/success?${new URLSearchParams(entries).toString()}`);
  };

  const rows = [
    { label: "Customer Name", value: orDash(customerName) },
    { label: "Email Address", value: orDash(email) },
    { label: "Amount", value: amount?.trim() ? `PHP ${amount}` : "—" },
    { label: "Description", value: orDash(description) },
    {
      label: "Link Expiry",
      value: expiry?.trim() ? `${expiry} day(s)` : "—",
    },
    { label: "Seller's Note", value: orDash(sellersNotes) },
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
            <Column variant="centered">
              <Card density="spacious">
                <Card.Body>
                  <Card.Header as="h2" heading="Confirm payment request details" />
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
                    <Button variant="outline" onClick={() => router.back()}>
                      Edit
                    </Button>
                    <Button onClick={goToSuccess}>Submit</Button>
                  </ButtonGroup>
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
