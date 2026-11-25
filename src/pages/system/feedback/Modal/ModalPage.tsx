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
import { ModalPlayground } from "./ModalPlayground.tsx";
import { AppearanceModal } from "./examples/AppearanceModal.tsx";
import appearanceCode from "./examples/AppearanceModal.tsx?raw";
import { BaseModal } from "./examples/BaseModal.tsx";
import baseCode from "./examples/BaseModal.tsx?raw";
import { CompoundModal } from "./examples/CompoundModal.tsx";
import compoundCode from "./examples/CompoundModal.tsx?raw";
import { DraggableModal } from "./examples/DraggableModal.tsx";
import draggableCode from "./examples/DraggableModal.tsx?raw";
import { FormModal } from "./examples/FormModal.tsx";
import formCode from "./examples/FormModal.tsx?raw";
import { InitialFocusModal } from "./examples/InitialFocusModal.tsx";
import initialFocusCode from "./examples/InitialFocusModal.tsx?raw";
import overridesCss from "./examples/modal-overrides.css?raw";
import { NestedContentModal } from "./examples/NestedContentModal.tsx";
import nestedContentCode from "./examples/NestedContentModal.tsx?raw";
import { NestedModal } from "./examples/NestedModal.tsx";
import nestedCode from "./examples/NestedModal.tsx?raw";
import { PersistentModal } from "./examples/PersistentModal.tsx";
import persistentCode from "./examples/PersistentModal.tsx?raw";
import { ScrollableModal } from "./examples/ScrollableModal.tsx";
import scrollableCode from "./examples/ScrollableModal.tsx?raw";
import { SizesModal } from "./examples/SizesModal.tsx";
import sizesCode from "./examples/SizesModal.tsx?raw";
import { StyledModal } from "./examples/StyledModal.tsx";
import styledCode from "./examples/StyledModal.tsx?raw";
import { TailwindModal } from "./examples/TailwindModal.tsx";
import tailwindCode from "./examples/TailwindModal.tsx?raw";
import { VariantModal } from "./examples/VariantModal.tsx";
import variantCode from "./examples/VariantModal.tsx?raw";
import "./ModalPage.scss";

type StoryId =
  | "base"
  | "sizes"
  | "appearance"
  | "compound"
  | "form"
  | "scrollable"
  | "persistent"
  | "initialFocus"
  | "draggable"
  | "nestedContent"
  | "nested";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function ModalPage() {
  const { t } = useTranslation("modal");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseModal.tsx",
      code: baseCode,
      preview: <BaseModal common={common} {...t("stories.base.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesModal.tsx",
      code: sizesCode,
      preview: <SizesModal common={common} {...t("stories.sizes.texts", story)} />,
    },
    {
      id: "appearance",
      file: "AppearanceModal.tsx",
      code: appearanceCode,
      preview: <AppearanceModal common={common} {...t("stories.appearance.texts", story)} />,
    },
    {
      id: "compound",
      file: "CompoundModal.tsx",
      code: compoundCode,
      preview: <CompoundModal common={common} {...t("stories.compound.texts", story)} />,
    },
    {
      id: "form",
      file: "FormModal.tsx",
      code: formCode,
      preview: <FormModal common={common} {...t("stories.form.texts", story)} />,
    },
    {
      id: "scrollable",
      file: "ScrollableModal.tsx",
      code: scrollableCode,
      preview: <ScrollableModal common={common} {...t("stories.scrollable.texts", story)} />,
    },
    {
      id: "persistent",
      file: "PersistentModal.tsx",
      code: persistentCode,
      preview: <PersistentModal common={common} {...t("stories.persistent.texts", story)} />,
    },
    {
      id: "initialFocus",
      file: "InitialFocusModal.tsx",
      code: initialFocusCode,
      preview: <InitialFocusModal common={common} {...t("stories.initialFocus.texts", story)} />,
    },
    {
      id: "draggable",
      file: "DraggableModal.tsx",
      code: draggableCode,
      preview: <DraggableModal common={common} {...t("stories.draggable.texts", story)} />,
    },
    {
      id: "nestedContent",
      file: "NestedContentModal.tsx",
      code: nestedContentCode,
      preview: <NestedContentModal common={common} {...t("stories.nestedContent.texts", story)} />,
    },
    {
      id: "nested",
      file: "NestedModal.tsx",
      code: nestedCode,
      preview: <NestedModal common={common} {...t("stories.nested.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Modal } from "@gem-org/gem-system"'
      />

      <ModalPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindModal.tsx">
            <TailwindModal common={common} {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantModal.tsx">
            <VariantModal common={common} {...t("styles.cva", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="modal-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledModal.tsx">
              <StyledModal common={common} {...t("styles.css", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="Modal" to="/system/feedback/modal/api" linkLabel={t("apiLink")} />
    </div>
  );
}
