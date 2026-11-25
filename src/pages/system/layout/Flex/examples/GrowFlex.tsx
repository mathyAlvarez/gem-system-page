import { Flex } from "@gem-org/gem-system";
import { FlexItem } from "./FlexItem.tsx";

type GrowFlexProps = { longText: string };

export function GrowFlex({ longText }: GrowFlexProps) {
  return (
    <div className="flex-compare">
      <div>
        <div className="flex-caption">className="flex-1"</div>
        <Flex gap={2} align="stretch" className="flex-frame">
          <FlexItem>auto</FlexItem>
          <FlexItem accent className="flex-1">
            flex-1
          </FlexItem>
          <FlexItem>auto</FlexItem>
        </Flex>
      </div>
      <div>
        <div className="flex-caption">className="ms-auto"</div>
        <Flex gap={2} className="flex-frame">
          <FlexItem>A</FlexItem>
          <FlexItem>B</FlexItem>
          <FlexItem accent className="ms-auto">
            C
          </FlexItem>
        </Flex>
      </div>
      <div>
        <div className="flex-caption">className="shrink-0"</div>
        <Flex gap={2} className="flex-frame">
          <FlexItem accent className="w-32 shrink-0">
            w-32
          </FlexItem>
          <FlexItem className="min-w-0 flex-1">
            <span className="min-w-0 truncate">{longText}</span>
          </FlexItem>
        </Flex>
      </div>
    </div>
  );
}
