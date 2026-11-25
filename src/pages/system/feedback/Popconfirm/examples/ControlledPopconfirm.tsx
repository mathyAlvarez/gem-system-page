import { useState } from "react";
import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

type ControlledPopconfirmProps = {
  common: PopconfirmCommon;
  openOutside: string;
  trigger: string;
  title: string;
  confirm: string;
  done: string;
  state: string;
};

export function ControlledPopconfirm({
  common,
  openOutside,
  trigger,
  title,
  confirm,
  done,
  state,
}: ControlledPopconfirmProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="popconfirm-row">
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
        {openOutside}
      </Button>
      <Popconfirm
        open={open}
        onOpenChange={setOpen}
        title={title}
        confirmLabel={confirm}
        cancelLabel={common.cancel}
        onConfirm={() => {
          toast.success(done);
        }}
      >
        <Button variant="danger" size="sm">
          {trigger}
        </Button>
      </Popconfirm>
      <code>
        {state}: {String(open)}
      </code>
    </div>
  );
}
