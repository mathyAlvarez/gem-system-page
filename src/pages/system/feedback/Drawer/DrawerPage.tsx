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
import { DrawerPlayground } from "./DrawerPlayground.tsx";
import { BaseDrawer } from "./examples/BaseDrawer.tsx";
import baseCode from "./examples/BaseDrawer.tsx?raw";
import { BottomSheetDrawer } from "./examples/BottomSheetDrawer.tsx";
import bottomSheetCode from "./examples/BottomSheetDrawer.tsx?raw";
import { CompoundDrawer } from "./examples/CompoundDrawer.tsx";
import compoundCode from "./examples/CompoundDrawer.tsx?raw";
import { CustomSizeDrawer } from "./examples/CustomSizeDrawer.tsx";
import customSizeCode from "./examples/CustomSizeDrawer.tsx?raw";
import overridesCss from "./examples/drawer-overrides.css?raw";
import { FormDrawer } from "./examples/FormDrawer.tsx";
import formCode from "./examples/FormDrawer.tsx?raw";
import { NavigationDrawer } from "./examples/NavigationDrawer.tsx";
import navigationCode from "./examples/NavigationDrawer.tsx?raw";
import { PersistentDrawer } from "./examples/PersistentDrawer.tsx";
import persistentCode from "./examples/PersistentDrawer.tsx?raw";
import { PlacementDrawer } from "./examples/PlacementDrawer.tsx";
import placementCode from "./examples/PlacementDrawer.tsx?raw";
import { SizesDrawer } from "./examples/SizesDrawer.tsx";
import sizesCode from "./examples/SizesDrawer.tsx?raw";
import { StyledDrawer } from "./examples/StyledDrawer.tsx";
import styledCode from "./examples/StyledDrawer.tsx?raw";
import { TailwindDrawer } from "./examples/TailwindDrawer.tsx";
import tailwindCode from "./examples/TailwindDrawer.tsx?raw";
import { VariantDrawer } from "./examples/VariantDrawer.tsx";
import variantCode from "./examples/VariantDrawer.tsx?raw";
import "./DrawerPage.scss";

type StoryId =
  | "base"
  | "placement"
  | "sizes"
  | "customSize"
  | "bottomSheet"
  | "compound"
  | "form"
  | "navigation"
  | "persistent";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function DrawerPage() {
  const { t } = useTranslation("drawer");
  const common = t("common", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseDrawer.tsx",
      code: baseCode,
      preview: <BaseDrawer common={common} {...t("stories.base.texts", story)} />,
    },
    {
      id: "placement",
      file: "PlacementDrawer.tsx",
      code: placementCode,
      preview: <PlacementDrawer common={common} {...t("stories.placement.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesDrawer.tsx",
      code: sizesCode,
      preview: <SizesDrawer common={common} {...t("stories.sizes.texts", story)} />,
    },
    {
      id: "customSize",
      file: "CustomSizeDrawer.tsx",
      code: customSizeCode,
      preview: <CustomSizeDrawer common={common} {...t("stories.customSize.texts", story)} />,
    },
    {
      id: "bottomSheet",
      file: "BottomSheetDrawer.tsx",
      code: bottomSheetCode,
      preview: <BottomSheetDrawer common={common} {...t("stories.bottomSheet.texts", story)} />,
    },
    {
      id: "compound",
      file: "CompoundDrawer.tsx",
      code: compoundCode,
      preview: <CompoundDrawer common={common} {...t("stories.compound.texts", story)} />,
    },
    {
      id: "form",
      file: "FormDrawer.tsx",
      code: formCode,
      preview: <FormDrawer common={common} {...t("stories.form.texts", story)} />,
    },
    {
      id: "navigation",
      file: "NavigationDrawer.tsx",
      code: navigationCode,
      preview: <NavigationDrawer common={common} {...t("stories.navigation.texts", story)} />,
    },
    {
      id: "persistent",
      file: "PersistentDrawer.tsx",
      code: persistentCode,
      preview: <PersistentDrawer common={common} {...t("stories.persistent.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Drawer } from "@gem-org/gem-system"'
      />

      <DrawerPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindDrawer.tsx">
            <TailwindDrawer common={common} {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantDrawer.tsx">
            <VariantDrawer common={common} {...t("styles.cva", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="drawer-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledDrawer.tsx">
              <StyledDrawer common={common} {...t("styles.css", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="Drawer"
        to="/system/feedback/drawer/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
