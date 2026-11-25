import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Float } from "@gem-org/gemffects/float";
import { isIntensityToken } from "@gem-org/gemffects/tokens";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { FloatTile } from "./examples/FloatTile.tsx";
import { FLOAT_TRIGGERS, FLOAT_VARIANTS } from "./examples/demo.ts";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg", "0.2", "0.62", "0.95"] as const;
const AMPLITUDE_OPTIONS = ["auto", "4", "10", "24"] as const;
const DURATION_OPTIONS = ["1600", "2800", "4800"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function FloatPlayground() {
  const { t } = useTranslation("float");
  const [variant, setVariant] = useState<(typeof FLOAT_VARIANTS)[number]>("bob");
  const [trigger, setTrigger] = useState<(typeof FLOAT_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [amplitude, setAmplitude] = useState<(typeof AMPLITUDE_OPTIONS)[number]>("auto");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("2800");
  const [shadow, setShadow] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const intensityValue = isIntensityToken(intensity) ? intensity : Number(intensity);
  const amplitudeValue = amplitude === "auto" ? undefined : Number(amplitude);

  const attrs = [
    variant !== "bob" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" &&
      (isIntensityToken(intensity) ? `intensity="${intensity}"` : `intensity={${intensity}}`),
    amplitudeValue !== undefined && `amplitude={${amplitudeValue}}`,
    duration !== "2800" && `duration={${duration}}`,
    shadow === "false" && "shadow={false}",
    isPaused === "true" && "isPaused",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Float\n  ${attrs.join("\n  ")}\n>` : "<Float>";
  const code = `import { Float } from "@gem-org/gemffects/float";

${opening}
  <span>${t("playground.target")}</span>
</Float>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: FLOAT_VARIANTS,
      onChange: pick(FLOAT_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: FLOAT_TRIGGERS,
      onChange: pick(FLOAT_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    {
      id: "amplitude",
      value: amplitude,
      options: AMPLITUDE_OPTIONS,
      onChange: pick(AMPLITUDE_OPTIONS, setAmplitude),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    {
      id: "shadow",
      value: shadow,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setShadow),
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
      <div className="float-playground">
        {selects.map((select) => (
          <div key={select.id} className="float-playground__field">
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
        <FloatTile>
          <Float
            variant={variant}
            trigger={trigger}
            intensity={intensityValue}
            amplitude={amplitudeValue}
            duration={Number(duration)}
            shadow={shadow === "true"}
            isPaused={isPaused === "true"}
            isDisabled={isDisabled === "true"}
            className="float-demo__host"
          >
            <span className="float-demo__target">{t("playground.target")}</span>
          </Float>
        </FloatTile>
      </DemoBlock>
    </DocsSection>
  );
}
