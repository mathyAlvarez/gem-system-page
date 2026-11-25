import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Meteors } from "@gem-org/gemffects/meteors";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { METEOR_TRIGGERS, METEOR_VARIANTS } from "./examples/demo.ts";
import "./examples/meteors-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;
const INTENSITY_OPTIONS = ["sm", "md", "lg"] as const;
const SPEED_OPTIONS = ["0.5", "1", "2"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function MeteorsPlayground() {
  const { t } = useTranslation("meteors");
  const [variant, setVariant] = useState<(typeof METEOR_VARIANTS)[number]>("trail");
  const [trigger, setTrigger] = useState<(typeof METEOR_TRIGGERS)[number]>("always");
  const [intensity, setIntensity] = useState<(typeof INTENSITY_OPTIONS)[number]>("md");
  const [speed, setSpeed] = useState<(typeof SPEED_OPTIONS)[number]>("1");
  const [reverse, setReverse] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isPaused, setIsPaused] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const label = t("playground.label");

  const attrs = [
    variant !== "trail" && `variant="${variant}"`,
    trigger !== "always" && `trigger="${trigger}"`,
    intensity !== "md" && `intensity="${intensity}"`,
    speed !== "1" && `speed={${speed}}`,
    reverse === "true" && "reverse",
    isPaused === "true" && "isPaused",
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Meteors\n  ${attrs.join("\n  ")}\n>` : "<Meteors>";
  const code = `import { Meteors } from "@gem-org/gemffects/meteors";

${opening}
  <p className="copy">${label}</p>
</Meteors>`;

  const selects = [
    {
      id: "variant",
      value: variant,
      options: METEOR_VARIANTS,
      onChange: pick(METEOR_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: METEOR_TRIGGERS,
      onChange: pick(METEOR_TRIGGERS, setTrigger),
    },
    {
      id: "intensity",
      value: intensity,
      options: INTENSITY_OPTIONS,
      onChange: pick(INTENSITY_OPTIONS, setIntensity),
    },
    { id: "speed", value: speed, options: SPEED_OPTIONS, onChange: pick(SPEED_OPTIONS, setSpeed) },
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
      <div className="meteors-playground">
        {selects.map((select) => (
          <div key={select.id} className="meteors-playground__field">
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
        <Meteors
          variant={variant}
          trigger={trigger}
          intensity={intensity}
          speed={Number(speed)}
          reverse={reverse === "true"}
          isPaused={isPaused === "true"}
          className="mt-demo__host"
        >
          <p className="mt-demo__copy">{label}</p>
        </Meteors>
      </DemoBlock>
    </DocsSection>
  );
}
