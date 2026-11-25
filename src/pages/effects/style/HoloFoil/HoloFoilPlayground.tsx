import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FoilCard, FoilTile } from "./examples/FoilTile.tsx";
import { FOIL_BLENDS, FOIL_TRIGGERS, FOIL_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const BLEND_OPTIONS = ["auto", ...FOIL_BLENDS] as const;
const DURATION_OPTIONS = ["2000", "4200", "8000"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function HoloFoilPlayground() {
  const { t } = useTranslation("holoFoil");
  const [variant, setVariant] = useState<(typeof FOIL_VARIANTS)[number]>("rainbow");
  const [blend, setBlend] = useState<(typeof BLEND_OPTIONS)[number]>("auto");
  const [trigger, setTrigger] = useState<(typeof FOIL_TRIGGERS)[number]>("hover");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("4200");
  const [shine, setShine] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [sparkle, setSparkle] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const blendValue = blend === "auto" ? undefined : blend;
  const title = t("playground.cardTitle");

  const attrs = [
    variant !== "rainbow" && `variant="${variant}"`,
    blendValue && `blend="${blendValue}"`,
    trigger !== "hover" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "4200" && `duration={${duration}}`,
    shine === "false" && "shine={false}",
    sparkle === "false" && "sparkle={false}",
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<HoloFoil\n  ${attrs.join("\n  ")}\n>` : "<HoloFoil>";
  const code = `import { HoloFoil } from "@gem-org/gemffects/holo-foil";

${opening}
  <div className="card">${title}</div>
</HoloFoil>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: FOIL_VARIANTS,
      onChange: pick(FOIL_VARIANTS, setVariant),
    },
    { id: "blend", value: blend, options: BLEND_OPTIONS, onChange: pick(BLEND_OPTIONS, setBlend) },
    {
      id: "trigger",
      value: trigger,
      options: FOIL_TRIGGERS,
      onChange: pick(FOIL_TRIGGERS, setTrigger),
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
      id: "shine",
      value: shine,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setShine),
    },
    {
      id: "sparkle",
      value: sparkle,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setSparkle),
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
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="holofoil-playground">
        {selects.map((select) => (
          <div key={select.id} className="holofoil-playground__field">
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
        <FoilTile>
          <HoloFoil
            variant={variant}
            blend={blendValue}
            trigger={trigger}
            intensity={intensityValue}
            duration={Number(duration)}
            shine={shine === "true"}
            sparkle={sparkle === "true"}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="foil-demo__host"
          >
            <FoilCard title={title} />
          </HoloFoil>
        </FoilTile>
      </DemoBlock>
    </DocsSection>
  );
}
