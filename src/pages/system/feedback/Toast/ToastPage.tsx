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
import { ToastPlayground } from "./ToastPlayground.tsx";
import { ActionToast } from "./examples/ActionToast.tsx";
import actionCode from "./examples/ActionToast.tsx?raw";
import { AutoCloseToast } from "./examples/AutoCloseToast.tsx";
import autoCloseCode from "./examples/AutoCloseToast.tsx?raw";
import { BaseToast } from "./examples/BaseToast.tsx";
import baseCode from "./examples/BaseToast.tsx?raw";
import { ControlledToast } from "./examples/ControlledToast.tsx";
import controlledCode from "./examples/ControlledToast.tsx?raw";
import { CustomToast } from "./examples/CustomToast.tsx";
import customCode from "./examples/CustomToast.tsx?raw";
import { DescriptionToast } from "./examples/DescriptionToast.tsx";
import descriptionCode from "./examples/DescriptionToast.tsx?raw";
import { IconToast } from "./examples/IconToast.tsx";
import iconCode from "./examples/IconToast.tsx?raw";
import { PlacementToast } from "./examples/PlacementToast.tsx";
import placementCode from "./examples/PlacementToast.tsx?raw";
import { SizesToast } from "./examples/SizesToast.tsx";
import sizesCode from "./examples/SizesToast.tsx?raw";
import { SnackbarToast } from "./examples/SnackbarToast.tsx";
import snackbarCode from "./examples/SnackbarToast.tsx?raw";
import { StackToast } from "./examples/StackToast.tsx";
import stackCode from "./examples/StackToast.tsx?raw";
import { StatusToast } from "./examples/StatusToast.tsx";
import statusCode from "./examples/StatusToast.tsx?raw";
import { StyledToast } from "./examples/StyledToast.tsx";
import styledCode from "./examples/StyledToast.tsx?raw";
import { SystemToast } from "./examples/SystemToast.tsx";
import systemCode from "./examples/SystemToast.tsx?raw";
import { TailwindToast } from "./examples/TailwindToast.tsx";
import tailwindCode from "./examples/TailwindToast.tsx?raw";
import overridesCss from "./examples/toast-overrides.css?raw";
import toastHostCode from "./examples/ToastHost.tsx?raw";
import { UpdateToast } from "./examples/UpdateToast.tsx";
import updateCode from "./examples/UpdateToast.tsx?raw";
import { VariantToast } from "./examples/VariantToast.tsx";
import variantCode from "./examples/VariantToast.tsx?raw";
import { VariantsToast } from "./examples/VariantsToast.tsx";
import variantsCode from "./examples/VariantsToast.tsx?raw";
import "./ToastPage.scss";

type StoryId =
  | "system"
  | "base"
  | "status"
  | "variants"
  | "sizes"
  | "description"
  | "action"
  | "icon"
  | "custom"
  | "autoClose"
  | "controlled"
  | "placement"
  | "stack"
  | "update"
  | "snackbar";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode; extra?: ReactNode };

export function ToastPage() {
  const { t } = useTranslation("toast");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;
  const hostCode = <CodeBlock code={toastHostCode} label="ToastHost.tsx" />;

  const stories: Story[] = [
    {
      id: "system",
      file: "SystemToast.tsx",
      code: systemCode,
      preview: <SystemToast common={common} {...t("stories.system.texts", story)} />,
      extra: hostCode,
    },
    { id: "base", file: "BaseToast.tsx", code: baseCode, preview: <BaseToast common={common} /> },
    {
      id: "status",
      file: "StatusToast.tsx",
      code: statusCode,
      preview: <StatusToast common={common} />,
    },
    {
      id: "variants",
      file: "VariantsToast.tsx",
      code: variantsCode,
      preview: <VariantsToast common={common} />,
    },
    {
      id: "sizes",
      file: "SizesToast.tsx",
      code: sizesCode,
      preview: <SizesToast common={common} />,
    },
    {
      id: "description",
      file: "DescriptionToast.tsx",
      code: descriptionCode,
      preview: <DescriptionToast common={common} {...t("stories.description.texts", story)} />,
    },
    {
      id: "action",
      file: "ActionToast.tsx",
      code: actionCode,
      preview: <ActionToast common={common} {...t("stories.action.texts", story)} />,
    },
    {
      id: "icon",
      file: "IconToast.tsx",
      code: iconCode,
      preview: <IconToast common={common} {...t("stories.icon.texts", story)} />,
    },
    {
      id: "custom",
      file: "CustomToast.tsx",
      code: customCode,
      preview: <CustomToast common={common} {...t("stories.custom.texts", story)} />,
    },
    {
      id: "autoClose",
      file: "AutoCloseToast.tsx",
      code: autoCloseCode,
      preview: <AutoCloseToast common={common} {...t("stories.autoClose.texts", story)} />,
    },
    {
      id: "controlled",
      file: "ControlledToast.tsx",
      code: controlledCode,
      preview: <ControlledToast common={common} {...t("stories.controlled.texts", story)} />,
    },
    {
      id: "placement",
      file: "PlacementToast.tsx",
      code: placementCode,
      preview: <PlacementToast common={common} {...t("stories.placement.texts", story)} />,
    },
    {
      id: "stack",
      file: "StackToast.tsx",
      code: stackCode,
      preview: <StackToast common={common} {...t("stories.stack.texts", story)} />,
    },
    {
      id: "update",
      file: "UpdateToast.tsx",
      code: updateCode,
      preview: <UpdateToast common={common} {...t("stories.update.texts", story)} />,
    },
    {
      id: "snackbar",
      file: "SnackbarToast.tsx",
      code: snackbarCode,
      preview: <SnackbarToast common={common} {...t("stories.snackbar.texts", story)} />,
    },
  ];

  const styleTexts = t("styles.texts", story);

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { toast, Toaster, Toast } from "@gem-org/gem-system"'
      />

      <ToastPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file}>
            {item.preview}
          </DemoBlock>
          {item.extra}
        </DocsSection>
      ))}

      <StyleChangesSection
        tailwind={
          <DemoBlock code={tailwindCode} label="TailwindToast.tsx">
            <TailwindToast common={common} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantToast.tsx">
            <VariantToast common={common} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="toast-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledToast.tsx">
              <StyledToast common={common} {...styleTexts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Toast" to="/system/feedback/toast/api" linkLabel={t("apiLink")} />
    </div>
  );
}
