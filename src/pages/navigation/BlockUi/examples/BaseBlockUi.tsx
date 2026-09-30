import { BlockUi, Button } from "@gem-org/gem-system";
import { useTimedBlock, type BlockUiTexts } from "./demo.ts";
import "./block-ui-demo.css";

type BaseBlockUiProps = { texts: BlockUiTexts };

export function BaseBlockUi({ texts }: BaseBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();

  return (
    <div className="block-panel">
      <p className="block-panel__title">{texts.title}</p>
      <p className="block-panel__body">{texts.body}</p>
      <div className="block-row">
        <Button onClick={() => blockFor()}>{texts.block}</Button>
      </div>
      <BlockUi blocking={blocking} aria-label={texts.loading} />
    </div>
  );
}
