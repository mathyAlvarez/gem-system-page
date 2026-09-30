import { BlockUi, Button, Spinner, type BlockUiProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { useTimedBlock, type BlockUiTexts } from "./demo.ts";
import "./block-ui-demo.css";

function GlassBlockUi({ classNames, ...props }: BlockUiProps) {
  return (
    <BlockUi
      classNames={{
        ...classNames,
        root: cn("backdrop-blur-sm", classNames?.root),
        content: cn(
          "rounded-xl border border-(--gem-color-border) bg-(--gem-color-bg) px-8 py-6 shadow-lg",
          classNames?.content,
        ),
      }}
      {...props}
    />
  );
}

type TailwindBlockUiProps = { texts: BlockUiTexts };

export function TailwindBlockUi({ texts }: TailwindBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();

  return (
    <div className="block-panel">
      <p className="block-panel__title">{texts.title}</p>
      <p className="block-panel__body">{texts.body}</p>
      <div className="block-row">
        <Button onClick={() => blockFor()}>{texts.block}</Button>
      </div>
      <GlassBlockUi blocking={blocking} opacity={30} aria-label={texts.loading}>
        <Spinner size="xl" label={texts.loading} />
      </GlassBlockUi>
    </div>
  );
}
