import { Flex, Typography } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

type StackFlexProps = { label: string; field: string; helper: string };

export function StackFlex({ label, field, helper }: StackFlexProps) {
  return (
    <Flex direction="column" align="stretch" gap={2} className="flex-frame">
      <Typography variant="label" as="span">
        {label}
      </Typography>
      <FlexItem>{field}</FlexItem>
      <Typography variant="caption" as="span">
        {helper}
      </Typography>
    </Flex>
  );
}
