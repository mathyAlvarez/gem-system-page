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
import { ListPlayground } from "./ListPlayground.tsx";
import overridesCss from "./examples/list-overrides.css?raw";
import { AlignStartList } from "./examples/AlignStartList.tsx";
import alignStartCode from "./examples/AlignStartList.tsx?raw";
import { AvatarList } from "./examples/AvatarList.tsx";
import avatarCode from "./examples/AvatarList.tsx?raw";
import { BaseList } from "./examples/BaseList.tsx";
import baseCode from "./examples/BaseList.tsx?raw";
import { CheckboxList } from "./examples/CheckboxList.tsx";
import checkboxCode from "./examples/CheckboxList.tsx?raw";
import { DisabledList } from "./examples/DisabledList.tsx";
import disabledCode from "./examples/DisabledList.tsx?raw";
import { FolderList } from "./examples/FolderList.tsx";
import folderCode from "./examples/FolderList.tsx?raw";
import { GutterlessList } from "./examples/GutterlessList.tsx";
import gutterlessCode from "./examples/GutterlessList.tsx?raw";
import { IconsList } from "./examples/IconsList.tsx";
import iconsCode from "./examples/IconsList.tsx?raw";
import { InsetList } from "./examples/InsetList.tsx";
import insetCode from "./examples/InsetList.tsx?raw";
import { NestedList } from "./examples/NestedList.tsx";
import nestedCode from "./examples/NestedList.tsx?raw";
import { SecondaryActionList } from "./examples/SecondaryActionList.tsx";
import secondaryActionCode from "./examples/SecondaryActionList.tsx?raw";
import { SecondaryCheckboxList } from "./examples/SecondaryCheckboxList.tsx";
import secondaryCheckboxCode from "./examples/SecondaryCheckboxList.tsx?raw";
import { SelectedList } from "./examples/SelectedList.tsx";
import selectedCode from "./examples/SelectedList.tsx?raw";
import { SizesList } from "./examples/SizesList.tsx";
import sizesCode from "./examples/SizesList.tsx?raw";
import { StickyList } from "./examples/StickyList.tsx";
import stickyCode from "./examples/StickyList.tsx?raw";
import { StyledList } from "./examples/StyledList.tsx";
import styledCode from "./examples/StyledList.tsx?raw";
import { SwitchList } from "./examples/SwitchList.tsx";
import switchCode from "./examples/SwitchList.tsx?raw";
import { TailwindList } from "./examples/TailwindList.tsx";
import tailwindCode from "./examples/TailwindList.tsx?raw";
import { VariantList } from "./examples/VariantList.tsx";
import variantCode from "./examples/VariantList.tsx?raw";
import type { Folder, MailLabels } from "./examples/demo.ts";
import "./ListPage.scss";

type StoryId =
  | "base"
  | "icons"
  | "folders"
  | "nested"
  | "selected"
  | "avatars"
  | "alignStart"
  | "checkboxes"
  | "secondaryCheckbox"
  | "switches"
  | "secondaryAction"
  | "sticky"
  | "inset"
  | "gutterless"
  | "sizes"
  | "disabled";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function ListPage() {
  const { t } = useTranslation("list");
  const story = { returnObjects: true } as const;
  const mail = t("common.mail", story) as MailLabels;
  const folders = t("common.folders", story) as Folder[];
  const roles = t("common.roles", story) as string[];

  const stories: Story[] = [
    { id: "base", file: "BaseList.tsx", code: baseCode, preview: <BaseList mail={mail} /> },
    { id: "icons", file: "IconsList.tsx", code: iconsCode, preview: <IconsList mail={mail} /> },
    {
      id: "folders",
      file: "FolderList.tsx",
      code: folderCode,
      preview: <FolderList folders={folders} />,
    },
    { id: "nested", file: "NestedList.tsx", code: nestedCode, preview: <NestedList mail={mail} /> },
    {
      id: "selected",
      file: "SelectedList.tsx",
      code: selectedCode,
      preview: <SelectedList mail={mail} />,
    },
    {
      id: "avatars",
      file: "AvatarList.tsx",
      code: avatarCode,
      preview: <AvatarList roles={roles} />,
    },
    {
      id: "alignStart",
      file: "AlignStartList.tsx",
      code: alignStartCode,
      preview: <AlignStartList {...t("stories.alignStart.texts", story)} />,
    },
    {
      id: "checkboxes",
      file: "CheckboxList.tsx",
      code: checkboxCode,
      preview: <CheckboxList {...t("stories.checkboxes.texts", story)} />,
    },
    {
      id: "secondaryCheckbox",
      file: "SecondaryCheckboxList.tsx",
      code: secondaryCheckboxCode,
      preview: <SecondaryCheckboxList roles={roles} />,
    },
    {
      id: "switches",
      file: "SwitchList.tsx",
      code: switchCode,
      preview: <SwitchList {...t("stories.switches.texts", story)} />,
    },
    {
      id: "secondaryAction",
      file: "SecondaryActionList.tsx",
      code: secondaryActionCode,
      preview: <SecondaryActionList {...t("stories.secondaryAction.texts", story)} />,
    },
    {
      id: "sticky",
      file: "StickyList.tsx",
      code: stickyCode,
      preview: <StickyList {...t("stories.sticky.texts", story)} />,
    },
    {
      id: "inset",
      file: "InsetList.tsx",
      code: insetCode,
      preview: <InsetList {...t("stories.inset.texts", story)} />,
    },
    {
      id: "gutterless",
      file: "GutterlessList.tsx",
      code: gutterlessCode,
      preview: <GutterlessList {...t("stories.gutterless.texts", story)} />,
    },
    {
      id: "sizes",
      file: "SizesList.tsx",
      code: sizesCode,
      preview: <SizesList folders={folders} />,
    },
    {
      id: "disabled",
      file: "DisabledList.tsx",
      code: disabledCode,
      preview: <DisabledList mail={mail} archive={t("stories.disabled.texts.archive")} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { List } from "@gem-org/gem-system"'
      />

      <ListPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindList.tsx">
            <TailwindList mail={mail} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantList.tsx">
            <VariantList mail={mail} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="list-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledList.tsx">
              <StyledList mail={mail} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="List"
        to="/system/data-display/list/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
