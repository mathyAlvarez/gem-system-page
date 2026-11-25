import { Flex, type LayoutAlign } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

const values: LayoutAlign[] = ["stretch", "start", "center", "end", "baseline"];

export function AlignFlex() {
  return (
    <div className="flex-compare">
      {values.map((align) => (
        <div key={align}>
          <div className="flex-caption">align="{align}"</div>
          <Flex align={align} gap={2} className="flex-frame">
            <FlexItem tall>A</FlexItem>
            <FlexItem className="text-2xl">B</FlexItem>
            <FlexItem accent>C</FlexItem>
          </Flex>
        </div>
      ))}
    </div>
  );
}
