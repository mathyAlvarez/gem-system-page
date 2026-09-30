import { useState } from "react";
import { Select, Timeline, Typography, type SelectValue } from "@gem-org/gem-system";
import { Clock } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { TIMELINE_ALIGNS, TIMELINE_SIZES, orderItems, type OrderCopy } from "./examples/demo.ts";
import "./examples/timeline-demo.css";

const booleanOptions = ["true", "false"] as const;
const pendingOptions = ["none", "true", "label"] as const;
const stepOptions = ["2", "3", "5"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

type TimelinePlaygroundProps = { order: OrderCopy; pendingLabel: string };

export function TimelinePlayground({ order, pendingLabel }: TimelinePlaygroundProps) {
  const { t } = useTranslation("timeline");
  const [size, setSize] = useState<string>("md");
  const [align, setAlign] = useState<string>("start");
  const [reverse, setReverse] = useState<string>("false");
  const [pending, setPending] = useState<string>("none");
  const [pendingDot, setPendingDot] = useState<string>("false");
  const [steps, setSteps] = useState<string>("3");
  const [toned, setToned] = useState<string>("true");

  const items = orderItems(order)
    .slice(0, Number(steps))
    .map((item) => (toned === "true" ? item : { ...item, tone: undefined }));
  const pendingValue = pending === "true" ? true : pending === "label" ? pendingLabel : undefined;

  const attrs = [
    `listLabel="${order.listLabel}"`,
    "items={items}",
    size !== "md" && `size="${size}"`,
    align !== "start" && `align="${align}"`,
    reverse === "true" && "reverse",
    pending === "true" && "pending",
    pending === "label" && `pending="${pendingLabel}"`,
    pending !== "none" && pendingDot === "true" && "pendingDot={<Clock size=\"sm\" />}",
  ].filter(Boolean);

  const itemLines = items.map((item) => {
    const fields = [
      `id: "${item.id}"`,
      `title: "${item.title}"`,
      `description: "${item.description}"`,
      `time: "${item.time}"`,
      item.tone && `tone: "${item.tone}"`,
    ].filter(Boolean);
    return `  {\n    ${fields.join(",\n    ")},\n  },`;
  });

  const code = `import { Timeline, type TimelineItem } from "@gem-org/gem-system";${
    pending !== "none" && pendingDot === "true" ? '\nimport { Clock } from "@gem-org/gem-system/icons";' : ""
  }

const items: TimelineItem[] = [
${itemLines.join("\n")}
];

<Timeline
  ${attrs.join("\n  ")}
/>`;

  const selects = [
    { id: "size", value: size, options: TIMELINE_SIZES, onChange: pick(setSize) },
    { id: "align", value: align, options: TIMELINE_ALIGNS, onChange: pick(setAlign) },
    { id: "reverse", value: reverse, options: booleanOptions, onChange: pick(setReverse) },
    { id: "items", value: steps, options: stepOptions, onChange: pick(setSteps) },
    { id: "tone", value: toned, options: booleanOptions, onChange: pick(setToned) },
    { id: "pending", value: pending, options: pendingOptions, onChange: pick(setPending) },
    { id: "pendingDot", value: pendingDot, options: booleanOptions, onChange: pick(setPendingDot) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="timeline-playground">
        {selects.map((select) => (
          <div key={select.id} className="timeline-playground__field">
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
        <div className={align === "alternate" ? "timeline-demo timeline-demo--wide" : "timeline-demo"}>
          <Timeline
            listLabel={order.listLabel}
            items={items}
            size={size as (typeof TIMELINE_SIZES)[number]}
            align={align as (typeof TIMELINE_ALIGNS)[number]}
            reverse={reverse === "true"}
            pending={pendingValue}
            pendingDot={pendingDot === "true" ? <Clock size="sm" /> : undefined}
          />
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
