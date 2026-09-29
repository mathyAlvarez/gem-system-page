import { Flex, type LayoutJustify } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

const values: LayoutJustify[] = ["start", "center", "end", "between", "around", "evenly"];

export function JustifyFlex() {
  return (
    <div className="flex-compare">
      {values.map((justify) => (
        <div key={justify}>
          <div className="flex-caption">justify="{justify}"</div>
          <Flex justify={justify} gap={2} className="flex-frame">
            <FlexItem>A</FlexItem>
            <FlexItem>B</FlexItem>
            <FlexItem>C</FlexItem>
          </Flex>
        </div>
      ))}
    </div>
  );
}
