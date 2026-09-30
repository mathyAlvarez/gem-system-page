import { useState } from "react";
import { Button, Toast } from "@gem-org/gem-system";
import type { ToastCommon } from "./demo.ts";
import "./toast-demo.css";

type AutoCloseToastProps = {
  common: ToastCommon;
  again: string;
  infiniteTitle: string;
  infiniteText: string;
  hiddenTitle: string;
  hiddenText: string;
};

export function AutoCloseToast({ common, again, infiniteTitle, infiniteText, hiddenTitle, hiddenText }: AutoCloseToastProps) {
  const [countdown, setCountdown] = useState(true);
  const [infinite, setInfinite] = useState(true);
  const [hidden, setHidden] = useState(true);

  const reopen = () => {
    setCountdown(true);
    setInfinite(true);
    setHidden(true);
  };

  return (
    <div className="toast-stack">
      <div>
        <Button variant="secondary" size="sm" onClick={reopen}>
          {again}
        </Button>
      </div>
      <Toast
        status="success"
        autoClose={6000}
        open={countdown}
        onOpenChange={setCountdown}
        title={common.copy.success.title}
        closeAriaLabel={common.closeLabel}
      >
        {common.copy.success.description}
      </Toast>
      <Toast
        autoClose={Number.POSITIVE_INFINITY}
        open={infinite}
        onOpenChange={setInfinite}
        title={infiniteTitle}
        closeAriaLabel={common.closeLabel}
      >
        {infiniteText}
      </Toast>
      <Toast
        status="success"
        autoClose={6000}
        showProgress={false}
        open={hidden}
        onOpenChange={setHidden}
        title={hiddenTitle}
        closeAriaLabel={common.closeLabel}
      >
        {hiddenText}
      </Toast>
    </div>
  );
}
