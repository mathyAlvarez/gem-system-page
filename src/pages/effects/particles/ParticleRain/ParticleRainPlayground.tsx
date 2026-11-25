import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { RAIN_TRIGGERS, RAIN_VARIANTS } from "./examples/demo.ts";
import "./examples/particle-rain-demo.css";

const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const DURATION_OPTIONS = ["900", "1800", "2800"] as const;
const INTERVAL_OPTIONS = ["60", "110", "220"] as const;
const SPAN_OPTIONS = ["auto", "700", "1400", "2400"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function ParticleRainPlayground() {
  const { t } = useTranslation("particleRain");
  const [variant, setVariant] = useState<(typeof RAIN_VARIANTS)[number]>("confetti");
  const [trigger, setTrigger] = useState<(typeof RAIN_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("1800");
  const [waveInterval, setWaveInterval] = useState<(typeof INTERVAL_OPTIONS)[number]>("110");
  const [span, setSpan] = useState<(typeof SPAN_OPTIONS)[number]>("auto");

  const label = t("playground.label");

  const attrs = [
    variant !== "confetti" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    duration !== "1800" && `duration={${duration}}`,
    waveInterval !== "110" && `interval={${waveInterval}}`,
    span !== "auto" && `span={${span}}`,
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<ParticleRain\n  ${attrs.join("\n  ")}\n>` : "<ParticleRain>";
  const code = `import { ParticleRain } from "@gem-org/gemffects/particle-rain";

${opening}
  <p className="copy">${label}</p>
</ParticleRain>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: RAIN_VARIANTS,
      onChange: pick(RAIN_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: RAIN_TRIGGERS,
      onChange: pick(RAIN_TRIGGERS, setTrigger),
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
    {
      id: "interval",
      value: waveInterval,
      options: INTERVAL_OPTIONS,
      onChange: pick(INTERVAL_OPTIONS, setWaveInterval),
    },
    { id: "span", value: span, options: SPAN_OPTIONS, onChange: pick(SPAN_OPTIONS, setSpan) },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="particle-rain-playground">
        {selects.map((select) => (
          <div key={select.id} className="particle-rain-playground__field">
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
        <ParticleRain
          variant={variant}
          trigger={trigger}
          intensity={intensity}
          duration={Number(duration)}
          interval={Number(waveInterval)}
          span={span === "auto" ? undefined : Number(span)}
          className="pr-demo__host"
        >
          <p className="pr-demo__copy">{label}</p>
        </ParticleRain>
      </DemoBlock>
    </DocsSection>
  );
}
