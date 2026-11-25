import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Ripple } from "@gem-org/gemffects/ripple";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { RIPPLE_ORIGINS, RIPPLE_TRIGGERS, RIPPLE_VARIANTS } from "./examples/demo.ts";
import "./examples/ripple-demo.css";

const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const DURATION_OPTIONS = ["300", "600", "1200"] as const;

const COLOR_OPTIONS = {
  default: undefined,
  primary: "var(--gem-palette-primary-500)",
  tertiary: "var(--gem-palette-tertiary-400)",
} as const;
const COLOR_KEYS = ["default", "primary", "tertiary"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function RipplePlayground() {
  const { t } = useTranslation("ripple");
  const [variant, setVariant] = useState<(typeof RIPPLE_VARIANTS)[number]>("ink");
  const [trigger, setTrigger] = useState<(typeof RIPPLE_TRIGGERS)[number]>("click");
  const [origin, setOrigin] = useState<(typeof RIPPLE_ORIGINS)[number]>("pointer");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("600");
  const [colorKey, setColorKey] = useState<(typeof COLOR_KEYS)[number]>("default");

  const label = t("playground.label");
  const color = COLOR_OPTIONS[colorKey];

  const attrs = [
    variant !== "ink" && `variant="${variant}"`,
    trigger !== "click" && `trigger="${trigger}"`,
    origin !== "pointer" && `origin="${origin}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    duration !== "600" && `duration={${duration}}`,
    color && `color="${color}"`,
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Ripple\n  ${attrs.join("\n  ")}\n>` : "<Ripple>";
  const code = `import { Ripple } from "@gem-org/gemffects/ripple";

${opening}
  <span className="target">${label}</span>
</Ripple>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: RIPPLE_VARIANTS,
      onChange: pick(RIPPLE_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: RIPPLE_TRIGGERS,
      onChange: pick(RIPPLE_TRIGGERS, setTrigger),
    },
    {
      id: "origin",
      value: origin,
      options: RIPPLE_ORIGINS,
      onChange: pick(RIPPLE_ORIGINS, setOrigin),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "color", value: colorKey, options: COLOR_KEYS, onChange: pick(COLOR_KEYS, setColorKey) },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="ripple-playground">
        {selects.map((select) => (
          <div key={select.id} className="ripple-playground__field">
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

      <DemoBlock code={code} label="Example.tsx">
        <Ripple
          variant={variant}
          trigger={trigger}
          origin={origin}
          intensity={intensity}
          duration={Number(duration)}
          color={color}
          className="rl-demo__host"
        >
          <span className="rl-demo__tile rl-demo__tile--label">{label}</span>
        </Ripple>
      </DemoBlock>
    </DocsSection>
  );
}
