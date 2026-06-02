"use client";

import type { CSSProperties } from "react";
import {
  Button,
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
  Text,
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

const cardStyle = {
  "--card-padding": "var(--space-4xl)",
} as CSSProperties;

export default function CheckoutPage() {
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
              <Card style={cardStyle}>
                <Card.Body>
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <Text as="h1" variant="heading-2" tone="primary" weight="bold">
                      Create a Payment Request
                    </Text>

                    <Form.Section>
                      <Form.Header as="h2" heading="Customer Information" />
                      <Form.Group>
                        <TextField
                          label="Customer Name"
                          placeholder="Enter Customer Name"
                        />
                        <TextField
                          label="Email Address"
                          type="email"
                          placeholder="name@company.com"
                        />
                      </Form.Group>
                    </Form.Section>

                    <Divider />

                    <Form.Section>
                      <Form.Header as="h2" heading="Billing Details" />
                      <Form.Group>
                        <CurrencyInput
                          label="Amount"
                          currencySymbol="PHP"
                          placeholder="0.00"
                        />
                        <Textarea label="Description" placeholder="Description" />
                        <Select
                          label="Payment Request Expiry"
                          subLabel="(Days)"
                          options={expiryDayOptions}
                          defaultValue="1"
                        />
                        <Textarea
                          label="Seller's Notes"
                          subLabel="(Optional)"
                          placeholder="Seller's Notes"
                        />
                      </Form.Group>
                    </Form.Section>

                    <div className="flex gap-4xl">
                      <Button type="button" variant="outline" className="flex-1">
                        Secondary
                      </Button>
                      <Button type="submit" className="flex-1">
                        Button
                      </Button>
                    </div>
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
