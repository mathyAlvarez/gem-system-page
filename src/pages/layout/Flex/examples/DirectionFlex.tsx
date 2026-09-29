import { Flex, type FlexDirection } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

const directions: FlexDirection[] = ["row", "row-reverse", "column", "column-reverse"];

export function DirectionFlex() {
  return (
    <div className="flex-compare">
      {directions.map((direction) => (
        <div key={direction}>
          <div className="flex-caption">direction="{direction}"</div>
          <Flex direction={direction} gap={2} className="flex-frame">
            <FlexItem>1</FlexItem>
            <FlexItem>2</FlexItem>
            <FlexItem accent>3</FlexItem>
          </Flex>
        </div>
      ))}
    </div>
  );
}
