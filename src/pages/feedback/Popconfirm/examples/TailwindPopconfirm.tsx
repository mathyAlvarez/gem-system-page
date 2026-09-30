import { Button, Popconfirm } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";

type TailwindPopconfirmProps = { common: PopconfirmCommon; trigger: string; title: string; description: string };

export function TailwindPopconfirm({ common, trigger, title, description }: TailwindPopconfirmProps) {
  return (
    <Popconfirm
      tone="primary"
      title={title}
      description={description}
      confirmLabel={common.confirm}
      cancelLabel={common.cancel}
      classNames={{
        panel: "rounded-2xl p-4 shadow-xl [--gem-color-border:var(--gem-palette-secondary-300)]",
        icon: "rounded-full bg-(--gem-color-bg-subtle) p-1.5",
        title: "text-base",
        actions: "justify-stretch *:flex-1",
      }}
    >
      <Button variant="secondary" size="sm">
        {trigger}
      </Button>
    </Popconfirm>
  );
}
