import { Button, Popconfirm } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

const placements = ["top", "bottom", "left", "right"] as const;

type PlacementsPopconfirmProps = { common: PopconfirmCommon; title: string };

export function PlacementsPopconfirm({ common, title }: PlacementsPopconfirmProps) {
  return (
    <div className="popconfirm-grid">
      {placements.map((placement) => (
        <Popconfirm
          key={placement}
          placement={placement}
          tone="primary"
          title={title}
          confirmLabel={common.confirm}
          cancelLabel={common.cancel}
        >
          <Button variant="secondary" size="sm">
            {placement}
          </Button>
        </Popconfirm>
      ))}
    </div>
  );
}
