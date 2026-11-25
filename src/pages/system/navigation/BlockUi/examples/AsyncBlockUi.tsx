import { useState } from "react";
import { BlockUi, Button, Spinner } from "@gem-org/gem-system";
import "./block-ui-demo.css";

const saveChanges = () => new Promise<void>((resolve) => window.setTimeout(resolve, 2000));

type AsyncBlockUiProps = {
  title: string;
  body: string;
  action: string;
  saving: string;
  saved: string;
};

export function AsyncBlockUi({ title, body, action, saving, saved }: AsyncBlockUiProps) {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSave() {
    setPending(true);
    setDone(false);
    try {
      await saveChanges();
      setDone(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="block-panel">
      <p className="block-panel__title">{title}</p>
      <p className="block-panel__body">{body}</p>
      <div className="block-row">
        <Button onClick={handleSave}>{action}</Button>
        {done && <p className="block-status">{saved}</p>}
      </div>
      <BlockUi blocking={pending} aria-label={saving}>
        <Spinner size="2xl" label={saving} labelPlacement="bottom" />
      </BlockUi>
    </div>
  );
}
