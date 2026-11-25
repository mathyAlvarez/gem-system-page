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
import { PushStackPlayground } from "./PushStackPlayground.tsx";
import { AsChildPushStack } from "./examples/AsChildPushStack.tsx";
import asChildCode from "./examples/AsChildPushStack.tsx?raw";
import { AxisYPushStack } from "./examples/AxisYPushStack.tsx";
import axisYCode from "./examples/AxisYPushStack.tsx?raw";
import { BasePushStack } from "./examples/BasePushStack.tsx";
import baseCode from "./examples/BasePushStack.tsx?raw";
import { CallbacksPushStack } from "./examples/CallbacksPushStack.tsx";
import callbacksCode from "./examples/CallbacksPushStack.tsx?raw";
import { DirectionPushStack } from "./examples/DirectionPushStack.tsx";
import directionCode from "./examples/DirectionPushStack.tsx?raw";
import { DisabledPushStack } from "./examples/DisabledPushStack.tsx";
import disabledCode from "./examples/DisabledPushStack.tsx?raw";
import { KeepStatePushStack } from "./examples/KeepStatePushStack.tsx";
import keepStateCode from "./examples/KeepStatePushStack.tsx?raw";
import { ModePopLayoutPushStack } from "./examples/ModePopLayoutPushStack.tsx";
import modePopCode from "./examples/ModePopLayoutPushStack.tsx?raw";
import { ModeWaitPushStack } from "./examples/ModeWaitPushStack.tsx";
import modeWaitCode from "./examples/ModeWaitPushStack.tsx?raw";
import { PaginationColorsPushStack } from "./examples/PaginationColorsPushStack.tsx";
import paginationColorsCode from "./examples/PaginationColorsPushStack.tsx?raw";
import { PaginationOverlayPushStack } from "./examples/PaginationOverlayPushStack.tsx";
import paginationOverlayCode from "./examples/PaginationOverlayPushStack.tsx?raw";
import { PaginationTopPushStack } from "./examples/PaginationTopPushStack.tsx";
import paginationTopCode from "./examples/PaginationTopPushStack.tsx?raw";
import { StyledPushStack } from "./examples/StyledPushStack.tsx";
import styledCode from "./examples/StyledPushStack.tsx?raw";
import overridesCss from "./examples/push-stack-overrides.css?raw";
import { SwipePushStack } from "./examples/SwipePushStack.tsx";
import swipeCode from "./examples/SwipePushStack.tsx?raw";
import { TailwindPushStack } from "./examples/TailwindPushStack.tsx";
import tailwindCode from "./examples/TailwindPushStack.tsx?raw";
import { TimingPushStack } from "./examples/TimingPushStack.tsx";
import timingCode from "./examples/TimingPushStack.tsx?raw";
import { UtilitiesPushStack } from "./examples/UtilitiesPushStack.tsx";
import utilitiesCode from "./examples/UtilitiesPushStack.tsx?raw";
import { VariantPushStack } from "./examples/VariantPushStack.tsx";
import variantCode from "./examples/VariantPushStack.tsx?raw";
import "./PushStackPage.scss";

type StoryId =
  | "base"
  | "axisY"
  | "timing"
  | "modeWait"
  | "modePopLayout"
  | "keepState"
  | "direction"
  | "paginationOverlay"
  | "swipe"
  | "paginationTop"
  | "paginationColors"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/push-stack.css";
import { PushStack } from "@gem-org/gemsitions/push-stack";`;

const story = { returnObjects: true } as const;

export function PushStackPage() {
  const { t } = useTranslation("pushStack");

  const stories: Story[] = [
    {
      id: "base",
      file: "BasePushStack.tsx",
      code: baseCode,
      preview: <BasePushStack {...t("stories.base.texts", story)} />,
    },
    {
      id: "axisY",
      file: "AxisYPushStack.tsx",
      code: axisYCode,
      preview: <AxisYPushStack {...t("stories.axisY.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingPushStack.tsx",
      code: timingCode,
      preview: <TimingPushStack {...t("stories.timing.texts", story)} />,
    },
    {
      id: "modeWait",
      file: "ModeWaitPushStack.tsx",
      code: modeWaitCode,
      preview: <ModeWaitPushStack {...t("stories.modeWait.texts", story)} />,
    },
    {
      id: "modePopLayout",
      file: "ModePopLayoutPushStack.tsx",
      code: modePopCode,
      preview: <ModePopLayoutPushStack {...t("stories.modePopLayout.texts", story)} />,
    },
    {
      id: "keepState",
      file: "KeepStatePushStack.tsx",
      code: keepStateCode,
      preview: <KeepStatePushStack {...t("stories.keepState.texts", story)} />,
    },
    {
      id: "direction",
      file: "DirectionPushStack.tsx",
      code: directionCode,
      preview: <DirectionPushStack {...t("stories.direction.texts", story)} />,
    },
    {
      id: "paginationOverlay",
      file: "PaginationOverlayPushStack.tsx",
      code: paginationOverlayCode,
      preview: <PaginationOverlayPushStack {...t("stories.paginationOverlay.texts", story)} />,
    },
    {
      id: "swipe",
      file: "SwipePushStack.tsx",
      code: swipeCode,
      preview: <SwipePushStack {...t("stories.swipe.texts", story)} />,
    },
    {
      id: "paginationTop",
      file: "PaginationTopPushStack.tsx",
      code: paginationTopCode,
      preview: <PaginationTopPushStack {...t("stories.paginationTop.texts", story)} />,
    },
    {
      id: "paginationColors",
      file: "PaginationColorsPushStack.tsx",
      code: paginationColorsCode,
      preview: <PaginationColorsPushStack {...t("stories.paginationColors.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksPushStack.tsx",
      code: callbacksCode,
      preview: <CallbacksPushStack {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledPushStack.tsx",
      code: disabledCode,
      preview: <DisabledPushStack {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildPushStack.tsx",
      code: asChildCode,
      preview: <AsChildPushStack {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesPushStack.tsx",
      code: utilitiesCode,
      preview: <UtilitiesPushStack {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <PushStackPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindPushStack.tsx" stack>
            <TailwindPushStack {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantPushStack.tsx" stack>
            <VariantPushStack {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="push-stack-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledPushStack.tsx" stack>
              <StyledPushStack {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="PushStack"
        to="/transitions/views-layouts/push-stack/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
