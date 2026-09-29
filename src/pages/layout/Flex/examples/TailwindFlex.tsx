import { Flex, type FlexProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { FlexItem } from "./FlexItem.tsx";

function Cluster({ className, ...props }: FlexProps) {
  return (
    <Flex
      wrap
      align="center"
      className={cn("[--gem-flex-gap:var(--gem-space-2)] rounded-lg bg-(--gem-color-bg-subtle) p-3", className)}
      {...props}
    />
  );
}

const items = ["A", "B", "C", "D", "E"];

export function TailwindFlex() {
  return (
    <div className="flex-compare">
      <Cluster>
        {items.map((item) => (
          <FlexItem key={item}>{item}</FlexItem>
        ))}
      </Cluster>
      <Cluster className="flex-col [--gem-flex-gap:var(--gem-space-4)] p-6 sm:flex-row">
        {items.map((item) => (
          <FlexItem key={item} accent>
            {item}
          </FlexItem>
        ))}
      </Cluster>
    </div>
  );
}
