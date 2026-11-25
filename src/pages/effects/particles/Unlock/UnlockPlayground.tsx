import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { Unlock } from "@gem-org/gemffects/unlock";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { UNLOCK_DIRECTIONS, UNLOCK_TRIGGERS, UNLOCK_VARIANTS } from "./examples/demo.ts";
import "./examples/unlock-demo.css";

const DURATION_OPTIONS = ["280", "560", "900"] as const;
const GAP_OPTIONS = ["0", "6", "16"] as const;
const STAGGER_OPTIONS = ["0", "40", "200"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function UnlockPlayground() {
  const { t } = useTranslation("unlock");
  const [direction, setDirection] = useState<(typeof UNLOCK_DIRECTIONS)[number]>("horizontal");
  const [variant, setVariant] = useState<(typeof UNLOCK_VARIANTS)[number]>("unlock");
  const [trigger, setTrigger] = useState<(typeof UNLOCK_TRIGGERS)[number]>("click");
  const [duration, setDuration] = useState<(typeof DURATION_OPTIONS)[number]>("560");
  const [gap, setGap] = useState<(typeof GAP_OPTIONS)[number]>("0");
  const [stagger, setStagger] = useState<(typeof STAGGER_OPTIONS)[number]>("40");

  const label = t("playground.label");

  const attrs = [
    direction !== "horizontal" && `direction="${direction}"`,
    variant !== "unlock" && `variant="${variant}"`,
    trigger !== "click" && `trigger="${trigger}"`,
    duration !== "560" && `duration={${duration}}`,
    gap !== "0" && `gap={${gap}}`,
    stagger !== "40" && `stagger={${stagger}}`,
  ].filter(Boolean);

  const opening = attrs.length > 0 ? `<Unlock\n  ${attrs.join("\n  ")}\n>` : "<Unlock>";
  const code = `import { Unlock } from "@gem-org/gemffects/unlock";

${opening}
  <div className="prize">${label}</div>
</Unlock>`;

  const selects = [
    {
      id: "direction",
      value: direction,
      options: UNLOCK_DIRECTIONS,
      onChange: pick(UNLOCK_DIRECTIONS, setDirection),
    },
    {
      id: "variant",
      value: variant,
      options: UNLOCK_VARIANTS,
      onChange: pick(UNLOCK_VARIANTS, setVariant),
    },
    {
      id: "trigger",
      value: trigger,
      options: UNLOCK_TRIGGERS,
      onChange: pick(UNLOCK_TRIGGERS, setTrigger),
    },
    {
      id: "duration",
      value: duration,
      options: DURATION_OPTIONS,
      onChange: pick(DURATION_OPTIONS, setDuration),
    },
    { id: "gap", value: gap, options: GAP_OPTIONS, onChange: pick(GAP_OPTIONS, setGap) },
    {
      id: "stagger",
      value: stagger,
      options: STAGGER_OPTIONS,
      onChange: pick(STAGGER_OPTIONS, setStagger),
    },
  ];

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="unlock-playground">
        {selects.map((select) => (
          <div key={select.id} className="unlock-playground__field">
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
        <Unlock
          direction={direction}
          variant={variant}
          trigger={trigger}
          duration={Number(duration)}
          gap={Number(gap)}
          stagger={Number(stagger)}
          className="ul-demo__host"
        >
          <div className="ul-demo__card">
            <p className="ul-demo__title">{label}</p>
          </div>
        </Unlock>
      </DemoBlock>
    </DocsSection>
  );
}
