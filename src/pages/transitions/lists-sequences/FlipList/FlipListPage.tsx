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
import { FlipListPlayground } from "./FlipListPlayground.tsx";
import { AsChildFlipList } from "./examples/AsChildFlipList.tsx";
import asChildCode from "./examples/AsChildFlipList.tsx?raw";
import { AxisYFlipList } from "./examples/AxisYFlipList.tsx";
import axisYCode from "./examples/AxisYFlipList.tsx?raw";
import { BaseFlipList } from "./examples/BaseFlipList.tsx";
import baseCode from "./examples/BaseFlipList.tsx?raw";
import { CallbacksFlipList } from "./examples/CallbacksFlipList.tsx";
import callbacksCode from "./examples/CallbacksFlipList.tsx?raw";
import { DisabledFlipList } from "./examples/DisabledFlipList.tsx";
import disabledCode from "./examples/DisabledFlipList.tsx?raw";
import { GridFlipList } from "./examples/GridFlipList.tsx";
import gridCode from "./examples/GridFlipList.tsx?raw";
import { MaintainScrollFlipList } from "./examples/MaintainScrollFlipList.tsx";
import maintainScrollCode from "./examples/MaintainScrollFlipList.tsx?raw";
import { StaggerKeyFlipList } from "./examples/StaggerKeyFlipList.tsx";
import staggerKeyCode from "./examples/StaggerKeyFlipList.tsx?raw";
import { StyledFlipList } from "./examples/StyledFlipList.tsx";
import styledCode from "./examples/StyledFlipList.tsx?raw";
import overridesCss from "./examples/flip-list-overrides.css?raw";
import { TailwindFlipList } from "./examples/TailwindFlipList.tsx";
import tailwindCode from "./examples/TailwindFlipList.tsx?raw";
import { TimingFlipList } from "./examples/TimingFlipList.tsx";
import timingCode from "./examples/TimingFlipList.tsx?raw";
import { UtilitiesFlipList } from "./examples/UtilitiesFlipList.tsx";
import utilitiesCode from "./examples/UtilitiesFlipList.tsx?raw";
import { VariantFlipList } from "./examples/VariantFlipList.tsx";
import variantCode from "./examples/VariantFlipList.tsx?raw";
import "./FlipListPage.scss";

type StoryId =
  | "base"
  | "grid"
  | "timing"
  | "axisY"
  | "staggerKey"
  | "maintainScroll"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/flip-list.css";
import { FlipList } from "@gem-org/gemsitions/flip-list";`;

const story = { returnObjects: true } as const;

export function FlipListPage() {
  const { t } = useTranslation("flipList");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseFlipList.tsx",
      code: baseCode,
      preview: <BaseFlipList {...t("stories.base.texts", story)} />,
    },
    {
      id: "grid",
      file: "GridFlipList.tsx",
      code: gridCode,
      preview: <GridFlipList {...t("stories.grid.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingFlipList.tsx",
      code: timingCode,
      preview: <TimingFlipList {...t("stories.timing.texts", story)} />,
    },
    {
      id: "axisY",
      file: "AxisYFlipList.tsx",
      code: axisYCode,
      preview: <AxisYFlipList {...t("stories.axisY.texts", story)} />,
    },
    {
      id: "staggerKey",
      file: "StaggerKeyFlipList.tsx",
      code: staggerKeyCode,
      preview: <StaggerKeyFlipList {...t("stories.staggerKey.texts", story)} />,
    },
    {
      id: "maintainScroll",
      file: "MaintainScrollFlipList.tsx",
      code: maintainScrollCode,
      preview: <MaintainScrollFlipList {...t("stories.maintainScroll.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksFlipList.tsx",
      code: callbacksCode,
      preview: <CallbacksFlipList {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledFlipList.tsx",
      code: disabledCode,
      preview: <DisabledFlipList {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildFlipList.tsx",
      code: asChildCode,
      preview: <AsChildFlipList {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesFlipList.tsx",
      code: utilitiesCode,
      preview: <UtilitiesFlipList {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <FlipListPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFlipList.tsx" stack>
            <TailwindFlipList {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFlipList.tsx" stack>
            <VariantFlipList {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="flip-list-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFlipList.tsx" stack>
              <StyledFlipList {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="FlipList"
        to="/transitions/lists-sequences/flip-list/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
