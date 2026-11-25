import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { ViewTransition, supportsViewTransition } from "@gem-org/gemsitions/view-transition";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  VIEW_TRANSITION_DELAYS,
  VIEW_TRANSITION_DURATIONS,
  VIEW_TRANSITION_EASINGS,
  VIEW_TRANSITION_EFFECTS,
  VIEW_TRANSITION_FALLBACKS,
  VIEW_TRANSITION_TABS,
  type ViewTransitionTab,
} from "./examples/demo.ts";
import "./examples/view-transition-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ViewTransitionPlayground() {
  const { t } = useTranslation("viewTransition");
  const [tab, setTab] = useState<ViewTransitionTab>("Inbox");
  const [effect, setEffect] = useState<(typeof VIEW_TRANSITION_EFFECTS)[number]>("fade");
  const [fallback, setFallback] = useState<(typeof VIEW_TRANSITION_FALLBACKS)[number]>("fade");
  const [duration, setDuration] = useState<(typeof VIEW_TRANSITION_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof VIEW_TRANSITION_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof VIEW_TRANSITION_EASINGS)[number]>("standard");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [skipInitial, setSkipInitial] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [includeRoot, setIncludeRoot] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const copies = t("playground.copies", { returnObjects: true }) as Record<
    ViewTransitionTab,
    string
  >;
  const native = supportsViewTransition();

  const attrs = [
    'name="docs-vt-playground"',
    `viewKey="${tab}"`,
    effect !== "fade" && `effect="${effect}"`,
    fallback !== "fade" && `fallback="${fallback}"`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    isDisabled === "true" && "isDisabled",
    skipInitial === "false" && "skipInitial={false}",
    includeRoot === "true" && "includeRoot",
  ].filter(Boolean);

  const code = `import { ViewTransition } from "@gem-org/gemsitions/view-transition";

<ViewTransition
  ${attrs.join("\n  ")}
>
  …
</ViewTransition>`;

  const selects = [
    {
      id: "effect",
      value: effect,
      options: VIEW_TRANSITION_EFFECTS,
      onChange: pick(VIEW_TRANSITION_EFFECTS, setEffect),
    },
    {
      id: "fallback",
      value: fallback,
      options: VIEW_TRANSITION_FALLBACKS,
      onChange: pick(VIEW_TRANSITION_FALLBACKS, setFallback),
    },
    {
      id: "duration",
      value: duration,
      options: VIEW_TRANSITION_DURATIONS,
      onChange: pick(VIEW_TRANSITION_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: VIEW_TRANSITION_DELAYS,
      onChange: pick(VIEW_TRANSITION_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: VIEW_TRANSITION_EASINGS,
      onChange: pick(VIEW_TRANSITION_EASINGS, setEasing),
    },
    {
      id: "skipInitial",
      value: skipInitial,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setSkipInitial),
    },
    {
      id: "includeRoot",
      value: includeRoot,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIncludeRoot),
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
      <div className="view-transition-playground">
        {selects.map((select) => (
          <div key={select.id} className="view-transition-playground__field">
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
        <div className="view-transition-demo">
          {!native ? <p className="view-transition-demo__badge">{t("playground.noApi")}</p> : null}
          <div className="view-transition-demo__controls">
            {VIEW_TRANSITION_TABS.map((label) => (
              <Button
                key={label}
                size="sm"
                variant="secondary"
                aria-pressed={tab === label}
                onClick={() => setTab(label)}
              >
                {label}
              </Button>
            ))}
          </div>
          <div className="view-transition-demo__clip">
            <ViewTransition
              name="docs-vt-playground"
              viewKey={tab}
              effect={effect}
              fallback={fallback}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              isDisabled={isDisabled === "true"}
              skipInitial={skipInitial === "true"}
              includeRoot={includeRoot === "true"}
            >
              <div
                className={
                  tab === "Sent"
                    ? "view-transition-demo__panel view-transition-demo__panel--tall"
                    : "view-transition-demo__panel"
                }
              >
                {tab}
                <span className="view-transition-demo__copy">{copies[tab]}</span>
              </div>
            </ViewTransition>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
