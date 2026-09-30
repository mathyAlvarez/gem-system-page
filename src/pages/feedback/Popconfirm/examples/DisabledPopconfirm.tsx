import { Button, Popconfirm } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";

type DisabledPopconfirmProps = { common: PopconfirmCommon; trigger: string; title: string };

export function DisabledPopconfirm({ common, trigger, title }: DisabledPopconfirmProps) {
  return (
    <Popconfirm disabled title={title} confirmLabel={common.confirm} cancelLabel={common.cancel}>
      <Button variant="danger" size="sm" disabled>
        {trigger}
      </Button>
    </Popconfirm>
  );
}
