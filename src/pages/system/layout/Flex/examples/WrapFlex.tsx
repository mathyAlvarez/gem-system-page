import { Flex, type FlexWrap } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

const variants: { label: string; wrap: FlexWrap }[] = [
  { label: "wrap={false}", wrap: false },
  { label: "wrap", wrap: true },
  { label: 'wrap="wrap-reverse"', wrap: "wrap-reverse" },
];

type WrapFlexProps = { tags: string[] };

export function WrapFlex({ tags }: WrapFlexProps) {
  return (
    <div className="flex-compare">
      {variants.map((variant) => (
        <div key={variant.label}>
          <div className="flex-caption">{variant.label}</div>
          <Flex wrap={variant.wrap} gap={2} className="flex-frame">
            {tags.map((tag, index) => (
              <FlexItem key={tag} accent={index === 0}>
                {tag}
              </FlexItem>
            ))}
          </Flex>
        </div>
      ))}
    </div>
  );
}
