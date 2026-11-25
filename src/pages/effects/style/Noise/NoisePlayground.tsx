import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Noise } from "@gem-org/gemffects/noise";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { NoiseCard, NoiseTile } from "./examples/NoiseTile.tsx";
import { NOISE_TRIGGERS, NOISE_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["800", "2400", "6000"] as const;
const SURFACE_OPTIONS = ["gradient", "dark", "mid", "light"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function NoisePlayground() {
  const { t } = useTranslation("noise");
  const [variant, setVariant] = useState<(typeof NOISE_VARIANTS)[number]>("grain");
  const [trigger, setTrigger] = useState<(typeof NOISE_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("2400");
  const [surface, setSurface] = useState<(typeof SURFACE_OPTIONS)[number]>("gradient");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const title = t("playground.cardTitle");

  const attrs = [
    variant !== "grain" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "2400" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Noise\n  ${attrs.join("\n  ")}\n>` : "<Noise>";
  const code = `import { Noise } from "@gem-org/gemffects/noise";

${opening}
  <div className="card">${title}</div>
</Noise>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: NOISE_VARIANTS,
      onChange: pick(NOISE_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: NOISE_TRIGGERS,
      onChange: pick(NOISE_TRIGGERS, setTrigger),
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
      id: "isPaused",
      value: isPaused,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsPaused),
    },
    {
      id: "isDisabled",
      value: isDisabled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsDisabled),
    },
    {
      id: "surface",
      label: t("playground.surface"),
      value: surface,
      options: SURFACE_OPTIONS,
      onChange: pick(SURFACE_OPTIONS, setSurface),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="noise-playground">
        {selects.map((select) => (
          <div key={select.id} className="noise-playground__field">
            <Typography variant="label">{select.label ?? select.id}</Typography>
            <Select
              aria-label={select.label ?? select.id}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <NoiseTile>
          <Noise
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="noise-demo__host"
          >
            <NoiseCard tone={surface}>{title}</NoiseCard>
          </Noise>
        </NoiseTile>
      </DemoBlock>
    </DocsSection>
  );
}
