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
import { PopconfirmPlayground } from "./PopconfirmPlayground.tsx";
import { AsyncPopconfirm } from "./examples/AsyncPopconfirm.tsx";
import asyncCode from "./examples/AsyncPopconfirm.tsx?raw";
import { BasePopconfirm } from "./examples/BasePopconfirm.tsx";
import baseCode from "./examples/BasePopconfirm.tsx?raw";
import { ControlledPopconfirm } from "./examples/ControlledPopconfirm.tsx";
import controlledCode from "./examples/ControlledPopconfirm.tsx?raw";
import { CustomButtonsPopconfirm } from "./examples/CustomButtonsPopconfirm.tsx";
import customButtonsCode from "./examples/CustomButtonsPopconfirm.tsx?raw";
import { DisabledPopconfirm } from "./examples/DisabledPopconfirm.tsx";
import disabledCode from "./examples/DisabledPopconfirm.tsx?raw";
import { ErrorPopconfirm } from "./examples/ErrorPopconfirm.tsx";
import errorCode from "./examples/ErrorPopconfirm.tsx?raw";
import { IconPopconfirm } from "./examples/IconPopconfirm.tsx";
import iconCode from "./examples/IconPopconfirm.tsx?raw";
import { InitialFocusPopconfirm } from "./examples/InitialFocusPopconfirm.tsx";
import initialFocusCode from "./examples/InitialFocusPopconfirm.tsx?raw";
import { ListPopconfirm } from "./examples/ListPopconfirm.tsx";
import listCode from "./examples/ListPopconfirm.tsx?raw";
import { PlacementsPopconfirm } from "./examples/PlacementsPopconfirm.tsx";
import placementsCode from "./examples/PlacementsPopconfirm.tsx?raw";
import overridesCss from "./examples/popconfirm-overrides.css?raw";
import { SizesPopconfirm } from "./examples/SizesPopconfirm.tsx";
import sizesCode from "./examples/SizesPopconfirm.tsx?raw";
import { BrandPopconfirm } from "./examples/StyledPopconfirm.tsx";
import styledCode from "./examples/StyledPopconfirm.tsx?raw";
import { TailwindPopconfirm } from "./examples/TailwindPopconfirm.tsx";
import tailwindCode from "./examples/TailwindPopconfirm.tsx?raw";
import { TonesPopconfirm } from "./examples/TonesPopconfirm.tsx";
import tonesCode from "./examples/TonesPopconfirm.tsx?raw";
import { VariantPopconfirm } from "./examples/VariantPopconfirm.tsx";
import variantCode from "./examples/VariantPopconfirm.tsx?raw";
import { WithoutCancelPopconfirm } from "./examples/WithoutCancelPopconfirm.tsx";
import withoutCancelCode from "./examples/WithoutCancelPopconfirm.tsx?raw";
import "./PopconfirmPage.scss";

type StoryId =
  | "base"
  | "placements"
  | "tones"
  | "sizes"
  | "icon"
  | "withoutCancel"
  | "async"
  | "error"
  | "customButtons"
  | "controlled"
  | "initialFocus"
  | "list"
  | "disabled";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function PopconfirmPage() {
  const { t } = useTranslation("popconfirm");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BasePopconfirm.tsx",
      code: baseCode,
      preview: <BasePopconfirm common={common} {...t("stories.base.texts", story)} />,
    },
    {
      id: "placements",
      file: "PlacementsPopconfirm.tsx",
      code: placementsCode,
      preview: <PlacementsPopconfirm common={common} {...t("stories.placements.texts", story)} />,
    },
    {
      id: "tones",
      file: "TonesPopconfirm.tsx",
      code: tonesCode,
      preview: <TonesPopconfirm common={common} {...t("stories.tones.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesPopconfirm.tsx",
      code: sizesCode,
      preview: <SizesPopconfirm common={common} {...t("stories.sizes.texts", story)} />,
    },
    {
      id: "icon",
      file: "IconPopconfirm.tsx",
      code: iconCode,
      preview: <IconPopconfirm common={common} {...t("stories.icon.texts", story)} />,
    },
    {
      id: "withoutCancel",
      file: "WithoutCancelPopconfirm.tsx",
      code: withoutCancelCode,
      preview: <WithoutCancelPopconfirm {...t("stories.withoutCancel.texts", story)} />,
    },
    {
      id: "async",
      file: "AsyncPopconfirm.tsx",
      code: asyncCode,
      preview: <AsyncPopconfirm common={common} {...t("stories.async.texts", story)} />,
    },
    {
      id: "error",
      file: "ErrorPopconfirm.tsx",
      code: errorCode,
      preview: <ErrorPopconfirm common={common} {...t("stories.error.texts", story)} />,
    },
    {
      id: "customButtons",
      file: "CustomButtonsPopconfirm.tsx",
      code: customButtonsCode,
      preview: <CustomButtonsPopconfirm {...t("stories.customButtons.texts", story)} />,
    },
    {
      id: "controlled",
      file: "ControlledPopconfirm.tsx",
      code: controlledCode,
      preview: <ControlledPopconfirm common={common} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "initialFocus",
      file: "InitialFocusPopconfirm.tsx",
      code: initialFocusCode,
      preview: (
        <InitialFocusPopconfirm common={common} {...t("stories.initialFocus.texts", story)} />
      ),
    },
    {
      id: "list",
      file: "ListPopconfirm.tsx",
      code: listCode,
      preview: <ListPopconfirm common={common} {...t("stories.list.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledPopconfirm.tsx",
      code: disabledCode,
      preview: <DisabledPopconfirm common={common} {...t("stories.disabled.texts", story)} />,
    },
  ];

  const styleTexts = t("styles.texts", story);

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Popconfirm } from "@gem-org/gem-system"'
      />

      <PopconfirmPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindPopconfirm.tsx">
            <TailwindPopconfirm common={common} {...styleTexts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantPopconfirm.tsx">
            <VariantPopconfirm
              common={common}
              title={styleTexts.title}
              description={styleTexts.description}
            />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="popconfirm-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledPopconfirm.tsx">
              <BrandPopconfirm common={common} {...styleTexts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Popconfirm"
        to="/system/feedback/popconfirm/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
