import { Button, Col, Flex, Row, Typography } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

type FlexWithRowProps = {
  texts: { title: string; filter: string; add: string; filters: string; results: string };
};

export function FlexWithRow({ texts }: FlexWithRowProps) {
  return (
    <Flex direction="column" gap={4}>
      <Flex justify="between" align="center" wrap gap={3}>
        <Typography variant="h5" as="h3">
          {texts.title}
        </Typography>
        <Flex gap={2}>
          <Button variant="secondary" size="sm">
            {texts.filter}
          </Button>
          <Button variant="primary" size="sm">
            {texts.add}
          </Button>
        </Flex>
      </Flex>
      <Row gap={4}>
        <Col span={12} md={4}>
          <FlexItem tall className="h-full">
            {texts.filters}
          </FlexItem>
        </Col>
        <Col span={12} md={8}>
          <FlexItem tall accent className="h-full">
            {texts.results}
          </FlexItem>
        </Col>
      </Row>
    </Flex>
  );
}
