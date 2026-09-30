import { Button, Popconfirm } from "@gem-org/gem-system";
import { Star } from "@gem-org/gem-system/icons";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-overrides.css";

type BrandPopconfirmProps = { common: PopconfirmCommon; trigger: string; title: string; description: string };

export function BrandPopconfirm({ common, trigger, title, description }: BrandPopconfirmProps) {
  return (
    <Popconfirm
      className="popconfirm-branded"
      tone="primary"
      icon={<Star size="md" strokeWidth={2} />}
      title={title}
      description={description}
      confirmLabel={common.confirm}
      cancelLabel={common.cancel}
      confirmProps={{ variant: "tertiary" }}
    >
      <Button variant="secondary" size="sm">
        {trigger}
      </Button>
    </Popconfirm>
  );
}
