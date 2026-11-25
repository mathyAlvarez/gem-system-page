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
import { CrossFadeViewPlayground } from "./CrossFadeViewPlayground.tsx";
import { AsChildCrossFadeView } from "./examples/AsChildCrossFadeView.tsx";
import asChildCode from "./examples/AsChildCrossFadeView.tsx?raw";
import { BaseCrossFadeView } from "./examples/BaseCrossFadeView.tsx";
import baseCode from "./examples/BaseCrossFadeView.tsx?raw";
import { CallbacksCrossFadeView } from "./examples/CallbacksCrossFadeView.tsx";
import callbacksCode from "./examples/CallbacksCrossFadeView.tsx?raw";
import { DisabledCrossFadeView } from "./examples/DisabledCrossFadeView.tsx";
import disabledCode from "./examples/DisabledCrossFadeView.tsx?raw";
import { HeightsCrossFadeView } from "./examples/HeightsCrossFadeView.tsx";
import heightsCode from "./examples/HeightsCrossFadeView.tsx?raw";
import { KeepStateCrossFadeView } from "./examples/KeepStateCrossFadeView.tsx";
import keepStateCode from "./examples/KeepStateCrossFadeView.tsx?raw";
import { ModePopLayoutCrossFadeView } from "./examples/ModePopLayoutCrossFadeView.tsx";
import modePopCode from "./examples/ModePopLayoutCrossFadeView.tsx?raw";
import { ModeWaitCrossFadeView } from "./examples/ModeWaitCrossFadeView.tsx";
import modeWaitCode from "./examples/ModeWaitCrossFadeView.tsx?raw";
import { PaginationColorsCrossFadeView } from "./examples/PaginationColorsCrossFadeView.tsx";
import paginationColorsCode from "./examples/PaginationColorsCrossFadeView.tsx?raw";
import { PaginationOverlayCrossFadeView } from "./examples/PaginationOverlayCrossFadeView.tsx";
import paginationOverlayCode from "./examples/PaginationOverlayCrossFadeView.tsx?raw";
import { PaginationTopCrossFadeView } from "./examples/PaginationTopCrossFadeView.tsx";
import paginationTopCode from "./examples/PaginationTopCrossFadeView.tsx?raw";
import { StyledCrossFadeView } from "./examples/StyledCrossFadeView.tsx";
import styledCode from "./examples/StyledCrossFadeView.tsx?raw";
import overridesCss from "./examples/cross-fade-view-overrides.css?raw";
import { SwipeCrossFadeView } from "./examples/SwipeCrossFadeView.tsx";
import swipeCode from "./examples/SwipeCrossFadeView.tsx?raw";
import { TailwindCrossFadeView } from "./examples/TailwindCrossFadeView.tsx";
import tailwindCode from "./examples/TailwindCrossFadeView.tsx?raw";
import { TimingCrossFadeView } from "./examples/TimingCrossFadeView.tsx";
import timingCode from "./examples/TimingCrossFadeView.tsx?raw";
import { UtilitiesCrossFadeView } from "./examples/UtilitiesCrossFadeView.tsx";
import utilitiesCode from "./examples/UtilitiesCrossFadeView.tsx?raw";
import { VariantCrossFadeView } from "./examples/VariantCrossFadeView.tsx";
import variantCode from "./examples/VariantCrossFadeView.tsx?raw";
import { ViewKeyCrossFadeView } from "./examples/ViewKeyCrossFadeView.tsx";
import viewKeyCode from "./examples/ViewKeyCrossFadeView.tsx?raw";
import "./CrossFadeViewPage.scss";

type StoryId =
  | "base"
  | "timing"
  | "heights"
  | "viewKey"
  | "modeWait"
  | "modePopLayout"
  | "keepState"
  | "paginationOverlay"
  | "swipe"
  | "paginationTop"
  | "paginationColors"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/cross-fade-view.css";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";`;

const story = { returnObjects: true } as const;

export function CrossFadeViewPage() {
  const { t } = useTranslation("crossFadeView");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseCrossFadeView.tsx",
      code: baseCode,
      preview: <BaseCrossFadeView {...t("stories.base.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingCrossFadeView.tsx",
      code: timingCode,
      preview: <TimingCrossFadeView {...t("stories.timing.texts", story)} />,
    },
    {
      id: "heights",
      file: "HeightsCrossFadeView.tsx",
      code: heightsCode,
      preview: <HeightsCrossFadeView {...t("stories.heights.texts", story)} />,
    },
    {
      id: "viewKey",
      file: "ViewKeyCrossFadeView.tsx",
      code: viewKeyCode,
      preview: <ViewKeyCrossFadeView {...t("stories.viewKey.texts", story)} />,
    },
    {
      id: "modeWait",
      file: "ModeWaitCrossFadeView.tsx",
      code: modeWaitCode,
      preview: <ModeWaitCrossFadeView {...t("stories.modeWait.texts", story)} />,
    },
    {
      id: "modePopLayout",
      file: "ModePopLayoutCrossFadeView.tsx",
      code: modePopCode,
      preview: <ModePopLayoutCrossFadeView {...t("stories.modePopLayout.texts", story)} />,
    },
    {
      id: "keepState",
      file: "KeepStateCrossFadeView.tsx",
      code: keepStateCode,
      preview: <KeepStateCrossFadeView {...t("stories.keepState.texts", story)} />,
    },
    {
      id: "paginationOverlay",
      file: "PaginationOverlayCrossFadeView.tsx",
      code: paginationOverlayCode,
      preview: <PaginationOverlayCrossFadeView {...t("stories.paginationOverlay.texts", story)} />,
    },
    {
      id: "swipe",
      file: "SwipeCrossFadeView.tsx",
      code: swipeCode,
      preview: <SwipeCrossFadeView {...t("stories.swipe.texts", story)} />,
    },
    {
      id: "paginationTop",
      file: "PaginationTopCrossFadeView.tsx",
      code: paginationTopCode,
      preview: <PaginationTopCrossFadeView {...t("stories.paginationTop.texts", story)} />,
    },
    {
      id: "paginationColors",
      file: "PaginationColorsCrossFadeView.tsx",
      code: paginationColorsCode,
      preview: <PaginationColorsCrossFadeView {...t("stories.paginationColors.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksCrossFadeView.tsx",
      code: callbacksCode,
      preview: <CallbacksCrossFadeView {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledCrossFadeView.tsx",
      code: disabledCode,
      preview: <DisabledCrossFadeView {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildCrossFadeView.tsx",
      code: asChildCode,
      preview: <AsChildCrossFadeView {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesCrossFadeView.tsx",
      code: utilitiesCode,
      preview: <UtilitiesCrossFadeView {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <CrossFadeViewPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindCrossFadeView.tsx" stack>
            <TailwindCrossFadeView {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCrossFadeView.tsx" stack>
            <VariantCrossFadeView {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="cross-fade-view-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledCrossFadeView.tsx" stack>
              <StyledCrossFadeView {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="CrossFadeView"
        to="/transitions/views-layouts/cross-fade-view/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
