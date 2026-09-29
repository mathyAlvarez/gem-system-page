import { Button, Flex, Typography } from "@gem-org/gem-system";
import "./flex-demo.css";

type ToolbarFlexProps = { title: string; secondary: string; primary: string };

export function ToolbarFlex({ title, secondary, primary }: ToolbarFlexProps) {
  return (
    <Flex justify="between" align="center" gap={4} className="flex-frame">
      <Typography variant="h6" as="h3">
        {title}
      </Typography>
      <Flex gap={2} align="center">
        <Button variant="secondary" size="sm">
          {secondary}
        </Button>
        <Button variant="primary" size="sm">
          {primary}
        </Button>
      </Flex>
    </Flex>
  );
}
