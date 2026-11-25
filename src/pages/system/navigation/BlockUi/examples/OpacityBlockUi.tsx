import { useState } from "react";
import { BlockUi, Button, Spinner } from "@gem-org/gem-system";
import { useTimedBlock } from "./demo.ts";
import "./block-ui-demo.css";

const samples = [20, 40, 56, 80, 100] as const;

type OpacityBlockUiProps = {
  title: string;
  body: string;
  defaultLabel: string;
  label: string;
};

export function OpacityBlockUi({ title, body, defaultLabel, label }: OpacityBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();
  const [opacity, setOpacity] = useState(56);

  return (
    <div className="block-panel">
      <p className="block-panel__title">{title}</p>
      <p className="block-panel__body">{body}</p>
      <div className="block-row">
        {samples.map((value) => (
          <Button
            key={value}
            variant={value === 56 ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setOpacity(value);
              blockFor();
            }}
          >
            {value === 56 ? `56 ${defaultLabel}` : value}
          </Button>
        ))}
      </div>
      <BlockUi blocking={blocking} opacity={opacity} aria-label={`${label} ${opacity}`}>
        <Spinner size="2xl" label={`${label} ${opacity}`} labelPlacement="bottom" />
      </BlockUi>
    </div>
  );
}
