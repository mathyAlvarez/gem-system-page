import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { AccordionPlayground } from "./AccordionPlayground.tsx";
import overridesCss from "./examples/accordion-overrides.css?raw";
import { BaseAccordion } from "./examples/BaseAccordion.tsx";
import baseCode from "./examples/BaseAccordion.tsx?raw";
import { ControlledAccordion } from "./examples/ControlledAccordion.tsx";
import controlledCode from "./examples/ControlledAccordion.tsx?raw";
import demoCode from "./examples/demo.ts?raw";
import { DisabledAccordion } from "./examples/DisabledAccordion.tsx";
import disabledCode from "./examples/DisabledAccordion.tsx?raw";
import { IconsAccordion } from "./examples/IconsAccordion.tsx";
import iconsCode from "./examples/IconsAccordion.tsx?raw";
import { RequiredOpenAccordion } from "./examples/RequiredOpenAccordion.tsx";
import requiredOpenCode from "./examples/RequiredOpenAccordion.tsx?raw";
import { RichAccordion } from "./examples/RichAccordion.tsx";
import richCode from "./examples/RichAccordion.tsx?raw";
import { SingleAccordion } from "./examples/SingleAccordion.tsx";
import singleCode from "./examples/SingleAccordion.tsx?raw";
import { SizesAccordion } from "./examples/SizesAccordion.tsx";
import sizesCode from "./examples/SizesAccordion.tsx?raw";
import { StyledAccordion } from "./examples/StyledAccordion.tsx";
import styledCode from "./examples/StyledAccordion.tsx?raw";
import { TailwindAccordion } from "./examples/TailwindAccordion.tsx";
import tailwindCode from "./examples/TailwindAccordion.tsx?raw";
import { VariantAccordion } from "./examples/VariantAccordion.tsx";
import variantCode from "./examples/VariantAccordion.tsx?raw";
import { VariantsAccordion } from "./examples/VariantsAccordion.tsx";
import variantsCode from "./examples/VariantsAccordion.tsx?raw";
import "./AccordionPage.scss";

type StoryId =
  | "base"
  | "single"
  | "requiredOpen"
  | "icons"
  | "disabled"
  | "variants"
  | "sizes"
  | "controlled"
  | "rich";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; extra?: ReactNode };

export function AccordionPage() {
  const { t } = useTranslation("accordion");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseAccordion.tsx",
      code: baseCode,
      preview: <BaseAccordion common={common} />,
      extra: <CodeBlock code={demoCode} label="demo.ts" />,
    },
    { id: "single", file: "SingleAccordion.tsx", code: singleCode, preview: <SingleAccordion common={common} /> },
    {
      id: "requiredOpen",
      file: "RequiredOpenAccordion.tsx",
      code: requiredOpenCode,
      preview: <RequiredOpenAccordion common={common} />,
    },
    {
      id: "icons",
      file: "IconsAccordion.tsx",
      code: iconsCode,
      preview: <IconsAccordion {...t("stories.icons.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledAccordion.tsx",
      code: disabledCode,
      preview: <DisabledAccordion common={common} {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "variants",
      file: "VariantsAccordion.tsx",
      code: variantsCode,
      preview: <VariantsAccordion common={common} />,
    },
    { id: "sizes", file: "SizesAccordion.tsx", code: sizesCode, preview: <SizesAccordion common={common} /> },
    {
      id: "controlled",
      file: "ControlledAccordion.tsx",
      code: controlledCode,
      preview: <ControlledAccordion common={common} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "rich",
      file: "RichAccordion.tsx",
      code: richCode,
      preview: <RichAccordion common={common} {...t("stories.rich.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Accordion } from "@gem-org/gem-system"'
      />

      <AccordionPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file}>
            {item.preview}
          </DemoBlock>
          {item.extra}
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindAccordion.tsx">
            <TailwindAccordion common={common} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantAccordion.tsx">
            <VariantAccordion common={common} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="accordion-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledAccordion.tsx">
              <StyledAccordion common={common} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Accordion" to="/data-display/accordion/api" linkLabel={t("apiLink")} />
    </div>
  );
}
