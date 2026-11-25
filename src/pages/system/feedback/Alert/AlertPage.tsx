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
import { AlertPlayground } from "./AlertPlayground.tsx";
import { ActionAlert } from "./examples/ActionAlert.tsx";
import actionCode from "./examples/ActionAlert.tsx?raw";
import overridesCss from "./examples/alert-overrides.css?raw";
import { BannerAlert } from "./examples/BannerAlert.tsx";
import bannerCode from "./examples/BannerAlert.tsx?raw";
import { BaseAlert } from "./examples/BaseAlert.tsx";
import baseCode from "./examples/BaseAlert.tsx?raw";
import { ClosableAlert } from "./examples/ClosableAlert.tsx";
import closableCode from "./examples/ClosableAlert.tsx?raw";
import { CustomIconAlert } from "./examples/CustomIconAlert.tsx";
import customIconCode from "./examples/CustomIconAlert.tsx?raw";
import { DescriptionOnlyAlert } from "./examples/DescriptionOnlyAlert.tsx";
import descriptionOnlyCode from "./examples/DescriptionOnlyAlert.tsx?raw";
import { HideIconAlert } from "./examples/HideIconAlert.tsx";
import hideIconCode from "./examples/HideIconAlert.tsx?raw";
import { LiveAlert } from "./examples/LiveAlert.tsx";
import liveCode from "./examples/LiveAlert.tsx?raw";
import { RadiusAlert } from "./examples/RadiusAlert.tsx";
import radiusCode from "./examples/RadiusAlert.tsx?raw";
import { RichContentAlert } from "./examples/RichContentAlert.tsx";
import richContentCode from "./examples/RichContentAlert.tsx?raw";
import { SizesAlert } from "./examples/SizesAlert.tsx";
import sizesCode from "./examples/SizesAlert.tsx?raw";
import { StatusAlert } from "./examples/StatusAlert.tsx";
import statusCode from "./examples/StatusAlert.tsx?raw";
import { StyledAlert } from "./examples/StyledAlert.tsx";
import styledCode from "./examples/StyledAlert.tsx?raw";
import { TailwindAlert } from "./examples/TailwindAlert.tsx";
import tailwindCode from "./examples/TailwindAlert.tsx?raw";
import { VariantAlert } from "./examples/VariantAlert.tsx";
import variantCode from "./examples/VariantAlert.tsx?raw";
import { VariantsAlert } from "./examples/VariantsAlert.tsx";
import variantsCode from "./examples/VariantsAlert.tsx?raw";
import "./AlertPage.scss";

type StoryId =
  | "base"
  | "status"
  | "variants"
  | "sizes"
  | "radius"
  | "descriptionOnly"
  | "closable"
  | "action"
  | "customIcon"
  | "hideIcon"
  | "richContent"
  | "live"
  | "banner";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function AlertPage() {
  const { t } = useTranslation("alert");
  const { copy, closeLabel } = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseAlert.tsx",
      code: baseCode,
      preview: <BaseAlert {...copy.info} />,
    },
    {
      id: "status",
      file: "StatusAlert.tsx",
      code: statusCode,
      preview: <StatusAlert copy={copy} />,
    },
    {
      id: "variants",
      file: "VariantsAlert.tsx",
      code: variantsCode,
      preview: <VariantsAlert copy={copy} />,
    },
    {
      id: "sizes",
      file: "SizesAlert.tsx",
      code: sizesCode,
      preview: <SizesAlert {...copy.info} />,
    },
    {
      id: "radius",
      file: "RadiusAlert.tsx",
      code: radiusCode,
      preview: <RadiusAlert description={copy.success.description} />,
    },
    {
      id: "descriptionOnly",
      file: "DescriptionOnlyAlert.tsx",
      code: descriptionOnlyCode,
      preview: <DescriptionOnlyAlert {...t("stories.descriptionOnly.texts", story)} />,
    },
    {
      id: "closable",
      file: "ClosableAlert.tsx",
      code: closableCode,
      preview: (
        <ClosableAlert
          {...copy.warning}
          closeLabel={closeLabel}
          {...t("stories.closable.texts", story)}
        />
      ),
    },
    {
      id: "action",
      file: "ActionAlert.tsx",
      code: actionCode,
      preview: <ActionAlert {...copy.error} {...t("stories.action.texts", story)} />,
    },
    {
      id: "customIcon",
      file: "CustomIconAlert.tsx",
      code: customIconCode,
      preview: <CustomIconAlert {...t("stories.customIcon.texts", story)} />,
    },
    {
      id: "hideIcon",
      file: "HideIconAlert.tsx",
      code: hideIconCode,
      preview: <HideIconAlert {...copy.success} />,
    },
    {
      id: "richContent",
      file: "RichContentAlert.tsx",
      code: richContentCode,
      preview: <RichContentAlert {...t("stories.richContent.texts", story)} />,
    },
    {
      id: "live",
      file: "LiveAlert.tsx",
      code: liveCode,
      preview: (
        <LiveAlert copy={copy} closeLabel={closeLabel} {...t("stories.live.texts", story)} />
      ),
    },
    {
      id: "banner",
      file: "BannerAlert.tsx",
      code: bannerCode,
      preview: <BannerAlert closeLabel={closeLabel} {...t("stories.banner.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Alert } from "@gem-org/gem-system"'
      />

      <AlertPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindAlert.tsx">
            <TailwindAlert {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantAlert.tsx">
            <VariantAlert {...t("styles.cva", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="alert-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledAlert.tsx">
              <StyledAlert {...t("styles.css", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Alert" to="/system/feedback/alert/api" linkLabel={t("apiLink")} />
    </div>
  );
}
