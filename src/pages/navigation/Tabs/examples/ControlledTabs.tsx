import { useState } from "react";
import { Button, Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";
import "./tabs-demo.css";

type ControlledTabsProps = { texts: TabsTexts; selected: string; goToSettings: string };

export function ControlledTabs({ texts, selected, goToSettings }: ControlledTabsProps) {
  const [value, setValue] = useState("overview");

  return (
    <div className="tabs-stack">
      <Tabs items={baseItems(texts)} value={value} onChange={setValue} listLabel={texts.listLabel} />
      <div className="tabs-controls">
        <Button size="sm" variant="secondary" onClick={() => setValue("settings")}>
          {goToSettings}
        </Button>
        <span>
          {selected}: <code>{value}</code>
        </span>
      </div>
    </div>
  );
}
