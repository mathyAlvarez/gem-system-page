import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { BeamTile } from "./examples/BeamTile.tsx";
import { BEAM_COLORS, BEAM_TRIGGERS, BEAM_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const DURATION_OPTIONS = ["1800", "3600", "7200"] as const;
const THICKNESS_OPTIONS = ["1", "2", "4"] as const;
const LENGTH_OPTIONS = ["auto", "8", "30", "60"] as const;
const COLOR_OPTIONS = ["default", "secondary", "tertiary"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function BorderBeamPlayground() {
  const { t } = useTranslation("borderBeam");
  const [variant, setVariant] = useState<(typeof BEAM_VARIANTS)[number]>("orbit");
  const [trigger, setTrigger] = useState<(typeof BEAM_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("3600");
  const [thickness, setThickness] = useState<(typeof THICKNESS_OPTIONS)[number]>("2");
  const [length, setLength] = useState<(typeof LENGTH_OPTIONS)[number]>("auto");
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>("default");
  const [reverse, setReverse] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const lengthValue = length === "auto" ? undefined : Number(length);
  const colorValue = color === "default" ? undefined : BEAM_COLORS[color];

  const attrs = [
    variant !== "orbit" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    duration !== "3600" && `duration={${duration}}`,
    thickness !== "2" && `thickness={${thickness}}`,
    lengthValue !== undefined && `length={${lengthValue}}`,
    colorValue && `color="${colorValue}"`,
    reverse === "true" && "reverse",
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<BorderBeam\n  ${attrs.join("\n  ")}\n>` : "<BorderBeam>";
  const code = `import { BorderBeam } from "@gem-org/gemffects/border-beam";

${opening}
  <span>${t("playground.target")}</span>
</BorderBeam>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: BEAM_VARIANTS,
      onChange: pick(BEAM_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: BEAM_TRIGGERS,
      onChange: pick(BEAM_TRIGGERS, setTrigger),
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
      id: "thickness",
      value: thickness,
      options: THICKNESS_OPTIONS,
      onChange: pick(THICKNESS_OPTIONS, setThickness),
    },
    {
      id: "length",
      value: length,
      options: LENGTH_OPTIONS,
      onChange: pick(LENGTH_OPTIONS, setLength),
    },
    { id: "color", value: color, options: COLOR_OPTIONS, onChange: pick(COLOR_OPTIONS, setColor) },
    {
      id: "reverse",
      value: reverse,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setReverse),
    },
    {
      id: "isPaused",
      value: isPaused,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setIsPaused),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="border-beam-playground">
        {selects.map((select) => (
          <div key={select.id} className="border-beam-playground__field">
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
        <BeamTile>
          <BorderBeam
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            duration={Number(duration)}
            thickness={Number(thickness)}
            length={lengthValue}
            color={colorValue}
            reverse={reverse === "true"}
            isPaused={isPaused === "true"}
            className="border-beam-demo__host"
          >
            <span className="border-beam-demo__target">{t("playground.target")}</span>
          </BorderBeam>
        </BeamTile>
      </DemoBlock>
    </DocsSection>
  );
}
