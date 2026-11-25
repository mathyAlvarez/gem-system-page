import { Divider } from "@gem-org/gem-system";
import "./divider-demo.css";

type TailwindDividerProps = { label: string };

export function TailwindDivider({ label }: TailwindDividerProps) {
  return (
    <div className="divider-demo">
      <Divider className="my-2 rounded-full [--gem-divider-color:var(--gem-palette-tertiary-500)] [--gem-divider-thickness:3px]" />
      <Divider
        tone="secondary"
        className="[--gem-divider-gap:var(--gem-space-5)]"
        classNames={{
          line: "rounded-full bg-transparent bg-linear-to-r from-transparent to-(--gem-divider-color) last:bg-linear-to-l",
          label: "uppercase tracking-widest",
        }}
      >
        {label}
      </Divider>
    </div>
  );
}
