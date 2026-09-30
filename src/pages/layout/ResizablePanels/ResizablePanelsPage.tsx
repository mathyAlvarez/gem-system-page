import type { ReactNode } from "react";
import { Typography } from "@gem-org/gem-system";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { ApiTable } from "../../../components/ApiTable.tsx";
import { propText } from "../../../components/PropText.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { ResizablePanelsPlayground } from "./ResizablePanelsPlayground.tsx";
import { resizableKeyActions } from "./resizablePanelsDocs.ts";
import { BaseResizable } from "./examples/BaseResizable.tsx";
import baseCode from "./examples/BaseResizable.tsx?raw";
import { CollapsibleResizable } from "./examples/CollapsibleResizable.tsx";
import collapsibleCode from "./examples/CollapsibleResizable.tsx?raw";
import { ControlledResizable } from "./examples/ControlledResizable.tsx";
import controlledCode from "./examples/ControlledResizable.tsx?raw";
import { CustomIconResizable } from "./examples/CustomIconResizable.tsx";
import customIconCode from "./examples/CustomIconResizable.tsx?raw";
import { CustomizationResizable } from "./examples/CustomizationResizable.tsx";
import customizationCode from "./examples/CustomizationResizable.tsx?raw";
import { DisabledResizable } from "./examples/DisabledResizable.tsx";
import disabledCode from "./examples/DisabledResizable.tsx?raw";
import { MobileResizable } from "./examples/MobileResizable.tsx";
import mobileCode from "./examples/MobileResizable.tsx?raw";
import paneCode from "./examples/Pane.tsx?raw";
import demoCss from "./examples/resizable-demo.css?raw";
import overridesCss from "./examples/resizable-overrides.css?raw";
import { ScrollAreaResizable } from "./examples/ScrollAreaResizable.tsx";
import scrollAreaCode from "./examples/ScrollAreaResizable.tsx?raw";
import { SizesResizable } from "./examples/SizesResizable.tsx";
import sizesCode from "./examples/SizesResizable.tsx?raw";
import { StyledResizables } from "./examples/StyledResizables.tsx";
import styledCode from "./examples/StyledResizables.tsx?raw";
import { TailwindResizable } from "./examples/TailwindResizable.tsx";
import tailwindCode from "./examples/TailwindResizable.tsx?raw";
import { ThreePanesResizable } from "./examples/ThreePanesResizable.tsx";
import threePanesCode from "./examples/ThreePanesResizable.tsx?raw";
import { VariantResizables } from "./examples/VariantResizable.tsx";
import variantCode from "./examples/VariantResizable.tsx?raw";
import { VerticalResizable } from "./examples/VerticalResizable.tsx";
import verticalCode from "./examples/VerticalResizable.tsx?raw";
import { WithoutGripResizable } from "./examples/WithoutGripResizable.tsx";
import withoutGripCode from "./examples/WithoutGripResizable.tsx?raw";
import "./ResizablePanelsPage.scss";

type StoryId =
  | "base"
  | "vertical"
  | "threePanes"
  | "collapsible"
  | "scrollArea"
  | "sizes"
  | "controlled"
  | "customization"
  | "customIcon"
  | "withoutGrip"
  | "disabled"
  | "mobile";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function ResizablePanelsPage() {
  const { t } = useTranslation("resizablePanels");
  const texts = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseResizable.tsx",
      code: baseCode,
      preview: <BaseResizable {...t("stories.base.texts", texts)} />,
      extra: (
        <>
          <CodeBlock code={paneCode} label="Pane.tsx" language="typescript" />
          <CodeBlock code={demoCss} label="resizable-demo.css" language="css" />
        </>
      ),
    },
    {
      id: "vertical",
      file: "VerticalResizable.tsx",
      code: verticalCode,
      preview: <VerticalResizable {...t("stories.vertical.texts", texts)} />,
    },
    {
      id: "threePanes",
      file: "ThreePanesResizable.tsx",
      code: threePanesCode,
      preview: <ThreePanesResizable {...t("stories.threePanes.texts", texts)} />,
    },
    {
      id: "collapsible",
      file: "CollapsibleResizable.tsx",
      code: collapsibleCode,
      preview: <CollapsibleResizable {...t("stories.collapsible.texts", texts)} />,
      extra: (
        <ApiTable
          columns={[t("keyboard.columns.keys"), t("keyboard.columns.action")]}
          rows={resizableKeyActions.map((id) => ({
            id,
            cells: [
              <code key="keys" className="docs-api-table__name">{t(`keyboard.items.${id}.keys`)}</code>,
              <Typography key="action" variant="body">
                {propText(t(`keyboard.items.${id}.action`))}
              </Typography>,
            ],
          }))}
        />
      ),
    },
    {
      id: "scrollArea",
      file: "ScrollAreaResizable.tsx",
      code: scrollAreaCode,
      preview: <ScrollAreaResizable {...t("stories.scrollArea.texts", texts)} />,
    },
    {
      id: "sizes",
      file: "SizesResizable.tsx",
      code: sizesCode,
      preview: <SizesResizable {...t("stories.sizes.texts", texts)} />,
    },
    {
      id: "controlled",
      file: "ControlledResizable.tsx",
      code: controlledCode,
      preview: <ControlledResizable {...t("stories.controlled.texts", texts)} />,
    },
    {
      id: "customization",
      file: "CustomizationResizable.tsx",
      code: customizationCode,
      preview: <CustomizationResizable {...t("stories.customization.texts", texts)} />,
    },
    {
      id: "customIcon",
      file: "CustomIconResizable.tsx",
      code: customIconCode,
      preview: <CustomIconResizable {...t("stories.customIcon.texts", texts)} />,
    },
    {
      id: "withoutGrip",
      file: "WithoutGripResizable.tsx",
      code: withoutGripCode,
      preview: <WithoutGripResizable {...t("stories.withoutGrip.texts", texts)} />,
    },
    {
      id: "disabled",
      file: "DisabledResizable.tsx",
      code: disabledCode,
      preview: <DisabledResizable {...t("stories.disabled.texts", texts)} />,
    },
    {
      id: "mobile",
      file: "MobileResizable.tsx",
      code: mobileCode,
      preview: <MobileResizable {...t("stories.mobile.texts", texts)} />,
    },
  ];

  const styleTexts = t("styles.texts", texts);

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system"'
      />

      <ResizablePanelsPlayground />

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

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindResizable.tsx" stack>
            <TailwindResizable start={styleTexts.start} end={styleTexts.end} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantResizable.tsx" stack>
            <VariantResizables start={styleTexts.start} end={styleTexts.end} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="resizable-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledResizables.tsx" stack>
              <StyledResizables explorer={styleTexts.explorer} editor={styleTexts.editor} files={styleTexts.files} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="ResizablePanels" to="/layout/resizable-panels/api" linkLabel={t("apiLink")} />
    </div>
  );
}
