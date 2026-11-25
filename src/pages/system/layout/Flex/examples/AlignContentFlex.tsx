import { Flex } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

const values = ["start", "center", "between"] as const;
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function AlignContentFlex() {
  return (
    <div className="flex-compare">
      {values.map((alignContent) => (
        <div key={alignContent}>
          <div className="flex-caption">wrap alignContent="{alignContent}"</div>
          <Flex wrap alignContent={alignContent} gap={2} className="flex-frame h-56">
            {items.map((item) => (
              <FlexItem key={item} className="w-24">
                {item}
              </FlexItem>
            ))}
          </Flex>
        </div>
      ))}
    </div>
  );
}
