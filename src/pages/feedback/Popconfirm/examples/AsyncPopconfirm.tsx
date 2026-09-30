import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import { wait, type PopconfirmCommon } from "./demo.ts";

type AsyncPopconfirmProps = {
  common: PopconfirmCommon;
  trigger: string;
  title: string;
  description: string;
  confirm: string;
  done: string;
};

export function AsyncPopconfirm({ common, trigger, title, description, confirm, done }: AsyncPopconfirmProps) {
  return (
    <Popconfirm
      title={title}
      description={description}
      confirmLabel={confirm}
      cancelLabel={common.cancel}
      onConfirm={async () => {
        await wait(1200);
        toast.success(done);
      }}
    >
      <Button variant="danger" size="sm">
        {trigger}
      </Button>
    </Popconfirm>
  );
}
