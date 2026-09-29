import { Col, Container, Grid, Row } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";
import "./grid-col-fix.css";

type PageLayoutGridProps = {
  texts: { header: string; sidebar: string; card: string; footer: string };
};

const cards = [1, 2, 3];

export function PageLayoutGrid({ texts }: PageLayoutGridProps) {
  return (
    <Container fluid padded={false}>
      <Row gap={4}>
        <Col span={12}>
          <GridCell>{texts.header}</GridCell>
        </Col>
        <Col span={12} md={4} lg={3}>
          <GridCell accent tall>
            {texts.sidebar}
          </GridCell>
        </Col>
        <Col span={12} md={8} lg={9}>
          <Grid auto="fit" minItemWidth="10rem" gap={4}>
            {cards.map((card) => (
              <GridCell key={card} tall>
                {`${texts.card} ${card}`}
              </GridCell>
            ))}
          </Grid>
        </Col>
        <Col span={12}>
          <GridCell>{texts.footer}</GridCell>
        </Col>
      </Row>
    </Container>
  );
}
