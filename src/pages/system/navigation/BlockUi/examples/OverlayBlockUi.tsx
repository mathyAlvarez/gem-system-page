import { useState } from "react";
import { BlockUi, Button } from "@gem-org/gem-system";
import { useTimedBlock } from "./demo.ts";
import "./block-ui-demo.css";

const overlays = [
  { id: "primary", overlay: "var(--gem-color-primary-600)", opacity: 22 },
  { id: "dark", overlay: "var(--gem-palette-neutral-900)", opacity: 70 },
  {
    id: "gradient",
    overlay: "linear-gradient(135deg, var(--gem-color-primary-600), var(--gem-color-tertiary-600))",
    opacity: 40,
  },
] as const;

type OverlayId = (typeof overlays)[number]["id"];

type OverlayBlockUiProps = {
  loading: string;
  title: string;
  body: string;
  labels: Record<OverlayId, string>;
};

export function OverlayBlockUi({ loading, title, body, labels }: OverlayBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();
  const [current, setCurrent] = useState<(typeof overlays)[number]>(overlays[0]);

  return (
    <div className="block-panel">
      <p className="block-panel__title">{title}</p>
      <p className="block-panel__body">{body}</p>
      <div className="block-row">
        {overlays.map((item) => (
          <Button
            key={item.id}
            variant="secondary"
            size="sm"
            onClick={() => {
              setCurrent(item);
              blockFor();
            }}
          >
            {labels[item.id]}
          </Button>
        ))}
      </div>
      <BlockUi
        blocking={blocking}
        overlay={current.overlay}
        opacity={current.opacity}
        aria-label={loading}
      />
    </div>
  );
}
