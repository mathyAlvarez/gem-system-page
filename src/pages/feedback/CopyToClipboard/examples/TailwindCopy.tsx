import { CopyToClipboard } from "@gem-org/gem-system";
import { INSTALL_COMMAND, type CopyLabels } from "./demo.ts";

type TailwindCopyProps = { labels: CopyLabels };

export function TailwindCopy({ labels }: TailwindCopyProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 py-1 pr-1 pl-4 font-mono text-sm text-(--gem-color-fg)">
      {INSTALL_COMMAND}
      <CopyToClipboard
        value={INSTALL_COMMAND}
        size="sm"
        rounded
        {...labels}
        classNames={{
          button: "text-violet-500 hover:bg-violet-500/20",
          icon: "size-3.5",
        }}
      />
    </div>
  );
}
