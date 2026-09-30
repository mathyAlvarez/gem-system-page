import { Button, Popconfirm } from "@gem-org/gem-system";
import { Bell } from "@gem-org/gem-system/icons";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

type IconPopconfirmProps = {
  common: PopconfirmCommon;
  customTrigger: string;
  customTitle: string;
  hiddenTrigger: string;
  hiddenTitle: string;
};

export function IconPopconfirm({ common, customTrigger, customTitle, hiddenTrigger, hiddenTitle }: IconPopconfirmProps) {
  return (
    <div className="popconfirm-row">
      <Popconfirm
        tone="primary"
        icon={<Bell size="md" strokeWidth={2} />}
        title={customTitle}
        confirmLabel={common.confirm}
        cancelLabel={common.cancel}
      >
        <Button variant="secondary" size="sm">
          {customTrigger}
        </Button>
      </Popconfirm>
      <Popconfirm hideIcon tone="warning" title={hiddenTitle} confirmLabel={common.confirm} cancelLabel={common.cancel}>
        <Button variant="secondary" size="sm">
          {hiddenTrigger}
        </Button>
      </Popconfirm>
    </div>
  );
}
