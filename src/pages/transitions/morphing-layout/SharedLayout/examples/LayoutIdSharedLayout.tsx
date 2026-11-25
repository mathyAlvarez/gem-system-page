import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type LayoutIdSharedLayoutProps = {
  groupLabel: string;
  rail: string;
  stage: string;
  tile: string;
  detailTitle: string;
  detailBody: string;
  railEmpty: string;
  stageEmpty: string;
};

/**
 * Overlap the outgoing host for one frame so `layoutId` can read its live rect.
 * Swapping with a single commit (and React Strict Mode remounts) drops the
 * registry snapshot and the FLIP collapses to appear/disappear.
 */
export function LayoutIdSharedLayout({
  groupLabel,
  rail,
  stage,
  tile,
  detailTitle,
  detailBody,
  railEmpty,
  stageEmpty,
}: LayoutIdSharedLayoutProps) {
  const [mode, setMode] = useState<"rail" | "stage">("rail");
  const [railMounted, setRailMounted] = useState(true);
  const [stageMounted, setStageMounted] = useState(false);

  const showRail = () => {
    setMode("rail");
    setRailMounted(true);
    requestAnimationFrame(() => setStageMounted(false));
  };

  const showStage = () => {
    setMode("stage");
    setStageMounted(true);
    requestAnimationFrame(() => setRailMounted(false));
  };

  return (
    <div className="shared-layout-demo shared-layout-demo--wide">
      <div className="shared-layout-demo__controls" role="group" aria-label={groupLabel}>
        <Button
          size="sm"
          variant={mode === "rail" ? "primary" : "secondary"}
          aria-pressed={mode === "rail"}
          onClick={showRail}
        >
          {rail}
        </Button>
        <Button
          size="sm"
          variant={mode === "stage" ? "primary" : "secondary"}
          aria-pressed={mode === "stage"}
          onClick={showStage}
        >
          {stage}
        </Button>
      </div>
      <div className="shared-layout-demo__handoff">
        <div
          className="shared-layout-demo__rail"
          data-active={mode === "rail" ? "true" : "false"}
          aria-hidden={mode !== "rail"}
        >
          {railMounted ? (
            <SharedLayout
              layoutId="gemst-docs-shared-card"
              isExpanded={false}
              duration={400}
              collapsed={<div className="shared-layout-demo__tile">{tile}</div>}
            />
          ) : (
            <p className="shared-layout-demo__placeholder">{railEmpty}</p>
          )}
        </div>
        <div
          className="shared-layout-demo__stage shared-layout-demo__stage--handoff"
          data-active={mode === "stage" ? "true" : "false"}
          aria-hidden={mode !== "stage"}
        >
          {stageMounted ? (
            <SharedLayout
              layoutId="gemst-docs-shared-card"
              isExpanded
              duration={400}
              expanded={
                <div className="shared-layout-demo__detail">
                  <strong>{detailTitle}</strong>
                  <p>{detailBody}</p>
                </div>
              }
            />
          ) : (
            <p className="shared-layout-demo__placeholder">{stageEmpty}</p>
          )}
        </div>
      </div>
    </div>
  );
}
