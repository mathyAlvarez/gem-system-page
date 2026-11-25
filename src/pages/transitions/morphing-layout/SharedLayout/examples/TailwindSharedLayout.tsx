import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type TailwindSharedLayoutProps = {
  expand: string;
  collapse: string;
  tile: string;
  detailTitle: string;
  detailBody: string;
};

export function TailwindSharedLayout({
  expand,
  collapse,
  tile,
  detailTitle,
  detailBody,
}: TailwindSharedLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="shared-layout-demo">
      <div className="shared-layout-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isExpanded}
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? collapse : expand}
        </Button>
      </div>
      <SharedLayout
        isExpanded={isExpanded}
        duration={360}
        className="[--gemst-shared-layout-easing:var(--gemst-easing-emphasized)]"
        collapsed={
          <div className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-4 py-3 font-semibold text-[var(--gem-color-fg)]">
            {tile}
          </div>
        }
        expanded={
          <div className="w-64 rounded-[var(--gem-radius-xl)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-[var(--gem-color-fg)]">
            <strong className="mb-2 block text-[var(--gem-font-size-md)]">{detailTitle}</strong>
            <p className="m-0 text-sm text-[var(--gem-color-fg-muted)]">{detailBody}</p>
          </div>
        }
      />
    </div>
  );
}
