import { BlockUi, Button } from "@gem-org/gem-system";
import { useTimedBlock, type BlockUiTexts } from "./demo.ts";
import "./block-ui-demo.css";
import "./block-ui-overrides.css";

type StyledBlockUiProps = { texts: BlockUiTexts };

export function StyledBlockUi({ texts }: StyledBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();

  return (
    <div className="block-panel">
      <p className="block-panel__title">{texts.title}</p>
      <div className="block-row">
        <Button onClick={() => blockFor()}>{texts.block}</Button>
      </div>
      <BlockUi blocking={blocking} className="overlay-themed" opacity={80} aria-label={texts.loading} />
    </div>
  );
}
