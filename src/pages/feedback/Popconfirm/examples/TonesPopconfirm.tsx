import { Button, Popconfirm } from "@gem-org/gem-system";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

type ToneCopy = { trigger: string; title: string; description: string; confirm: string };

type TonesPopconfirmProps = {
  common: PopconfirmCommon;
  danger: ToneCopy;
  warning: ToneCopy;
  primary: ToneCopy;
};

export function TonesPopconfirm({ common, danger, warning, primary }: TonesPopconfirmProps) {
  const tones = [
    { tone: "danger", copy: danger },
    { tone: "warning", copy: warning },
    { tone: "primary", copy: primary },
  ] as const;

  return (
    <div className="popconfirm-row">
      {tones.map(({ tone, copy }) => (
        <Popconfirm
          key={tone}
          tone={tone}
          title={copy.title}
          description={copy.description}
          confirmLabel={copy.confirm}
          cancelLabel={common.cancel}
        >
          <Button variant={tone} size="sm">
            {copy.trigger}
          </Button>
        </Popconfirm>
      ))}
    </div>
  );
}
