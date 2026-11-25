import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Vortex } from "@gem-org/gemffects/vortex";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { VortexTile } from "./examples/VortexTile.tsx";
import { VORTEX_COLORS, VORTEX_TRIGGERS, VORTEX_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["2000", "4200", "9000"] as const;
const COLOR_OPTIONS = ["default", "secondary", "tertiary", "warning"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function VortexPlayground() {
  const { t } = useTranslation("vortex");
  const [variant, setVariant] = useState<(typeof VORTEX_VARIANTS)[number]>("swirl");
  const [trigger, setTrigger] = useState<(typeof VORTEX_TRIGGERS)[number]>("hover");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("4200");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const colorValue = color === "default" ? undefined : VORTEX_COLORS[color];

  const attrs = [
    variant !== "swirl" && `variant="${variant}"`,
    trigger !== "hover" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "4200" && `duration={${duration}}`,
    colorValue && `color="${colorValue}"`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Vortex\n  ${attrs.join("\n  ")}\n>` : "<Vortex>";
  const code = `import { Vortex } from "@gem-org/gemffects/vortex";

${opening}
  <div className="card">${t("playground.target")}</div>
</Vortex>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: VORTEX_VARIANTS,
      onChange: pick(VORTEX_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: VORTEX_TRIGGERS,
      onChange: pick(VORTEX_TRIGGERS, setTrigger),
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
    { id: "color", value: color, options: COLOR_OPTIONS, onChange: pick(COLOR_OPTIONS, setColor) },
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
      <div className="vortex-playground">
        {selects.map((select) => (
          <div key={select.id} className="vortex-playground__field">
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
        <VortexTile>
          <Vortex
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            duration={Number(duration)}
            color={colorValue}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="vortex-demo__host"
          >
            <div className="vortex-demo__tile vortex-demo__tile--lg">{t("playground.target")}</div>
          </Vortex>
        </VortexTile>
      </DemoBlock>
    </DocsSection>
  );
}
