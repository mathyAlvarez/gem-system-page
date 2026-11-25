import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import { Check } from "@gem-org/gem-system/icons";

type WithoutCancelPopconfirmProps = {
  trigger: string;
  title: string;
  confirm: string;
  done: string;
};

export function WithoutCancelPopconfirm({
  trigger,
  title,
  confirm,
  done,
}: WithoutCancelPopconfirmProps) {
  return (
    <Popconfirm
      tone="primary"
      showCancel={false}
      title={title}
      confirmLabel={confirm}
      onConfirm={() => {
        toast.success(done);
      }}
    >
      <Button size="sm" leftIcon={<Check size="sm" />}>
        {trigger}
      </Button>
    </Popconfirm>
  );
}
