import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import { Trash } from "@gem-org/gem-system/icons";
import type { PopconfirmCommon } from "./demo.ts";

type BasePopconfirmProps = {
  common: PopconfirmCommon;
  trigger: string;
  title: string;
  description: string;
  confirm: string;
  done: string;
};

export function BasePopconfirm({ common, trigger, title, description, confirm, done }: BasePopconfirmProps) {
  return (
    <Popconfirm
      title={title}
      description={description}
      confirmLabel={confirm}
      cancelLabel={common.cancel}
      onConfirm={() => {
        toast.success(done);
      }}
    >
      <Button variant="danger" size="sm" leftIcon={<Trash size="sm" />}>
        {trigger}
      </Button>
    </Popconfirm>
  );
}
