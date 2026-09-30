import { useState } from "react";
import { Button, Select, Toast, Typography, toast, type SelectValue } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { TOAST_RADII, TOAST_SIZES, TOAST_STATUSES, TOAST_VARIANTS } from "./examples/demo.ts";
import "./examples/toast-demo.css";

const booleanOptions = ["true", "false"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function ToastPlayground() {
  const { t } = useTranslation("toast");
  const common = t("common", { returnObjects: true });
  const [status, setStatus] = useState<string>("info");
  const [variant, setVariant] = useState<string>("soft");
  const [size, setSize] = useState<string>("md");
  const [radius, setRadius] = useState<string>("md");
  const [hideIcon, setHideIcon] = useState<string>("false");
  const [isClosable, setIsClosable] = useState<string>("true");
  const [showProgress, setShowProgress] = useState<string>("true");
  const [pauseOnHover, setPauseOnHover] = useState<string>("true");

  const current = common.copy[status as (typeof TOAST_STATUSES)[number]];
  const options = {
    status: status as (typeof TOAST_STATUSES)[number],
    variant: variant as (typeof TOAST_VARIANTS)[number],
    size: size as (typeof TOAST_SIZES)[number],
    radius: radius as (typeof TOAST_RADII)[number],
    hideIcon: hideIcon === "true",
    isClosable: isClosable === "true",
    showProgress: showProgress === "true",
    pauseOnHover: pauseOnHover === "true",
    closeAriaLabel: common.closeLabel,
  };

  const attrs = [
    status !== "info" && `status: "${status}"`,
    variant !== "soft" && `variant: "${variant}"`,
    size !== "md" && `size: "${size}"`,
    radius !== "md" && `radius: "${radius}"`,
    hideIcon === "true" && "hideIcon: true",
    isClosable === "false" && "isClosable: false",
    showProgress === "false" && "showProgress: false",
    pauseOnHover === "false" && "pauseOnHover: false",
    `description: "${current.description}"`,
    `closeAriaLabel: "${common.closeLabel}"`,
  ].filter(Boolean);

  const code = `import { toast } from "@gem-org/gem-system";

toast("${current.title}", {
  ${attrs.join(",\n  ")},
});`;

  const selects = [
    { id: "status", value: status, options: TOAST_STATUSES, onChange: pick(setStatus) },
    { id: "variant", value: variant, options: TOAST_VARIANTS, onChange: pick(setVariant) },
    { id: "size", value: size, options: TOAST_SIZES, onChange: pick(setSize) },
    { id: "radius", value: radius, options: TOAST_RADII, onChange: pick(setRadius) },
    { id: "hideIcon", value: hideIcon, options: booleanOptions, onChange: pick(setHideIcon) },
    { id: "isClosable", value: isClosable, options: booleanOptions, onChange: pick(setIsClosable) },
    { id: "showProgress", value: showProgress, options: booleanOptions, onChange: pick(setShowProgress) },
    { id: "pauseOnHover", value: pauseOnHover, options: booleanOptions, onChange: pick(setPauseOnHover) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="toast-playground">
        {selects.map((select) => (
          <div key={select.id} className="toast-playground__field">
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
        <div className="toast-stack">
          <Toast key={`${status}-${variant}-${size}-${radius}-${hideIcon}-${isClosable}`} {...options} title={current.title}>
            {current.description}
          </Toast>
          <div>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => toast(current.title, { ...options, description: current.description })}
            >
              {t("playground.launch")}
            </Button>
          </div>
        </div>
      </DemoBlock>
    </DocsSection>
  );
}
