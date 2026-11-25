import { useState } from "react";
import {
  Link,
  Select,
  Typography,
  type LinkSize,
  type LinkTone,
  type LinkUnderline,
  type SelectValue,
} from "@gem-org/gem-system";
import { ArrowRight, Home } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import { DemoBlock, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { MDN_ANCHOR } from "./examples/demo.ts";
import { LinkDemoGuard } from "./LinkDemoGuard.tsx";
import { linkSizes, linkTones, linkUnderlines } from "./linkDocs.ts";

const hrefOptions = ["internal", "external"] as const;
const iconOptions = ["none", "left", "right"] as const;
const booleanOptions = ["false", "true"] as const;

const toOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

const pick = (setter: (value: string) => void) => (value: SelectValue) => {
  if (typeof value === "string") setter(value);
};

export function LinkPlayground() {
  const { t } = useTranslation("link");
  const texts = t("demo", { returnObjects: true });
  const [hrefKind, setHrefKind] = useState<string>("internal");
  const [tone, setTone] = useState<string>("primary");
  const [size, setSize] = useState<string>("md");
  const [underline, setUnderline] = useState<string>("hover");
  const [icon, setIcon] = useState<string>("none");
  const [isDisabled, setIsDisabled] = useState<string>("false");
  const [isCurrent, setIsCurrent] = useState<string>("false");

  const external = hrefKind === "external";
  const href = external ? MDN_ANCHOR : "/guide";
  const label = external ? texts.docs : texts.guide;
  const showLeft = icon === "left";
  const showRight = icon === "right" && !external;
  const iconImports = [showLeft && "Home", showRight && "ArrowRight"].filter(Boolean);

  const attrs = [
    `href="${href}"`,
    tone !== "primary" && `tone="${tone}"`,
    size !== "md" && `size="${size}"`,
    underline !== "hover" && `underline="${underline}"`,
    showLeft && 'leftIcon={<Home size="xs" />}',
    showRight && 'rightIcon={<ArrowRight size="xs" />}',
    external && `externalLabel="${texts.externalLabel}"`,
    isDisabled === "true" && "isDisabled",
    isCurrent === "true" && "isCurrent",
  ].filter(Boolean);

  const code = `import { Link } from "@gem-org/gem-system";${
    iconImports.length > 0
      ? `\nimport { ${iconImports.join(", ")} } from "@gem-org/gem-system/icons";`
      : ""
  }

export function Example() {
  return (
    <Link
      ${attrs.join("\n      ")}
    >
      ${label}
    </Link>
  );
}`;

  const selects = [
    { id: "href", value: hrefKind, options: hrefOptions, onChange: pick(setHrefKind) },
    { id: "tone", value: tone, options: linkTones, onChange: pick(setTone) },
    { id: "size", value: size, options: linkSizes, onChange: pick(setSize) },
    { id: "underline", value: underline, options: linkUnderlines, onChange: pick(setUnderline) },
    { id: "icon", value: icon, options: iconOptions, onChange: pick(setIcon) },
    { id: "isDisabled", value: isDisabled, options: booleanOptions, onChange: pick(setIsDisabled) },
    { id: "isCurrent", value: isCurrent, options: booleanOptions, onChange: pick(setIsCurrent) },
  ] as const;

  return (
    <DocsSection title={t("playground.title")} description={t("playground.description")}>
      <div className="link-playground">
        {selects.map((select) => (
          <div key={select.id} className="link-playground__field">
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

      <DemoBlock code={code} label="Example.tsx">
        <LinkDemoGuard>
          <Link
            href={href}
            tone={tone as LinkTone}
            size={size as LinkSize}
            underline={underline as LinkUnderline}
            leftIcon={showLeft ? <Home size="xs" /> : undefined}
            rightIcon={showRight ? <ArrowRight size="xs" /> : undefined}
            externalLabel={texts.externalLabel}
            isDisabled={isDisabled === "true"}
            isCurrent={isCurrent === "true"}
          >
            {label}
          </Link>
        </LinkDemoGuard>
      </DemoBlock>
    </DocsSection>
  );
}
