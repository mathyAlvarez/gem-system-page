import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type CrossfadeSharedLayoutProps = {
  expand: string;
  collapse: string;
  withFade: string;
  withoutFade: string;
  withFadeTitle: string;
  withFadeBody: string;
  withoutFadeTitle: string;
  withoutFadeBody: string;
};

export function CrossfadeSharedLayout({
  expand,
  collapse,
  withFade,
  withoutFade,
  withFadeTitle,
  withFadeBody,
  withoutFadeTitle,
  withoutFadeBody,
}: CrossfadeSharedLayoutProps) {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="shared-layout-demo shared-layout-demo--wide">
      <div className="shared-layout-demo__compare">
        <div className="shared-layout-demo__compare-col">
          <p className="shared-layout-demo__compare-label">{withFade}</p>
          <div className="shared-layout-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={leftOpen}
              onClick={() => setLeftOpen((value) => !value)}
            >
              {leftOpen ? collapse : expand}
            </Button>
          </div>
          <div className="shared-layout-demo__stage shared-layout-demo__stage--compact">
            <SharedLayout
              crossfade
              duration={480}
              isExpanded={leftOpen}
              collapsed={<div className="shared-layout-demo__tile">{withFadeTitle}</div>}
              expanded={
                <div className="shared-layout-demo__detail">
                  <strong>{withFadeTitle}</strong>
                  <p>{withFadeBody}</p>
                </div>
              }
            />
          </div>
        </div>
        <div className="shared-layout-demo__compare-col">
          <p className="shared-layout-demo__compare-label">{withoutFade}</p>
          <div className="shared-layout-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={rightOpen}
              onClick={() => setRightOpen((value) => !value)}
            >
              {rightOpen ? collapse : expand}
            </Button>
          </div>
          <div className="shared-layout-demo__stage shared-layout-demo__stage--compact">
            <SharedLayout
              crossfade={false}
              duration={480}
              isExpanded={rightOpen}
              collapsed={<div className="shared-layout-demo__tile">{withoutFadeTitle}</div>}
              expanded={
                <div className="shared-layout-demo__detail">
                  <strong>{withoutFadeTitle}</strong>
                  <p>{withoutFadeBody}</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
