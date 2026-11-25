import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  SHARED_LAYOUT_DELAYS,
  SHARED_LAYOUT_DURATIONS,
  SHARED_LAYOUT_EASINGS,
} from "./examples/demo.ts";
import "./examples/shared-layout-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function SharedLayoutPlayground() {
  const { t } = useTranslation("sharedLayout");
  const [isExpanded, setIsExpanded] = useState(false);
  const [crossfade, setCrossfade] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [duration, setDuration] = useState<(typeof SHARED_LAYOUT_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof SHARED_LAYOUT_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof SHARED_LAYOUT_EASINGS)[number]>("emphasized");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `isExpanded={${isExpanded}}`,
    crossfade === "false" && "crossfade={false}",
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "emphasized" && `easing="${easing}"`,
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { SharedLayout } from "@gem-org/gemsitions/shared-layout";

<SharedLayout
  ${attrs.join("\n  ")}
  collapsed={…}
  expanded={…}
/>`;

  const selects = [
    {
      id: "crossfade",
      value: crossfade,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setCrossfade),
    },
    {
      id: "duration",
      value: duration,
      options: SHARED_LAYOUT_DURATIONS,
      onChange: pick(SHARED_LAYOUT_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: SHARED_LAYOUT_DELAYS,
      onChange: pick(SHARED_LAYOUT_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: SHARED_LAYOUT_EASINGS,
      onChange: pick(SHARED_LAYOUT_EASINGS, setEasing),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="shared-layout-playground">
        {selects.map((select) => (
          <div key={select.id} className="shared-layout-playground__field">
            <Typography variant="label">{select.id}</Typography>
            <Select
              aria-label={select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <div className="shared-layout-demo">
          <div className="shared-layout-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={isExpanded}
              onClick={() => setIsExpanded((value) => !value)}
            >
              {isExpanded ? t("playground.collapse") : t("playground.expand")}
            </Button>
          </div>
          <div className="shared-layout-demo__stage">
            <SharedLayout
              isExpanded={isExpanded}
              crossfade={crossfade === "true"}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              isDisabled={isDisabled === "true"}
              collapsed={<div className="shared-layout-demo__tile">{t("playground.tile")}</div>}
              expanded={
                <div className="shared-layout-demo__detail">
                  <strong>{t("playground.detailTitle")}</strong>
                  <p>{t("playground.detailBody")}</p>
                </div>
              }
            />
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
