import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { BorderTarget, BorderTile } from "./examples/BorderTile.tsx";
import { BORDER_TRIGGERS, BORDER_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const THICKNESS_OPTIONS = ["1", "2", "4"] as const;
const ANGLE_OPTIONS = ["0", "120", "240"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const DURATION_OPTIONS = ["1500", "4000", "10000"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GradientBorderPlayground() {
  const { t } = useTranslation("gradientBorder");
  const [variant, setVariant] = useState<(typeof BORDER_VARIANTS)[number]>("flow");
  const [trigger, setTrigger] = useState<(typeof BORDER_TRIGGERS)[number]>("always");
  const [thickness, setThickness] = useState<(typeof THICKNESS_OPTIONS)[number]>("2");
  const [angle, setAngle] = useState<(typeof ANGLE_OPTIONS)[number]>("120");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("4000");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const label = t("playground.label");

  const attrs = [
    variant !== "flow" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    thickness !== "2" && `thickness={${thickness}}`,
    angle !== "120" && `angle={${angle}}`,
    intensity !== "md" && `intensity="${intensity}"`,
    duration !== "4000" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening =
    attrs.length > 0 ? `<GradientBorder\n  ${attrs.join("\n  ")}\n>` : "<GradientBorder>";
  const code = `import { GradientBorder } from "@gem-org/gemffects/gradient-border";

${opening}
  <span className="target">${label}</span>
</GradientBorder>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: BORDER_VARIANTS,
      onChange: pick(BORDER_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: BORDER_TRIGGERS,
      onChange: pick(BORDER_TRIGGERS, setTrigger),
    },
    {
      id: "thickness",
      value: thickness,
      options: THICKNESS_OPTIONS,
      onChange: pick(THICKNESS_OPTIONS, setThickness),
    },
    { id: "angle", value: angle, options: ANGLE_OPTIONS, onChange: pick(ANGLE_OPTIONS, setAngle) },
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
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="gradient-border-playground">
        {selects.map((select) => (
          <div key={select.id} className="gradient-border-playground__field">
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
        <BorderTile>
          <GradientBorder
            variant={variant}
            trigger={trigger}
            thickness={Number(thickness)}
            angle={Number(angle)}
            intensity={intensity}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="gb-demo__host"
          >
            <BorderTarget>{label}</BorderTarget>
          </GradientBorder>
        </BorderTile>
      </DemoBlock>
    </DocsSection>
  );
}
