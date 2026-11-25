import { useState } from "react";
import { Button, Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  COLLAPSE_DELAYS,
  COLLAPSE_DIMENSIONS,
  COLLAPSE_DURATIONS,
  COLLAPSE_EASINGS,
  COLLAPSE_SIZES,
} from "./examples/demo.ts";
import "./examples/collapse-transition-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

const parseCollapsedSize = (value: string): number | string => {
  if (/^\d+$/.test(value)) return Number(value);
  return value;
};

export function CollapseTransitionPlayground() {
  const { t } = useTranslation("collapseTransition");
  const [isIn, setIsIn] = useState(true);
  const [dimension, setDimension] = useState<(typeof COLLAPSE_DIMENSIONS)[number]>("height");
  const [collapsedSize, setCollapsedSize] = useState<(typeof COLLAPSE_SIZES)[number]>("0");
  const [duration, setDuration] = useState<(typeof COLLAPSE_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof COLLAPSE_DELAYS)[number]>("0");
  const [easing, setEasing] = useState<(typeof COLLAPSE_EASINGS)[number]>("standard");
  const [preserveSpace, setPreserveSpace] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [keepMounted, setKeepMounted] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const sizeValue = parseCollapsedSize(collapsedSize);
  const sizeAttr =
    typeof sizeValue === "number" ? `collapsedSize={${sizeValue}}` : `collapsedSize="${sizeValue}"`;

  const attrs = [
    `isIn={${isIn}}`,
    dimension !== "height" && `dimension="${dimension}"`,
    collapsedSize !== "0" && sizeAttr,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    easing !== "standard" && `easing="${easing}"`,
    preserveSpace === "true" && "preserveSpace",
    keepMounted === "true" && "keepMounted",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";

<CollapseTransition
  ${attrs.join("\n  ")}
>
  …
</CollapseTransition>`;

  const selects = [
    {
      id: "dimension",
      value: dimension,
      options: COLLAPSE_DIMENSIONS,
      onChange: pick(COLLAPSE_DIMENSIONS, setDimension),
    },
    {
      id: "collapsedSize",
      value: collapsedSize,
      options: COLLAPSE_SIZES,
      onChange: pick(COLLAPSE_SIZES, setCollapsedSize),
    },
    {
      id: "duration",
      value: duration,
      options: COLLAPSE_DURATIONS,
      onChange: pick(COLLAPSE_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: COLLAPSE_DELAYS,
      onChange: pick(COLLAPSE_DELAYS, setDelay),
    },
    {
      id: "easing",
      value: easing,
      options: COLLAPSE_EASINGS,
      onChange: pick(COLLAPSE_EASINGS, setEasing),
    },
    {
      id: "preserveSpace",
      value: preserveSpace,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setPreserveSpace),
    },
    {
      id: "keepMounted",
      value: keepMounted,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setKeepMounted),
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
      <div className="collapse-transition-playground">
        {selects.map((select) => (
          <div key={select.id} className="collapse-transition-playground__field">
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
        <div className="collapse-demo">
          <div className="collapse-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={isIn}
              onClick={() => setIsIn((value) => !value)}
            >
              {isIn ? t("playground.collapse") : t("playground.expand")}
            </Button>
          </div>
          <div className="collapse-demo__accordion">
            <button
              type="button"
              className="collapse-demo__trigger"
              aria-expanded={isIn}
              onClick={() => setIsIn((value) => !value)}
            >
              {t("playground.titleLabel")}
              <span aria-hidden="true">{isIn ? "−" : "+"}</span>
            </button>
            <CollapseTransition
              isIn={isIn}
              dimension={dimension}
              collapsedSize={sizeValue}
              duration={Number(duration)}
              delay={Number(delay)}
              easing={easing}
              preserveSpace={preserveSpace === "true"}
              keepMounted={keepMounted === "true"}
              isDisabled={isDisabled === "true"}
            >
              <div className="collapse-demo__panel">{t("playground.panel")}</div>
            </CollapseTransition>
          </div>
          <p className="collapse-demo__sibling">{t("playground.sibling")}</p>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
