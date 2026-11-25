import { Button, Popconfirm } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

const sizes = ["sm", "md"] as const;

type SizesPopconfirmProps = { common: PopconfirmCommon; title: string; description: string };

export function SizesPopconfirm({ common, title, description }: SizesPopconfirmProps) {
  return (
    <div className="popconfirm-row">
      {sizes.map((size) => (
        <Popconfirm
          key={size}
          size={size}
          title={title}
          description={description}
          confirmLabel={common.confirm}
          cancelLabel={common.cancel}
        >
          <Button variant="secondary" size="sm">
            {size}
          </Button>
        </Popconfirm>
      ))}
    </div>
  );
}
