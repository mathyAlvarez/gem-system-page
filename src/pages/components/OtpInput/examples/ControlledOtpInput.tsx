import { useState } from "react";
import { Button, OtpInput, Typography } from "@gem-org/gem-system";

type ControlledOtpInputProps = {
  label: string;
  helperText: string;
  fill: string;
  clear: string;
  valueLabel: string;
  completeLabel: string;
  empty: string;
};

export function ControlledOtpInput({
  label,
  helperText,
  fill,
  clear,
  valueLabel,
  completeLabel,
  empty,
}: ControlledOtpInputProps) {
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState("");

  return (
    <>
      <OtpInput
        label={label}
        length={6}
        value={code}
        onChange={(next) => {
          setCode(next);
          if (next.length < 6) setCompleted("");
        }}
        onComplete={setCompleted}
        helperText={helperText}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <Button size="sm" variant="secondary" onClick={() => setCode("482910")}>
          {fill}
        </Button>
        <Button
          size="sm"
          variant="transparent"
          onClick={() => {
            setCode("");
            setCompleted("");
          }}
        >
          {clear}
        </Button>
      </div>
      <Typography variant="caption" as="p">
        {valueLabel}: {code || empty}
        {completed ? ` · ${completeLabel}: ${completed}` : ""}
      </Typography>
    </>
  );
}
