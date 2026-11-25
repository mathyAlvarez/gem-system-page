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
import { SharedLayoutPlayground } from "./SharedLayoutPlayground.tsx";
import { AsChildSharedLayout } from "./examples/AsChildSharedLayout.tsx";
import asChildCode from "./examples/AsChildSharedLayout.tsx?raw";
import { BaseSharedLayout } from "./examples/BaseSharedLayout.tsx";
import baseCode from "./examples/BaseSharedLayout.tsx?raw";
import { CallbacksSharedLayout } from "./examples/CallbacksSharedLayout.tsx";
import callbacksCode from "./examples/CallbacksSharedLayout.tsx?raw";
import { CrossfadeSharedLayout } from "./examples/CrossfadeSharedLayout.tsx";
import crossfadeCode from "./examples/CrossfadeSharedLayout.tsx?raw";
import { DisabledSharedLayout } from "./examples/DisabledSharedLayout.tsx";
import disabledCode from "./examples/DisabledSharedLayout.tsx?raw";
import { GallerySharedLayout } from "./examples/GallerySharedLayout.tsx";
import galleryCode from "./examples/GallerySharedLayout.tsx?raw";
import { GridSharedLayout } from "./examples/GridSharedLayout.tsx";
import gridCode from "./examples/GridSharedLayout.tsx?raw";
import { LayoutIdSharedLayout } from "./examples/LayoutIdSharedLayout.tsx";
import layoutIdCode from "./examples/LayoutIdSharedLayout.tsx?raw";
import { RenderPropSharedLayout } from "./examples/RenderPropSharedLayout.tsx";
import renderPropCode from "./examples/RenderPropSharedLayout.tsx?raw";
import { StyledSharedLayout } from "./examples/StyledSharedLayout.tsx";
import styledCode from "./examples/StyledSharedLayout.tsx?raw";
import overridesCss from "./examples/shared-layout-overrides.css?raw";
import { TailwindSharedLayout } from "./examples/TailwindSharedLayout.tsx";
import tailwindCode from "./examples/TailwindSharedLayout.tsx?raw";
import { TimingSharedLayout } from "./examples/TimingSharedLayout.tsx";
import timingCode from "./examples/TimingSharedLayout.tsx?raw";
import { UtilitiesSharedLayout } from "./examples/UtilitiesSharedLayout.tsx";
import utilitiesCode from "./examples/UtilitiesSharedLayout.tsx?raw";
import { VariantSharedLayout } from "./examples/VariantSharedLayout.tsx";
import variantCode from "./examples/VariantSharedLayout.tsx?raw";
import "./SharedLayoutPage.scss";

type StoryId =
  | "base"
  | "renderProp"
  | "timing"
  | "crossfade"
  | "grid"
  | "layoutId"
  | "gallery"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; overflow?: boolean };

const importCode = `import "@gem-org/gemsitions/shared-layout.css";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";`;

const story = { returnObjects: true } as const;

export function SharedLayoutPage() {
  const { t } = useTranslation("sharedLayout");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSharedLayout.tsx",
      code: baseCode,
      preview: <BaseSharedLayout {...t("stories.base.texts", story)} />,
    },
    {
      id: "renderProp",
      file: "RenderPropSharedLayout.tsx",
      code: renderPropCode,
      preview: <RenderPropSharedLayout {...t("stories.renderProp.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingSharedLayout.tsx",
      code: timingCode,
      preview: <TimingSharedLayout {...t("stories.timing.texts", story)} />,
    },
    {
      id: "crossfade",
      file: "CrossfadeSharedLayout.tsx",
      code: crossfadeCode,
      preview: <CrossfadeSharedLayout {...t("stories.crossfade.texts", story)} />,
    },
    {
      id: "grid",
      file: "GridSharedLayout.tsx",
      code: gridCode,
      preview: <GridSharedLayout {...t("stories.grid.texts", story)} />,
    },
    {
      id: "layoutId",
      file: "LayoutIdSharedLayout.tsx",
      code: layoutIdCode,
      overflow: true,
      preview: <LayoutIdSharedLayout {...t("stories.layoutId.texts", story)} />,
    },
    {
      id: "gallery",
      file: "GallerySharedLayout.tsx",
      code: galleryCode,
      preview: <GallerySharedLayout {...t("stories.gallery.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksSharedLayout.tsx",
      code: callbacksCode,
      preview: <CallbacksSharedLayout {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledSharedLayout.tsx",
      code: disabledCode,
      preview: <DisabledSharedLayout {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildSharedLayout.tsx",
      code: asChildCode,
      preview: <AsChildSharedLayout {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesSharedLayout.tsx",
      code: utilitiesCode,
      preview: <UtilitiesSharedLayout {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <SharedLayoutPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack overflow={item.overflow}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindSharedLayout.tsx" stack>
            <TailwindSharedLayout {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSharedLayout.tsx" stack>
            <VariantSharedLayout {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="shared-layout-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSharedLayout.tsx" stack>
              <StyledSharedLayout {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="SharedLayout"
        to="/transitions/morphing-layout/shared-layout/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
