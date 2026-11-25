import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { GradientText } from "@gem-org/gemffects/gradient-text";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { TEXT_TRIGGERS, TEXT_VARIANTS } from "./examples/demo.ts";
import { TextTile } from "./examples/TextTile.tsx";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const ANGLE_OPTIONS = ["45", "110", "180"] as const;
const DURATION_OPTIONS = ["1600", "3200", "6000"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function GradientTextPlayground() {
  const { t } = useTranslation("gradientText");
  const [variant, setVariant] = useState<(typeof TEXT_VARIANTS)[number]>("flow");
  const [trigger, setTrigger] = useState<(typeof TEXT_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [angle, setAngle] = useState<(typeof ANGLE_OPTIONS)[number]>("110");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("3200");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const label = t("playground.label");

  const attrs = [
    variant !== "flow" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    angle !== "110" && `angle={${angle}}`,
    duration !== "3200" && `duration={${duration}}`,
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<GradientText\n  ${attrs.join("\n  ")}\n>` : "<GradientText>";
  const code = `import { GradientText } from "@gem-org/gemffects/gradient-text";

${opening}
  <span className="copy">${label}</span>
</GradientText>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: TEXT_VARIANTS,
      onChange: pick(TEXT_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: TEXT_TRIGGERS,
      onChange: pick(TEXT_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "angle", value: angle, options: ANGLE_OPTIONS, onChange: pick(ANGLE_OPTIONS, setAngle) },
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
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="gradient-text-playground">
        {selects.map((select) => (
          <div key={select.id} className="gradient-text-playground__field">
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
        <TextTile>
          <GradientText
            variant={variant}
            trigger={trigger}
            intensity={intensity}
            angle={Number(angle)}
            duration={Number(duration)}
            isPaused={isPaused === "true"}
          >
            <span className="gt-demo__copy">{label}</span>
          </GradientText>
        </TextTile>
      </DemoBlock>
    </DocsSection>
  );
}
