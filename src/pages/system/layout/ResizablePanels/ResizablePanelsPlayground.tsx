import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanels,
  Select,
  Typography,
  type ResizableOrientation,
  type ResizableRadius,
  type ResizableSize,
  type SelectValue,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { Pane } from "./examples/Pane.tsx";
import { resizableOrientations, resizableRadii, resizableSizes } from "./resizablePanelsDocs.ts";

const none = "—";
const countOptions = ["2", "3"] as const;
const paddingOptions = [none, "2", "4", "6"] as const;
const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ResizablePanelsPlayground() {
  const { t } = useTranslation("resizablePanels");
  const [orientation, setOrientation] = useState<string>("horizontal");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [count, setCount] = useState("2");
  const [padding, setPadding] = useState<string>(none);
  const [withHandle, setWithHandle] = useState<string>("true");
  const [disabled, setDisabled] = useState<string>("false");

  const panes = Array.from({ length: Number(count) }, (_, index) => index + 1);
  const paddingValue = padding === none ? undefined : Number(padding);
  const gripOn = withHandle === "true";
  const isDisabled = disabled === "true";

  const attrs = [
    orientation !== "horizontal" && `orientation="${orientation}"`,
    size !== "md" && `size="${size}"`,
    radius !== "md" && `radius="${radius}"`,
    "height={280}",
    paddingValue !== undefined && `padding={${paddingValue}}`,
    isDisabled && "isDisabled",
  ].filter(Boolean);

  const handleCode = gripOn ? "<ResizableHandle />" : "<ResizableHandle withHandle={false} />";
  const body = panes
    .map((pane) => `      <ResizablePanel>Panel ${pane}</ResizablePanel>`)
    .join(`\n      ${handleCode}\n`);

  const code = `import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";

export function Example() {
  return (
    <ResizablePanels ${attrs.join(" ")}>
${body}
    </ResizablePanels>
  );
}`;

  const selects = [
    {
      id: "orientation",
      value: orientation,
      options: resizableOrientations,
      onChange: pick(setOrientation),
    },
    { id: "size", value: size, options: resizableSizes, onChange: pick(setSize) },
    { id: "radius", value: radius, options: resizableRadii, onChange: pick(setRadius) },
    { id: "count", value: count, options: countOptions, onChange: pick(setCount) },
    { id: "padding", value: padding, options: paddingOptions, onChange: pick(setPadding) },
    { id: "withHandle", value: withHandle, options: booleanOptions, onChange: pick(setWithHandle) },
    { id: "isDisabled", value: disabled, options: booleanOptions, onChange: pick(setDisabled) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="resizable-playground">
        {selects.map((select) => (
          <div key={select.id} className="resizable-playground__field">
            <Typography variant="label">{t(`playground.${select.id}`)}</Typography>
            <Select
              aria-label={t(`playground.${select.id}`)}
              options={toOptions(select.options)}
              value={select.value}
              onChange={select.onChange}
              searchable={false}
            />
          </div>
        ))}
      </div>

      <DemoBlock code={code} label="Example.tsx" stack>
        <ResizablePanels
          key={`${orientation}-${count}`}
          orientation={orientation as ResizableOrientation}
          size={size as ResizableSize}
          radius={radius as ResizableRadius}
          height={280}
          padding={paddingValue}
          isDisabled={isDisabled}
        >
          {panes.flatMap((pane, index) => [
            ...(index > 0 ? [<ResizableHandle key={`handle-${pane}`} withHandle={gripOn} />] : []),
            <ResizablePanel key={`panel-${pane}`}>
              <Pane
                title={`${t("playground.pane")} ${pane}`}
                body={t("playground.paneBody")}
                tone={index % 2 === 0 ? "muted" : "default"}
                flush={paddingValue !== undefined}
              />
            </ResizablePanel>,
          ])}
        </ResizablePanels>
      </DemoBlock>
    </DocsSection>
  );
}
