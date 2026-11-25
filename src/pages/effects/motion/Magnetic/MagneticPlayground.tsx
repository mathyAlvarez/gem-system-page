import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Magnetic } from "@gem-org/gemffects/magnetic";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { MagneticTile } from "./examples/MagneticTile.tsx";
import { MAGNETIC_AXES, MAGNETIC_TRIGGERS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const STRENGTH_OPTIONS = ["auto", "0.15", "0.5", "0.8"] as const;
const MAX_OFFSET_OPTIONS = ["auto", "8", "24", "48"] as const;
const RADIUS_OPTIONS = ["0", "40", "96"] as const;
const DURATION_OPTIONS = ["120", "280", "600"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function MagneticPlayground() {
  const { t } = useTranslation("magnetic");
  const [trigger, setTrigger] = useState<(typeof MAGNETIC_TRIGGERS)[number]>("hover");
  const [axis, setAxis] = useState<(typeof MAGNETIC_AXES)[number]>("both");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [strength, setStrength] = useState<(typeof STRENGTH_OPTIONS)[number]>("auto");
  const [maxOffset, setMaxOffset] = useState<(typeof MAX_OFFSET_OPTIONS)[number]>("auto");
  const [radius, setRadius] = useState<(typeof RADIUS_OPTIONS)[number]>("0");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("280");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const strengthValue = strength === "auto" ? undefined : Number(strength);
  const maxOffsetValue = maxOffset === "auto" ? undefined : Number(maxOffset);

  const attrs = [
    trigger !== "hover" && `trigger="${trigger}"`,
    axis !== "both" && `axis="${axis}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    strengthValue !== undefined && `strength={${strengthValue}}`,
    maxOffsetValue !== undefined && `maxOffset={${maxOffsetValue}}`,
    radius !== "0" && `radius={${radius}}`,
    duration !== "280" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Magnetic\n  ${attrs.join("\n  ")}\n>` : "<Magnetic>";
  const code = `import { Magnetic } from "@gem-org/gemffects/magnetic";

${opening}
  <span>${t("playground.target")}</span>
</Magnetic>`;

  const selects = [
    {
      id: "trigger",
      value: trigger,
      options: MAGNETIC_TRIGGERS,
      onChange: pick(MAGNETIC_TRIGGERS, setTrigger),
    },
    { id: "axis", value: axis, options: MAGNETIC_AXES, onChange: pick(MAGNETIC_AXES, setAxis) },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "strength",
      value: strength,
      options: STRENGTH_OPTIONS,
      onChange: pick(STRENGTH_OPTIONS, setStrength),
    },
    {
      id: "maxOffset",
      value: maxOffset,
      options: MAX_OFFSET_OPTIONS,
      onChange: pick(MAX_OFFSET_OPTIONS, setMaxOffset),
    },
    {
      id: "radius",
      value: radius,
      options: RADIUS_OPTIONS,
      onChange: pick(RADIUS_OPTIONS, setRadius),
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
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="magnetic-playground">
        {selects.map((select) => (
          <div key={select.id} className="magnetic-playground__field">
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
        <MagneticTile field>
          <Magnetic
            trigger={trigger}
            axis={axis}
            intensity={intensityValue}
            strength={strengthValue}
            maxOffset={maxOffsetValue}
            radius={Number(radius)}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="magnetic-demo__host"
          >
            <span className="magnetic-demo__target">{t("playground.target")}</span>
          </Magnetic>
        </MagneticTile>
      </DemoBlock>
    </DocsSection>
  );
}
