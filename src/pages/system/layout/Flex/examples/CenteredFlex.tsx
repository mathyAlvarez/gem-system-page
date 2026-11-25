import { Button, Flex, Typography } from "@gem-org/gem-system";
import "./flex-demo.css";

type CenteredFlexProps = { title: string; body: string; action: string };

export function CenteredFlex({ title, body, action }: CenteredFlexProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap={3}
      className="flex-frame min-h-64 text-center"
    >
      <Typography variant="h5" as="h3">
        {title}
      </Typography>
      <Typography variant="bodySm" as="p">
        {body}
      </Typography>
      <Button variant="primary" size="sm">
        {action}
      </Button>
    </Flex>
  );
}
