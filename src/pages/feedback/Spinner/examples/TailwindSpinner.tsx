import { Spinner } from "@gem-org/gem-system";
import "./spinner-demo.css";

type TailwindSpinnerProps = { label: string };

export function TailwindSpinner({ label }: TailwindSpinnerProps) {
  return (
    <div className="spinner-row">
      <Spinner
        size="lg"
        label={label}
        className="rounded-full border border-(--gem-color-border) px-4 py-2 [--gem-spinner-color:var(--gem-palette-tertiary-500)] [--gem-spinner-gap:0.75rem]"
        classNames={{
          indicator: "*:[animation-duration:1.8s]",
          label: "font-semibold uppercase tracking-wider text-(--gem-spinner-color)",
        }}
      />
    </div>
  );
}
