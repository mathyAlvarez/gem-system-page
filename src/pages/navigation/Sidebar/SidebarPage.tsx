import type { ReactNode } from "react";
import { Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { SidebarPlayground } from "./SidebarPlayground.tsx";
import { sidebarBreakpointWidths } from "./sidebarDocs.ts";
import appLayoutCode from "./examples/AppLayout.tsx?raw";
import { BaseSidebar } from "./examples/BaseSidebar.tsx";
import baseCode from "./examples/BaseSidebar.tsx?raw";
import { CollapsedSidebar } from "./examples/CollapsedSidebar.tsx";
import collapsedCode from "./examples/CollapsedSidebar.tsx?raw";
import { EndSidebar } from "./examples/EndSidebar.tsx";
import endCode from "./examples/EndSidebar.tsx?raw";
import { NestedSidebar } from "./examples/NestedSidebar.tsx";
import nestedCode from "./examples/NestedSidebar.tsx?raw";
import { ResponsiveSidebar } from "./examples/ResponsiveSidebar.tsx";
import responsiveCode from "./examples/ResponsiveSidebar.tsx?raw";
import overridesCss from "./examples/sidebar-overrides.css?raw";
import { SlotsSidebar } from "./examples/SlotsSidebar.tsx";
import slotsCode from "./examples/SlotsSidebar.tsx?raw";
import { StyledSidebars } from "./examples/StyledSidebars.tsx";
import styledCode from "./examples/StyledSidebars.tsx?raw";
import { TailwindSidebar } from "./examples/TailwindSidebar.tsx";
import tailwindCode from "./examples/TailwindSidebar.tsx?raw";
import { VariantSidebars } from "./examples/VariantSidebar.tsx";
import variantCode from "./examples/VariantSidebar.tsx?raw";
import "./SidebarPage.scss";

type StoryId = "base" | "collapsed" | "nested" | "end" | "slots" | "responsive";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function SidebarPage() {
  const { t } = useTranslation("sidebar");
  const texts = t("demo", { returnObjects: true });

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSidebar.tsx",
      code: baseCode,
      preview: <BaseSidebar texts={texts} note={t("stories.base.note")} />,
    },
    {
      id: "collapsed",
      file: "CollapsedSidebar.tsx",
      code: collapsedCode,
      preview: <CollapsedSidebar texts={texts} {...t("stories.collapsed.texts", { returnObjects: true })} />,
    },
    {
      id: "nested",
      file: "NestedSidebar.tsx",
      code: nestedCode,
      preview: <NestedSidebar texts={texts} note={t("stories.nested.note")} />,
    },
    {
      id: "end",
      file: "EndSidebar.tsx",
      code: endCode,
      preview: <EndSidebar texts={texts} note={t("stories.end.note")} />,
    },
    {
      id: "slots",
      file: "SlotsSidebar.tsx",
      code: slotsCode,
      preview: <SlotsSidebar texts={texts} note={t("stories.slots.note")} />,
    },
    {
      id: "responsive",
      file: "ResponsiveSidebar.tsx",
      code: responsiveCode,
      preview: <ResponsiveSidebar texts={texts} note={t("stories.responsive.note")} />,
      extra: (
        <ApiTable
          columns={[t("breakpoints.columns.breakpoint"), t("breakpoints.columns.width"), t("breakpoints.columns.usage")]}
          rows={sidebarBreakpointWidths.map((item) => ({
            id: item.breakpoint,
            cells: [
              <code key="breakpoint" className="docs-api-table__name">{`"${item.breakpoint}"`}</code>,
              <code key="width" className="docs-api-table__code">{item.width}</code>,
              <Typography key="usage" variant="body">
                {propText(t(`breakpoints.items.${item.breakpoint}`))}
              </Typography>,
            ],
          }))}
        />
      ),
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Sidebar } from "@gem-org/gem-system"'
      />

      <SidebarPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={t(`stories.${story.id}.title`)}
          description={t(`stories.${story.id}.description`)}
        >
          {story.extra}
          <DemoBlock code={story.code} label={story.file} stack>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <DocsSection title={t("position.title")} description={t("position.description")}>
        <CodeBlock code={appLayoutCode} label="AppLayout.tsx" language="typescript" />
      </DocsSection>

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindSidebar.tsx" stack>
            <TailwindSidebar texts={texts} note={t("styles.tailwindNote")} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSidebar.tsx" stack>
            <VariantSidebars texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="sidebar-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSidebars.tsx" stack>
              <StyledSidebars texts={texts} note={t("styles.cssNote")} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Sidebar" to="/navigation/sidebar/api" linkLabel={t("apiLink")} />
    </div>
  );
}
