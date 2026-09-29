import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { FlexPlayground } from "./FlexPlayground.tsx";
import { AlignContentFlex } from "./examples/AlignContentFlex.tsx";
import alignContentCode from "./examples/AlignContentFlex.tsx?raw";
import { AlignFlex } from "./examples/AlignFlex.tsx";
import alignCode from "./examples/AlignFlex.tsx?raw";
import { CenteredFlex } from "./examples/CenteredFlex.tsx";
import centeredCode from "./examples/CenteredFlex.tsx?raw";
import { DirectionFlex } from "./examples/DirectionFlex.tsx";
import directionCode from "./examples/DirectionFlex.tsx?raw";
import demoCss from "./examples/flex-demo.css?raw";
import overridesCss from "./examples/flex-overrides.css?raw";
import itemCode from "./examples/FlexItem.tsx?raw";
import { FlexWithRow } from "./examples/FlexWithRow.tsx";
import withRowCode from "./examples/FlexWithRow.tsx?raw";
import { GapFlex } from "./examples/GapFlex.tsx";
import gapCode from "./examples/GapFlex.tsx?raw";
import { GrowFlex } from "./examples/GrowFlex.tsx";
import growCode from "./examples/GrowFlex.tsx?raw";
import { InlineFlex } from "./examples/InlineFlex.tsx";
import inlineCode from "./examples/InlineFlex.tsx?raw";
import { JustifyFlex } from "./examples/JustifyFlex.tsx";
import justifyCode from "./examples/JustifyFlex.tsx?raw";
import { StackFlex } from "./examples/StackFlex.tsx";
import stackCode from "./examples/StackFlex.tsx?raw";
import { StyledFlexes } from "./examples/StyledFlexes.tsx";
import styledCode from "./examples/StyledFlexes.tsx?raw";
import { TailwindFlex } from "./examples/TailwindFlex.tsx";
import tailwindCode from "./examples/TailwindFlex.tsx?raw";
import { ToolbarFlex } from "./examples/ToolbarFlex.tsx";
import toolbarCode from "./examples/ToolbarFlex.tsx?raw";
import { VariantFlexes } from "./examples/VariantFlex.tsx";
import variantCode from "./examples/VariantFlex.tsx?raw";
import { WrapFlex } from "./examples/WrapFlex.tsx";
import wrapCode from "./examples/WrapFlex.tsx?raw";
import "./FlexPage.scss";

type StoryId =
  | "toolbar"
  | "direction"
  | "stack"
  | "gap"
  | "wrap"
  | "justify"
  | "align"
  | "alignContent"
  | "grow"
  | "inline"
  | "centered"
  | "withRow";

type Story = {
  id: StoryId;
  file: string;
  code: string;
  preview: ReactNode;
  extra?: ReactNode;
};

export function FlexPage() {
  const { t } = useTranslation("flex");

  const stories: Story[] = [
    {
      id: "toolbar",
      file: "ToolbarFlex.tsx",
      code: toolbarCode,
      preview: <ToolbarFlex {...t("stories.toolbar.texts", { returnObjects: true })} />,
      extra: (
        <>
          <CodeBlock code={itemCode} label="FlexItem.tsx" language="typescript" />
          <CodeBlock code={demoCss} label="flex-demo.css" language="css" />
        </>
      ),
    },
    { id: "direction", file: "DirectionFlex.tsx", code: directionCode, preview: <DirectionFlex /> },
    {
      id: "stack",
      file: "StackFlex.tsx",
      code: stackCode,
      preview: <StackFlex {...t("stories.stack.texts", { returnObjects: true })} />,
    },
    { id: "gap", file: "GapFlex.tsx", code: gapCode, preview: <GapFlex /> },
    {
      id: "wrap",
      file: "WrapFlex.tsx",
      code: wrapCode,
      preview: <WrapFlex tags={t("stories.wrap.tags", { returnObjects: true })} />,
    },
    { id: "justify", file: "JustifyFlex.tsx", code: justifyCode, preview: <JustifyFlex /> },
    { id: "align", file: "AlignFlex.tsx", code: alignCode, preview: <AlignFlex /> },
    { id: "alignContent", file: "AlignContentFlex.tsx", code: alignContentCode, preview: <AlignContentFlex /> },
    { id: "grow", file: "GrowFlex.tsx", code: growCode, preview: <GrowFlex longText={t("stories.grow.longText")} /> },
    {
      id: "inline",
      file: "InlineFlex.tsx",
      code: inlineCode,
      preview: <InlineFlex {...t("stories.inline.texts", { returnObjects: true })} />,
    },
    {
      id: "centered",
      file: "CenteredFlex.tsx",
      code: centeredCode,
      preview: <CenteredFlex {...t("stories.centered.texts", { returnObjects: true })} />,
    },
    {
      id: "withRow",
      file: "FlexWithRow.tsx",
      code: withRowCode,
      preview: <FlexWithRow texts={t("stories.withRow.texts", { returnObjects: true })} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Flex } from "@gem-org/gem-system"'
      />

      <FlexPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindFlex.tsx" stack>
            <TailwindFlex />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantFlex.tsx" stack>
            <VariantFlexes />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="flex-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledFlexes.tsx" stack>
              <StyledFlexes />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Flex" to="/layout/flex/api" linkLabel={t("apiLink")} />
    </div>
  );
}
