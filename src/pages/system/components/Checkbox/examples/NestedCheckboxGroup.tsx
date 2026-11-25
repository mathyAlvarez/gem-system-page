import { useState } from "react";
import { Checkbox } from "@gem-org/gem-system";

type NestedCheckboxGroupProps = {
  labels: { all: string; email: string; sms: string; push: string };
};

export function NestedCheckboxGroup({ labels }: NestedCheckboxGroupProps) {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(true);

  const selected = [email, sms, push].filter(Boolean).length;
  const allSelected = selected === 3;

  const setAll = (checked: boolean) => {
    setEmail(checked);
    setSms(checked);
    setPush(checked);
  };

  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        label={labels.all}
        checked={allSelected}
        indeterminate={!allSelected && selected > 0}
        onChange={(event) => setAll(event.target.checked)}
      />
      <div className="flex flex-col gap-2 pl-6">
        <Checkbox
          label={labels.email}
          checked={email}
          onChange={(event) => setEmail(event.target.checked)}
        />
        <Checkbox
          label={labels.sms}
          checked={sms}
          onChange={(event) => setSms(event.target.checked)}
        />
        <Checkbox
          label={labels.push}
          checked={push}
          onChange={(event) => setPush(event.target.checked)}
        />
      </div>
    </div>
  );
}
