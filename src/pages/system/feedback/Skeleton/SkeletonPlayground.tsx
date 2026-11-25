import { useState } from "react";
import { Select, Skeleton, Typography, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { SKELETON_ANIMATIONS, SKELETON_RADII, SKELETON_VARIANTS } from "./examples/demo.ts";
import "./examples/skeleton-demo.css";

const radiusOptions = ["auto", ...SKELETON_RADII] as const;
const countOptions = ["1", "2", "3", "5"] as const;
const durationOptions = ["1600", "800", "2400"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function SkeletonPlayground() {
  const { t } = useTranslation("skeleton");
  const ariaLabel = t("playground.ariaLabel");
  const [variant, setVariant] = useState<string>("text");
  const [animation, setAnimation] = useState<string>("wave");
  const [radius, setRadius] = useState<string>("auto");
  const [count, setCount] = useState<string>("3");
  const [duration, setDuration] = useState<string>("1600");
  const [disabled, setDisabled] = useState<string>("false");

  const attrs = [
    variant !== "text" && `variant="${variant}"`,
    animation !== "wave" && `animation="${animation}"`,
    radius !== "auto" && `radius="${radius}"`,
    count !== "1" && `count={${count}}`,
    duration !== "1600" && `duration={${duration}}`,
    disabled === "true" && "disabled",
    `aria-label="${ariaLabel}"`,
  ].filter(Boolean);

  const code = `import { Skeleton } from "@gem-org/gem-system";

export function Example() {
  return (
    <Skeleton
      ${attrs.join("\n      ")}
    />
  );
}`;

  const selects = [
    { id: "variant", value: variant, options: SKELETON_VARIANTS, onChange: pick(setVariant) },
    {
      id: "animation",
      value: animation,
      options: SKELETON_ANIMATIONS,
      onChange: pick(setAnimation),
    },
    { id: "radius", value: radius, options: radiusOptions, onChange: pick(setRadius) },
    { id: "count", value: count, options: countOptions, onChange: pick(setCount) },
    { id: "duration", value: duration, options: durationOptions, onChange: pick(setDuration) },
    { id: "disabled", value: disabled, options: booleanOptions, onChange: pick(setDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="skeleton-playground">
        {selects.map((select) => (
          <div key={select.id} className="skeleton-playground__field">
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
        <div className="skeleton-stack">
          <Skeleton
            variant={variant as (typeof SKELETON_VARIANTS)[number]}
            animation={animation as (typeof SKELETON_ANIMATIONS)[number]}
            radius={radius === "auto" ? undefined : (radius as (typeof SKELETON_RADII)[number])}
            count={Number(count)}
            duration={Number(duration)}
            disabled={disabled === "true"}
            aria-label={ariaLabel}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
