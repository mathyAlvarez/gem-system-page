import { useState } from "react";
import { Alert, Button } from "@gem-org/gem-system";
import type { AlertCopy } from "./demo.ts";
import "./alert-demo.css";

type Result = "success" | "error";

type LiveAlertProps = { copy: AlertCopy; save: string; fail: string; closeLabel: string };

export function LiveAlert({ copy, save, fail, closeLabel }: LiveAlertProps) {
  const [result, setResult] = useState<Result | null>(null);
  const [attempt, setAttempt] = useState(0);

  function submit(next: Result) {
    setResult(next);
    setAttempt((value) => value + 1);
  }

  return (
    <div className="alert-stack">
      <div className="alert-row">
        <Button size="sm" onClick={() => submit("success")}>
          {save}
        </Button>
        <Button variant="secondary" size="sm" onClick={() => submit("error")}>
          {fail}
        </Button>
      </div>
      {result ? (
        <Alert
          key={attempt}
          status={result}
          title={copy[result].title}
          isClosable
          closeAriaLabel={closeLabel}
          onClose={() => setResult(null)}
        >
          {copy[result].description}
        </Alert>
      ) : null}
    </div>
  );
}
