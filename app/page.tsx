"use client";

import {
  Card,
  Column,
  Icon,
  List,
  Page,
  Row,
  Section,
  Text,
} from "@jasperlepardo/design-system";
import { prototypes } from "@/lib/prototypes";

export default function GalleryPage() {
  return (
    // The root layout is theme-neutral; the gallery scopes its own theme so the
    // design-system components are styled. Each prototype sets its theme in its
    // own layout.tsx.
    <div data-theme="bdo-unibank" style={{ minHeight: "100%" }}>
      <Page>
        <Section paddingY="4xl">
          <Section.Container>
            <Row>
              <Column variant="centered">
                <Card density="spacious">
                  <Card.Body>
                    <Text as="h1" variant="heading-3" weight="bold">
                      Prototypes
                    </Text>
                    <Text variant="text-sm" tone="muted">
                      A gallery of prototypes built on the BDO design system.
                    </Text>
                    <List>
                      <List.Group divider>
                        {prototypes.map((p) => (
                          <List.Item
                            key={p.slug}
                            variant="stacked"
                            href={`/${p.slug}`}
                            title={p.title}
                            content={p.description}
                            trailing={<Icon name="navigation/arrow-right" />}
                          />
                        ))}
                      </List.Group>
                    </List>
                  </Card.Body>
                </Card>
              </Column>
            </Row>
          </Section.Container>
        </Section>
      </Page>
    </div>
  );
}
