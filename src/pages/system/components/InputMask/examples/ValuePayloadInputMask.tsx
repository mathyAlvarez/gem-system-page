import { useState } from "react";
import { InputMask, Typography, type InputMaskValue } from "@gem-org/gem-system";
import { Calendar } from "@gem-org/gem-system/icons";

type ValuePayloadInputMaskProps = {
  label: string;
  helperText: string;
  formatted: string;
  unmasked: string;
  complete: string;
};

export function ValuePayloadInputMask({
  label,
  helperText,
  formatted,
  unmasked,
  complete,
}: ValuePayloadInputMaskProps) {
  const [next, setNext] = useState<InputMaskValue>({
    value: "",
    unmaskedValue: "",
    isComplete: false,
  });

  return (
    <>
      <InputMask
        label={label}
        preset="date"
        prefixIcon={<Calendar size="sm" />}
        helperText={helperText}
        onValueChange={setNext}
      />
      <div>
        <Typography variant="caption" as="p">
          {formatted}: <code>{next.value || "—"}</code>
        </Typography>
        <Typography variant="caption" as="p">
          {unmasked}: <code>{next.unmaskedValue || "—"}</code>
        </Typography>
        <Typography variant="caption" as="p">
          {complete}: <code>{String(next.isComplete)}</code>
        </Typography>
      </div>
    </>
  );
}
