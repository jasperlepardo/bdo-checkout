"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  ButtonGroup,
  Card,
  Column,
  CurrencyInput,
  Divider,
  FooterCheckout,
  Form,
  Logo,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  Page,
  Row,
  Section,
  Select,
  TextField,
  Textarea,
} from "@jasperlepardo/design-system";

const expiryDayOptions = [
  { value: "1", label: "1" },
  { value: "3", label: "3" },
  { value: "7", label: "7" },
  { value: "14", label: "14" },
  { value: "30", label: "30" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expiry, setExpiry] = useState("1");
  const [sellersNotes, setSellersNotes] = useState("");

  const canSubmit =
    customerName.trim() !== "" &&
    email.trim() !== "" &&
    amount.trim() !== "" &&
    description.trim() !== "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    const params = new URLSearchParams({
      customerName,
      email,
      amount,
      description,
      expiry,
      sellersNotes,
    });
    router.push(`/summary?${params.toString()}`);
  };

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
                  <Card.Header as="h2" heading="Create a Payment Request" />
                  <Form onSubmit={handleSubmit}>
                    <Form.Section>
                      <Form.Header as="h3" heading="Customer Information" />
                      <Form.Group>
                        <TextField
                          label="Customer Name"
                          placeholder="Enter Customer Name"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                        <TextField
                          label="Email Address"
                          type="email"
                          placeholder="name@company.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                    </Form.Section>

                    <Divider />

                    <Form.Section>
                      <Form.Header as="h3" heading="Billing Details" />
                      <Form.Group>
                        <CurrencyInput
                          label="Amount"
                          currencySymbol="PHP"
                          placeholder="0.00"
                          required
                          value={amount}
                          onValueChange={setAmount}
                        />
                        <Textarea
                          label="Description"
                          placeholder="Description"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <Select
                          label="Payment Request Expiry"
                          subLabel="(Days)"
                          options={expiryDayOptions}
                          value={expiry}
                          onValueChange={setExpiry}
                        />
                        <Textarea
                          label="Seller's Notes"
                          subLabel="(Optional)"
                          placeholder="Seller's Notes"
                          value={sellersNotes}
                          onChange={(e) => setSellersNotes(e.target.value)}
                        />
                      </Form.Group>
                    </Form.Section>

                    <ButtonGroup fill>
                      <Button type="submit" disabled={!canSubmit}>
                        Submit
                      </Button>
                    </ButtonGroup>
                  </Form>
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
