import { useState } from "react";
import { Select, Typography, type SelectValue } from "@gem-org/gem-system";
import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import {
  STAGGER_GROUP_DELAYS,
  STAGGER_GROUP_DIRECTIONS,
  STAGGER_GROUP_DISTANCES,
  STAGGER_GROUP_DURATIONS,
  STAGGER_GROUP_EASINGS,
  STAGGER_GROUP_FROMS,
  STAGGER_GROUP_STAGGER_DELAYS,
  STAGGER_GROUP_TILES,
} from "./examples/demo.ts";
import { StaggerControls } from "./examples/StaggerControls.tsx";
import "./examples/stagger-group-demo.css";

const BOOLEAN_OPTIONS = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(options: readonly T[], setter: (value: T) => void) =>
  (value: SelectValue) => {
    const match = options.find((option) => option === value);
    if (match) setter(match);
  };

export function StaggerGroupPlayground() {
  const { t } = useTranslation("staggerGroup");
  const [isIn, setIsIn] = useState(true);
  const [from, setFrom] = useState<(typeof STAGGER_GROUP_FROMS)[number]>("bottom");
  const [staggerDirection, setStaggerDirection] =
    useState<(typeof STAGGER_GROUP_DIRECTIONS)[number]>("1");
  const [duration, setDuration] = useState<(typeof STAGGER_GROUP_DURATIONS)[number]>("300");
  const [delay, setDelay] = useState<(typeof STAGGER_GROUP_DELAYS)[number]>("0");
  const [staggerDelay, setStaggerDelay] =
    useState<(typeof STAGGER_GROUP_STAGGER_DELAYS)[number]>("50");
  const [distance, setDistance] = useState<(typeof STAGGER_GROUP_DISTANCES)[number]>("8");
  const [easing, setEasing] = useState<(typeof STAGGER_GROUP_EASINGS)[number]>("standard");
  const [reverseExit, setReverseExit] = useState<(typeof BOOLEAN_OPTIONS)[number]>("true");
  const [staggerShuffled, setStaggerShuffled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [preserveSpace, setPreserveSpace] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [center, setCenter] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");
  const [isDisabled, setIsDisabled] = useState<(typeof BOOLEAN_OPTIONS)[number]>("false");

  const attrs = [
    `isIn={${isIn}}`,
    from !== "bottom" && `from="${from}"`,
    staggerDirection !== "1" && `staggerDirection={${staggerDirection}}`,
    duration !== "300" && `duration={${duration}}`,
    delay !== "0" && `delay={${delay}}`,
    staggerDelay !== "50" && `staggerDelay={${staggerDelay}}`,
    distance !== "8" && `distance={${distance}}`,
    easing !== "standard" && `easing="${easing}"`,
    reverseExit === "false" && "reverseExit={false}",
    staggerShuffled === "true" && "staggerShuffled",
    preserveSpace === "true" && "preserveSpace",
    center === "true" && "center",
    isDisabled === "true" && "isDisabled",
  ].filter(Boolean);

  const code = `import { StaggerGroup } from "@gem-org/gemsitions/stagger-group";

<StaggerGroup
  ${attrs.join("\n  ")}
  className="stagger-group-demo__list"
>
  {items.map((label) => (
    <div key={label}>{label}</div>
  ))}
</StaggerGroup>`;

  const selects = [
    {
      id: "from",
      value: from,
      options: STAGGER_GROUP_FROMS,
      onChange: pick(STAGGER_GROUP_FROMS, setFrom),
    },
    {
      id: "staggerDirection",
      value: staggerDirection,
      options: STAGGER_GROUP_DIRECTIONS,
      onChange: pick(STAGGER_GROUP_DIRECTIONS, setStaggerDirection),
    },
    {
      id: "duration",
      value: duration,
      options: STAGGER_GROUP_DURATIONS,
      onChange: pick(STAGGER_GROUP_DURATIONS, setDuration),
    },
    {
      id: "delay",
      value: delay,
      options: STAGGER_GROUP_DELAYS,
      onChange: pick(STAGGER_GROUP_DELAYS, setDelay),
    },
    {
      id: "staggerDelay",
      value: staggerDelay,
      options: STAGGER_GROUP_STAGGER_DELAYS,
      onChange: pick(STAGGER_GROUP_STAGGER_DELAYS, setStaggerDelay),
    },
    {
      id: "distance",
      value: distance,
      options: STAGGER_GROUP_DISTANCES,
      onChange: pick(STAGGER_GROUP_DISTANCES, setDistance),
    },
    {
      id: "easing",
      value: easing,
      options: STAGGER_GROUP_EASINGS,
      onChange: pick(STAGGER_GROUP_EASINGS, setEasing),
    },
    {
      id: "reverseExit",
      value: reverseExit,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setReverseExit),
    },
    {
      id: "staggerShuffled",
      value: staggerShuffled,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setStaggerShuffled),
    },
    {
      id: "preserveSpace",
      value: preserveSpace,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setPreserveSpace),
    },
    {
      id: "center",
      value: center,
      options: BOOLEAN_OPTIONS,
      onChange: pick(BOOLEAN_OPTIONS, setCenter),
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
      <div className="stagger-group-playground">
        {selects.map((select) => (
          <div key={select.id} className="stagger-group-playground__field">
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

      <DemoBlock code={code} label="Example.tsx" stack>
        <div
          className={
            center === "true"
              ? "stagger-group-demo stagger-group-demo--center"
              : "stagger-group-demo"
          }
        >
          <StaggerControls
            toggle={isIn ? t("playground.toggleOut") : t("playground.toggleIn")}
            enter={t("playground.enter")}
            exit={t("playground.exit")}
            isIn={isIn}
            onToggle={() => setIsIn((value) => !value)}
            onEnter={() => setIsIn(true)}
            onExit={() => setIsIn(false)}
          />
          <StaggerGroup
            className="stagger-group-demo__list"
            isIn={isIn}
            from={from}
            staggerDirection={Number(staggerDirection) as 1 | -1}
            duration={Number(duration)}
            delay={Number(delay)}
            staggerDelay={Number(staggerDelay)}
            distance={Number(distance)}
            easing={easing}
            reverseExit={reverseExit === "true"}
            staggerShuffled={staggerShuffled === "true"}
            preserveSpace={preserveSpace === "true"}
            center={center === "true"}
            isDisabled={isDisabled === "true"}
          >
            {STAGGER_GROUP_TILES.map((label) => (
              <div key={label} className="stagger-group-demo__tile">
                {label}
              </div>
            ))}
          </StaggerGroup>
          <p className="stagger-group-demo__sibling">
            {preserveSpace === "true" ? t("playground.siblingPreserve") : t("playground.sibling")}
          </p>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
