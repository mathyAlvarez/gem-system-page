import { Flex, type FlexProps } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

const variants: { label: string; props: FlexProps }[] = [
  { label: "gap  →  0", props: {} },
  { label: "gap={3}  →  var(--gem-space-3)", props: { gap: 3 } },
  { label: "gap={20}  →  20px", props: { gap: 20 } },
  { label: "wrap rowGap={1} columnGap={6}", props: { wrap: true, rowGap: 1, columnGap: 6 } },
];

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function GapFlex() {
  return (
    <div className="flex-compare">
      {variants.map((variant) => (
        <div key={variant.label}>
          <div className="flex-caption">{variant.label}</div>
          <Flex {...variant.props} className="flex-frame">
            {items.slice(0, variant.props.wrap ? 10 : 4).map((item) => (
              <FlexItem key={item}>{item}</FlexItem>
            ))}
          </Flex>
        </div>
      ))}
    </div>
  );
}
