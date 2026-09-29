import { Flex } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";
import "./flex-overrides.css";

export function StyledFlexes() {
  return (
    <div className="flex-compare">
      <Flex align="center" className="flex-toolbar">
        <FlexItem>A</FlexItem>
        <FlexItem>B</FlexItem>
        <FlexItem accent className="ms-auto">
          C
        </FlexItem>
      </Flex>
      <Flex className="flex-responsive">
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem accent>3</FlexItem>
      </Flex>
    </div>
  );
}
