"use client";

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
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Section>
                      <Form.Header as="h3" heading="Customer Information" />
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
                      <Form.Header as="h3" heading="Billing Details" />
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

                    <ButtonGroup fill>
                      <Button type="button" variant="outline">
                        Secondary
                      </Button>
                      <Button type="submit">Button</Button>
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
