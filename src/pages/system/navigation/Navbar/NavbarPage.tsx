import type { ReactNode } from "react";
import { Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import { ApiTable } from "../../../../components/ApiTable.tsx";
import { propText } from "../../../../components/PropText.tsx";
import {
  CodeBlock,
  DemoBlock,
  DocsPageHeader,
  DocsSection,
} from "../../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../../components/StyleChangesSection.tsx";
import { NavbarPlayground } from "./NavbarPlayground.tsx";
import { navbarBreakpointWidths } from "./navbarDocs.ts";
import { BaseNavbar } from "./examples/BaseNavbar.tsx";
import baseCode from "./examples/BaseNavbar.tsx?raw";
import { BrandOnlyNavbar } from "./examples/BrandOnlyNavbar.tsx";
import brandOnlyCode from "./examples/BrandOnlyNavbar.tsx?raw";
import { ControlledNavbar } from "./examples/ControlledNavbar.tsx";
import controlledCode from "./examples/ControlledNavbar.tsx?raw";
import demoCode from "./examples/demo.ts?raw";
import brandCode from "./examples/DemoBrand.tsx?raw";
import { ItemsNavbar } from "./examples/ItemsNavbar.tsx";
import itemsCode from "./examples/ItemsNavbar.tsx?raw";
import demoCss from "./examples/navbar-demo.css?raw";
import overridesCss from "./examples/navbar-overrides.css?raw";
import frameCode from "./examples/NavbarFrame.tsx?raw";
import { ResponsiveNavbar } from "./examples/ResponsiveNavbar.tsx";
import responsiveCode from "./examples/ResponsiveNavbar.tsx?raw";
import { ShadowNavbar } from "./examples/ShadowNavbar.tsx";
import shadowCode from "./examples/ShadowNavbar.tsx?raw";
import { SlotsNavbar } from "./examples/SlotsNavbar.tsx";
import slotsCode from "./examples/SlotsNavbar.tsx?raw";
import { StickyNavbar } from "./examples/StickyNavbar.tsx";
import stickyCode from "./examples/StickyNavbar.tsx?raw";
import { StyledNavbars } from "./examples/StyledNavbars.tsx";
import styledCode from "./examples/StyledNavbars.tsx?raw";
import { TailwindNavbar } from "./examples/TailwindNavbar.tsx";
import tailwindCode from "./examples/TailwindNavbar.tsx?raw";
import { VariantNavbars } from "./examples/VariantNavbar.tsx";
import variantCode from "./examples/VariantNavbar.tsx?raw";
import "./NavbarPage.scss";

type StoryId =
  "base" | "items" | "responsive" | "controlled" | "sticky" | "shadow" | "brandOnly" | "slots";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function NavbarPage() {
  const { t } = useTranslation("navbar");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseNavbar.tsx",
      code: baseCode,
      preview: <BaseNavbar texts={texts} note={t("stories.base.note")} />,
      extra: (
        <>
          <CodeBlock code={demoCode} label="demo.ts" language="typescript" />
          <CodeBlock code={brandCode} label="DemoBrand.tsx" language="typescript" />
          <CodeBlock code={frameCode} label="NavbarFrame.tsx" language="typescript" />
          <CodeBlock code={demoCss} label="navbar-demo.css" language="css" />
        </>
      ),
    },
    {
      id: "items",
      file: "ItemsNavbar.tsx",
      code: itemsCode,
      preview: <ItemsNavbar texts={texts} {...t("stories.items.texts", story)} />,
    },
    {
      id: "responsive",
      file: "ResponsiveNavbar.tsx",
      code: responsiveCode,
      preview: <ResponsiveNavbar texts={texts} />,
      extra: (
        <ApiTable
          columns={[
            t("breakpoints.columns.breakpoint"),
            t("breakpoints.columns.width"),
            t("breakpoints.columns.usage"),
          ]}
          rows={navbarBreakpointWidths.map((item) => ({
            id: item.breakpoint,
            cells: [
              <code
                key="breakpoint"
                className="docs-api-table__name"
              >{`"${item.breakpoint}"`}</code>,
              <code key="width" className="docs-api-table__code">{`< ${item.width}`}</code>,
              <Typography key="usage" variant="body">
                {propText(t(`breakpoints.items.${item.breakpoint}`))}
              </Typography>,
            ],
          }))}
        />
      ),
    },
    {
      id: "controlled",
      file: "ControlledNavbar.tsx",
      code: controlledCode,
      preview: <ControlledNavbar texts={texts} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "sticky",
      file: "StickyNavbar.tsx",
      code: stickyCode,
      preview: <StickyNavbar texts={texts} {...t("stories.sticky.texts", story)} />,
    },
    {
      id: "shadow",
      file: "ShadowNavbar.tsx",
      code: shadowCode,
      preview: <ShadowNavbar texts={texts} />,
    },
    {
      id: "brandOnly",
      file: "BrandOnlyNavbar.tsx",
      code: brandOnlyCode,
      preview: <BrandOnlyNavbar texts={texts} note={t("stories.brandOnly.note")} />,
    },
    {
      id: "slots",
      file: "SlotsNavbar.tsx",
      code: slotsCode,
      preview: <SlotsNavbar texts={texts} {...t("stories.slots.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Navbar } from "@gem-org/gem-system"'
      />

      <NavbarPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          {item.extra}
          <DemoBlock code={item.code} label={item.file} stack>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindNavbar.tsx" stack>
            <TailwindNavbar texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantNavbar.tsx" stack>
            <VariantNavbars texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="navbar-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledNavbars.tsx" stack>
              <StyledNavbars texts={texts} account={t("stories.slots.texts.account")} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Navbar"
        to="/system/navigation/navbar/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
