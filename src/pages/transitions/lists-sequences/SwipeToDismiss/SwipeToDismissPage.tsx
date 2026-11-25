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
import { SwipeToDismissPlayground } from "./SwipeToDismissPlayground.tsx";
import { AsChildSwipeToDismiss } from "./examples/AsChildSwipeToDismiss.tsx";
import asChildCode from "./examples/AsChildSwipeToDismiss.tsx?raw";
import { BaseSwipeToDismiss } from "./examples/BaseSwipeToDismiss.tsx";
import baseCode from "./examples/BaseSwipeToDismiss.tsx?raw";
import { CallbacksSwipeToDismiss } from "./examples/CallbacksSwipeToDismiss.tsx";
import callbacksCode from "./examples/CallbacksSwipeToDismiss.tsx?raw";
import { DisabledSwipeToDismiss } from "./examples/DisabledSwipeToDismiss.tsx";
import disabledCode from "./examples/DisabledSwipeToDismiss.tsx?raw";
import { DismissDirectionSwipeToDismiss } from "./examples/DismissDirectionSwipeToDismiss.tsx";
import dismissDirectionCode from "./examples/DismissDirectionSwipeToDismiss.tsx?raw";
import { GestureCallbacksSwipeToDismiss } from "./examples/GestureCallbacksSwipeToDismiss.tsx";
import gestureCallbacksCode from "./examples/GestureCallbacksSwipeToDismiss.tsx?raw";
import { LeftOnlySwipeToDismiss } from "./examples/LeftOnlySwipeToDismiss.tsx";
import leftOnlyCode from "./examples/LeftOnlySwipeToDismiss.tsx?raw";
import { ListRowsSwipeToDismiss } from "./examples/ListRowsSwipeToDismiss.tsx";
import listRowsCode from "./examples/ListRowsSwipeToDismiss.tsx?raw";
import { MarkOverrideSwipeToDismiss } from "./examples/MarkOverrideSwipeToDismiss.tsx";
import markOverrideCode from "./examples/MarkOverrideSwipeToDismiss.tsx?raw";
import { MarkSelectedSwipeToDismiss } from "./examples/MarkSelectedSwipeToDismiss.tsx";
import markSelectedCode from "./examples/MarkSelectedSwipeToDismiss.tsx?raw";
import { RubberbandOffSwipeToDismiss } from "./examples/RubberbandOffSwipeToDismiss.tsx";
import rubberbandOffCode from "./examples/RubberbandOffSwipeToDismiss.tsx?raw";
import { StyledSwipeToDismiss } from "./examples/StyledSwipeToDismiss.tsx";
import styledCode from "./examples/StyledSwipeToDismiss.tsx?raw";
import overridesCss from "./examples/swipe-to-dismiss-overrides.css?raw";
import { TailwindSwipeToDismiss } from "./examples/TailwindSwipeToDismiss.tsx";
import tailwindCode from "./examples/TailwindSwipeToDismiss.tsx?raw";
import { TimingSwipeToDismiss } from "./examples/TimingSwipeToDismiss.tsx";
import timingCode from "./examples/TimingSwipeToDismiss.tsx?raw";
import { UtilitiesSwipeToDismiss } from "./examples/UtilitiesSwipeToDismiss.tsx";
import utilitiesCode from "./examples/UtilitiesSwipeToDismiss.tsx?raw";
import { VariantSwipeToDismiss } from "./examples/VariantSwipeToDismiss.tsx";
import variantCode from "./examples/VariantSwipeToDismiss.tsx?raw";
import { VerticalSwipeToDismiss } from "./examples/VerticalSwipeToDismiss.tsx";
import verticalCode from "./examples/VerticalSwipeToDismiss.tsx?raw";
import "./SwipeToDismissPage.scss";

type StoryId =
  | "base"
  | "vertical"
  | "leftOnly"
  | "rubberbandOff"
  | "dismissDirection"
  | "gestureCallbacks"
  | "markSelected"
  | "markOverride"
  | "timing"
  | "listRows"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/swipe-to-dismiss.css";
import { SwipeToDismiss } from "@gem-org/gemsitions/swipe-to-dismiss";`;

const story = { returnObjects: true } as const;

export function SwipeToDismissPage() {
  const { t } = useTranslation("swipeToDismiss");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseSwipeToDismiss.tsx",
      code: baseCode,
      preview: <BaseSwipeToDismiss {...t("stories.base.texts", story)} />,
    },
    {
      id: "vertical",
      file: "VerticalSwipeToDismiss.tsx",
      code: verticalCode,
      preview: <VerticalSwipeToDismiss {...t("stories.vertical.texts", story)} />,
    },
    {
      id: "leftOnly",
      file: "LeftOnlySwipeToDismiss.tsx",
      code: leftOnlyCode,
      preview: <LeftOnlySwipeToDismiss {...t("stories.leftOnly.texts", story)} />,
    },
    {
      id: "rubberbandOff",
      file: "RubberbandOffSwipeToDismiss.tsx",
      code: rubberbandOffCode,
      preview: <RubberbandOffSwipeToDismiss {...t("stories.rubberbandOff.texts", story)} />,
    },
    {
      id: "dismissDirection",
      file: "DismissDirectionSwipeToDismiss.tsx",
      code: dismissDirectionCode,
      preview: <DismissDirectionSwipeToDismiss {...t("stories.dismissDirection.texts", story)} />,
    },
    {
      id: "gestureCallbacks",
      file: "GestureCallbacksSwipeToDismiss.tsx",
      code: gestureCallbacksCode,
      preview: <GestureCallbacksSwipeToDismiss {...t("stories.gestureCallbacks.texts", story)} />,
    },
    {
      id: "markSelected",
      file: "MarkSelectedSwipeToDismiss.tsx",
      code: markSelectedCode,
      preview: <MarkSelectedSwipeToDismiss {...t("stories.markSelected.texts", story)} />,
    },
    {
      id: "markOverride",
      file: "MarkOverrideSwipeToDismiss.tsx",
      code: markOverrideCode,
      preview: <MarkOverrideSwipeToDismiss {...t("stories.markOverride.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingSwipeToDismiss.tsx",
      code: timingCode,
      preview: <TimingSwipeToDismiss {...t("stories.timing.texts", story)} />,
    },
    {
      id: "listRows",
      file: "ListRowsSwipeToDismiss.tsx",
      code: listRowsCode,
      preview: <ListRowsSwipeToDismiss {...t("stories.listRows.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksSwipeToDismiss.tsx",
      code: callbacksCode,
      preview: <CallbacksSwipeToDismiss {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledSwipeToDismiss.tsx",
      code: disabledCode,
      preview: <DisabledSwipeToDismiss {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildSwipeToDismiss.tsx",
      code: asChildCode,
      preview: <AsChildSwipeToDismiss {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesSwipeToDismiss.tsx",
      code: utilitiesCode,
      preview: <UtilitiesSwipeToDismiss {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <SwipeToDismissPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindSwipeToDismiss.tsx" stack>
            <TailwindSwipeToDismiss {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantSwipeToDismiss.tsx" stack>
            <VariantSwipeToDismiss {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="swipe-to-dismiss-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledSwipeToDismiss.tsx" stack>
              <StyledSwipeToDismiss {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="SwipeToDismiss"
        to="/transitions/lists-sequences/swipe-to-dismiss/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
