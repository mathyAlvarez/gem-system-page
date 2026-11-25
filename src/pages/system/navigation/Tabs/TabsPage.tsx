import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { TabsPlayground } from "./TabsPlayground.tsx";
import { BaseTabs } from "./examples/BaseTabs.tsx";
import baseCode from "./examples/BaseTabs.tsx?raw";
import { ControlledTabs } from "./examples/ControlledTabs.tsx";
import controlledCode from "./examples/ControlledTabs.tsx?raw";
import { DisabledTabs } from "./examples/DisabledTabs.tsx";
import disabledCode from "./examples/DisabledTabs.tsx?raw";
import { FullWidthTabs } from "./examples/FullWidthTabs.tsx";
import fullWidthCode from "./examples/FullWidthTabs.tsx?raw";
import { IconsTabs } from "./examples/IconsTabs.tsx";
import iconsCode from "./examples/IconsTabs.tsx?raw";
import { ManualTabs } from "./examples/ManualTabs.tsx";
import manualCode from "./examples/ManualTabs.tsx?raw";
import { MobileTabs } from "./examples/MobileTabs.tsx";
import mobileCode from "./examples/MobileTabs.tsx?raw";
import { SizesTabs } from "./examples/SizesTabs.tsx";
import sizesCode from "./examples/SizesTabs.tsx?raw";
import { StyledTabs } from "./examples/StyledTabs.tsx";
import styledCode from "./examples/StyledTabs.tsx?raw";
import overridesCss from "./examples/tabs-overrides.css?raw";
import { TailwindTabs } from "./examples/TailwindTabs.tsx";
import tailwindCode from "./examples/TailwindTabs.tsx?raw";
import { VariantsTabs } from "./examples/VariantsTabs.tsx";
import variantsCode from "./examples/VariantsTabs.tsx?raw";
import { VariantTabs } from "./examples/VariantTabs.tsx";
import variantCode from "./examples/VariantTabs.tsx?raw";
import { VerticalTabs } from "./examples/VerticalTabs.tsx";
import verticalCode from "./examples/VerticalTabs.tsx?raw";
import "./TabsPage.scss";

type StoryId =
  | "base"
  | "icons"
  | "disabled"
  | "vertical"
  | "manual"
  | "variants"
  | "sizes"
  | "fullWidth"
  | "controlled"
  | "mobile";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function TabsPage() {
  const { t } = useTranslation("tabs");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseTabs.tsx", code: baseCode, preview: <BaseTabs texts={texts} /> },
    { id: "icons", file: "IconsTabs.tsx", code: iconsCode, preview: <IconsTabs texts={texts} /> },
    {
      id: "disabled",
      file: "DisabledTabs.tsx",
      code: disabledCode,
      preview: <DisabledTabs texts={texts} />,
    },
    {
      id: "vertical",
      file: "VerticalTabs.tsx",
      code: verticalCode,
      preview: <VerticalTabs texts={texts} />,
    },
    {
      id: "manual",
      file: "ManualTabs.tsx",
      code: manualCode,
      preview: <ManualTabs texts={texts} />,
    },
    {
      id: "variants",
      file: "VariantsTabs.tsx",
      code: variantsCode,
      preview: <VariantsTabs texts={texts} />,
    },
    { id: "sizes", file: "SizesTabs.tsx", code: sizesCode, preview: <SizesTabs texts={texts} /> },
    {
      id: "fullWidth",
      file: "FullWidthTabs.tsx",
      code: fullWidthCode,
      preview: <FullWidthTabs texts={texts} />,
    },
    {
      id: "controlled",
      file: "ControlledTabs.tsx",
      code: controlledCode,
      preview: <ControlledTabs texts={texts} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "mobile",
      file: "MobileTabs.tsx",
      code: mobileCode,
      preview: <MobileTabs texts={texts} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Tabs } from "@gem-org/gem-system"'
      />

      <TabsPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindTabs.tsx" stack>
            <TailwindTabs texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTabs.tsx" stack>
            <VariantTabs texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="tabs-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTabs.tsx" stack>
              <StyledTabs texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Tabs" to="/system/navigation/tabs/api" linkLabel={t("apiLink")} />
    </div>
  );
}
