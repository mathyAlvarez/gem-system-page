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
import { ContextMenuPlayground } from "./ContextMenuPlayground.tsx";
import { BaseContextMenu } from "./examples/BaseContextMenu.tsx";
import baseCode from "./examples/BaseContextMenu.tsx?raw";
import { CardContextMenu } from "./examples/CardContextMenu.tsx";
import cardCode from "./examples/CardContextMenu.tsx?raw";
import overridesCss from "./examples/context-menu-overrides.css?raw";
import { DisabledDangerContextMenu } from "./examples/DisabledDangerContextMenu.tsx";
import disabledDangerCode from "./examples/DisabledDangerContextMenu.tsx?raw";
import { DisabledTargetContextMenu } from "./examples/DisabledTargetContextMenu.tsx";
import disabledTargetCode from "./examples/DisabledTargetContextMenu.tsx?raw";
import { ListContextMenu } from "./examples/ListContextMenu.tsx";
import listCode from "./examples/ListContextMenu.tsx?raw";
import { MultipleContextMenu } from "./examples/MultipleContextMenu.tsx";
import multipleCode from "./examples/MultipleContextMenu.tsx?raw";
import { SelectionContextMenu } from "./examples/SelectionContextMenu.tsx";
import selectionCode from "./examples/SelectionContextMenu.tsx?raw";
import { SizesContextMenu } from "./examples/SizesContextMenu.tsx";
import sizesCode from "./examples/SizesContextMenu.tsx?raw";
import { StyledContextMenu } from "./examples/StyledContextMenu.tsx";
import styledCode from "./examples/StyledContextMenu.tsx?raw";
import { SubmenuContextMenu } from "./examples/SubmenuContextMenu.tsx";
import submenuCode from "./examples/SubmenuContextMenu.tsx?raw";
import { TailwindContextMenu } from "./examples/TailwindContextMenu.tsx";
import tailwindCode from "./examples/TailwindContextMenu.tsx?raw";
import { VariantContextMenu } from "./examples/VariantContextMenu.tsx";
import variantCode from "./examples/VariantContextMenu.tsx?raw";
import "./ContextMenuPage.scss";

type StoryId =
  | "base"
  | "card"
  | "disabledDanger"
  | "sizes"
  | "selection"
  | "submenu"
  | "disabledTarget"
  | "multiple"
  | "list";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function ContextMenuPage() {
  const { t } = useTranslation("contextMenu");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseContextMenu.tsx",
      code: baseCode,
      preview: <BaseContextMenu texts={texts} {...t("stories.base.texts", story)} />,
    },
    {
      id: "card",
      file: "CardContextMenu.tsx",
      code: cardCode,
      preview: <CardContextMenu texts={texts} {...t("stories.card.texts", story)} />,
    },
    {
      id: "disabledDanger",
      file: "DisabledDangerContextMenu.tsx",
      code: disabledDangerCode,
      preview: (
        <DisabledDangerContextMenu texts={texts} {...t("stories.disabledDanger.texts", story)} />
      ),
    },
    {
      id: "sizes",
      file: "SizesContextMenu.tsx",
      code: sizesCode,
      preview: <SizesContextMenu texts={texts} />,
    },
    {
      id: "selection",
      file: "SelectionContextMenu.tsx",
      code: selectionCode,
      preview: <SelectionContextMenu texts={t("stories.selection.texts", story)} />,
    },
    {
      id: "submenu",
      file: "SubmenuContextMenu.tsx",
      code: submenuCode,
      preview: <SubmenuContextMenu texts={t("stories.submenu.texts", story)} />,
    },
    {
      id: "disabledTarget",
      file: "DisabledTargetContextMenu.tsx",
      code: disabledTargetCode,
      preview: (
        <DisabledTargetContextMenu texts={texts} {...t("stories.disabledTarget.texts", story)} />
      ),
    },
    {
      id: "multiple",
      file: "MultipleContextMenu.tsx",
      code: multipleCode,
      preview: <MultipleContextMenu texts={t("stories.multiple.texts", story)} />,
    },
    {
      id: "list",
      file: "ListContextMenu.tsx",
      code: listCode,
      preview: <ListContextMenu texts={t("stories.list.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { ContextMenu } from "@gem-org/gem-system"'
      />

      <ContextMenuPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindContextMenu.tsx" stack>
            <TailwindContextMenu texts={texts} title={t("stories.base.texts.title")} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantContextMenu.tsx" stack>
            <VariantContextMenu texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="context-menu-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledContextMenu.tsx" stack>
              <StyledContextMenu texts={texts} title={t("stories.base.texts.title")} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="ContextMenu"
        to="/system/navigation/context-menu/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
