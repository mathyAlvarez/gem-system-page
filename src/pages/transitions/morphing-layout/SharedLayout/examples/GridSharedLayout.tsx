import { useState } from "react";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type GridSharedLayoutProps = {
  groupLabel: string;
  itemLabel: string;
  detailBody: string;
};

export function GridSharedLayout({ groupLabel, itemLabel, detailBody }: GridSharedLayoutProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="shared-layout-demo">
      <div className="shared-layout-demo__grid" role="group" aria-label={groupLabel}>
        {[0, 1, 2, 3].map((index) => {
          const open = active === index;
          const label = itemLabel.replace("{n}", String(index + 1));

          return (
            <button
              key={index}
              type="button"
              className={
                open
                  ? "shared-layout-demo__grid-item shared-layout-demo__grid-item--active"
                  : "shared-layout-demo__grid-item"
              }
              aria-pressed={open}
              onClick={() => setActive(open ? null : index)}
            >
              <SharedLayout
                isExpanded={open}
                collapsed={<div className="shared-layout-demo__tile">{label}</div>}
                expanded={
                  <div className="shared-layout-demo__detail">
                    <strong>{label}</strong>
                    <p>{detailBody}</p>
                  </div>
                }
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
