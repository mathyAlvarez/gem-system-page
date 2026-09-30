import { BlockUi, Button, Spinner } from "@gem-org/gem-system";
import { useTimedBlock } from "./demo.ts";
import "./block-ui-demo.css";

type ContentBlockUiProps = {
  title: string;
  body: string;
  action: string;
  label: string;
};

export function ContentBlockUi({ title, body, action, label }: ContentBlockUiProps) {
  const { blocking, blockFor } = useTimedBlock();

  return (
    <div className="block-panel">
      <p className="block-panel__title">{title}</p>
      <p className="block-panel__body">{body}</p>
      <div className="block-row">
        <Button onClick={() => blockFor()}>{action}</Button>
      </div>
      <BlockUi blocking={blocking} aria-label={label}>
        <Spinner size="2xl" label={label} labelPlacement="bottom" />
      </BlockUi>
    </div>
  );
}
