import { Flex, Typography } from "@gem-org/gem-system";
import { Check } from "@gem-org/gem-system/icons";

type InlineFlexProps = { before: string; badge: string; after: string };

export function InlineFlex({ before, badge, after }: InlineFlexProps) {
  return (
    <Typography variant="body" as="div">
      {before}{" "}
      <Flex
        inline
        align="center"
        gap={1}
        className="rounded-full bg-(--gem-color-bg-subtle) px-2 align-middle"
      >
        <Check size="sm" />
        {badge}
      </Flex>{" "}
      {after}
    </Typography>
  );
}
