import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { CodeBlock, DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { StyleChangesSection } from "../../../components/StyleChangesSection.tsx";
import { DropdownMenuPlayground } from "./DropdownMenuPlayground.tsx";
import { BaseDropdownMenu } from "./examples/BaseDropdownMenu.tsx";
import baseCode from "./examples/BaseDropdownMenu.tsx?raw";
import { DisabledDangerDropdownMenu } from "./examples/DisabledDangerDropdownMenu.tsx";
import disabledDangerCode from "./examples/DisabledDangerDropdownMenu.tsx?raw";
import overridesCss from "./examples/dropdown-menu-overrides.css?raw";
import { IconTriggerDropdownMenu } from "./examples/IconTriggerDropdownMenu.tsx";
import iconTriggerCode from "./examples/IconTriggerDropdownMenu.tsx?raw";
import { PlacementDropdownMenu } from "./examples/PlacementDropdownMenu.tsx";
import placementCode from "./examples/PlacementDropdownMenu.tsx?raw";
import { SelectionDropdownMenu } from "./examples/SelectionDropdownMenu.tsx";
import selectionCode from "./examples/SelectionDropdownMenu.tsx?raw";
import { SizesDropdownMenu } from "./examples/SizesDropdownMenu.tsx";
import sizesCode from "./examples/SizesDropdownMenu.tsx?raw";
import { StyledDropdownMenu } from "./examples/StyledDropdownMenu.tsx";
import styledCode from "./examples/StyledDropdownMenu.tsx?raw";
import { SubmenuDropdownMenu } from "./examples/SubmenuDropdownMenu.tsx";
import submenuCode from "./examples/SubmenuDropdownMenu.tsx?raw";
import { TailwindDropdownMenu } from "./examples/TailwindDropdownMenu.tsx";
import tailwindCode from "./examples/TailwindDropdownMenu.tsx?raw";
import { VariantDropdownMenu } from "./examples/VariantDropdownMenu.tsx";
import variantCode from "./examples/VariantDropdownMenu.tsx?raw";
import "./DropdownMenuPage.scss";

type StoryId = "base" | "iconTrigger" | "disabledDanger" | "sizes" | "placement" | "selection" | "submenu";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function DropdownMenuPage() {
  const { t } = useTranslation("dropdownMenu");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    { id: "base", file: "BaseDropdownMenu.tsx", code: baseCode, preview: <BaseDropdownMenu texts={texts} /> },
    {
      id: "iconTrigger",
      file: "IconTriggerDropdownMenu.tsx",
      code: iconTriggerCode,
      preview: <IconTriggerDropdownMenu texts={texts} {...t("stories.iconTrigger.texts", story)} />,
    },
    {
      id: "disabledDanger",
      file: "DisabledDangerDropdownMenu.tsx",
      code: disabledDangerCode,
      preview: <DisabledDangerDropdownMenu texts={texts} {...t("stories.disabledDanger.texts", story)} />,
    },
    { id: "sizes", file: "SizesDropdownMenu.tsx", code: sizesCode, preview: <SizesDropdownMenu texts={texts} /> },
    {
      id: "placement",
      file: "PlacementDropdownMenu.tsx",
      code: placementCode,
      preview: <PlacementDropdownMenu texts={texts} />,
    },
    {
      id: "selection",
      file: "SelectionDropdownMenu.tsx",
      code: selectionCode,
      preview: <SelectionDropdownMenu texts={t("stories.selection.texts", story)} />,
    },
    {
      id: "submenu",
      file: "SubmenuDropdownMenu.tsx",
      code: submenuCode,
      preview: <SubmenuDropdownMenu texts={t("stories.submenu.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { DropdownMenu } from "@gem-org/gem-system"'
      />

      <DropdownMenuPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindDropdownMenu.tsx" stack>
            <TailwindDropdownMenu texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantDropdownMenu.tsx" stack>
            <VariantDropdownMenu texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="dropdown-menu-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledDropdownMenu.tsx" stack>
              <StyledDropdownMenu texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection component="DropdownMenu" to="/navigation/dropdown-menu/api" linkLabel={t("apiLink")} />
    </div>
  );
}
