import { useState } from "react";
import {
  Button,
  Select,
  Switch,
  Tooltip,
  Typography,
  type SelectValue,
  type TooltipPlacement,
} from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { tooltipPlacements } from "./tooltipDocs.ts";

const delays = ["0", "200", "500", "1000"] as const;
const closeDelays = ["0", "200", "500"] as const;
const offsets = ["4", "8", "16"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick =
  <T extends string>(setter: (value: T) => void) =>
  (value: SelectValue) => {
    if (typeof value === "string") setter(value as T);
  };

export function TooltipPlayground() {
  const { t } = useTranslation("tooltip");
  const [placement, setPlacement] = useState<TooltipPlacement>("top");
  const [delay, setDelay] = useState("200");
  const [closeDelay, setCloseDelay] = useState("0");
  const [offset, setOffset] = useState("8");
  const [disabled, setDisabled] = useState(false);

  const content = t("playground.content");
  const label = t("playground.trigger");

  const attrs = [
    `content=${JSON.stringify(content)}`,
    placement !== "top" && `placement="${placement}"`,
    delay !== "200" && `delay={${delay}}`,
    closeDelay !== "0" && `closeDelay={${closeDelay}}`,
    offset !== "8" && `offset={${offset}}`,
    disabled && "disabled",
  ].filter(Boolean);

  const code = `import { Button, Tooltip } from "@gem-org/gem-system";

export function Example() {
  return (
    <Tooltip
${attrs.map((attr) => `      ${attr}`).join("\n")}
    >
      <Button variant="secondary">${label}</Button>
    </Tooltip>
  );
}`;

  const selects = [
    { id: "placement", value: placement, options: tooltipPlacements, onChange: pick<TooltipPlacement>(setPlacement) },
    { id: "delay", value: delay, options: delays, onChange: pick(setDelay) },
    { id: "closeDelay", value: closeDelay, options: closeDelays, onChange: pick(setCloseDelay) },
    { id: "offset", value: offset, options: offsets, onChange: pick(setOffset) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="tooltip-playground">
        {selects.map((select) => (
          <div key={select.id} className="tooltip-playground__field">
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
        <div className="tooltip-playground__flags">
          <Switch
            size="sm"
            label={t("playground.disabled")}
            checked={disabled}
            onChange={(event) => setDisabled(event.target.checked)}
          />
        </div>
      </div>

      <DemoBlock code={code} label="Example.tsx">
        <Tooltip
          content={content}
          placement={placement}
          delay={Number(delay)}
          closeDelay={Number(closeDelay)}
          offset={Number(offset)}
          disabled={disabled}
        >
          <Button variant="secondary">{label}</Button>
        </Tooltip>
      </DemoBlock>
    </DocsSection>
  );
}
