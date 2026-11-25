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
import { CommandPalettePlayground } from "./CommandPalettePlayground.tsx";
import { AsyncCommandPalette } from "./examples/AsyncCommandPalette.tsx";
import asyncCode from "./examples/AsyncCommandPalette.tsx?raw";
import { BaseCommandPalette } from "./examples/BaseCommandPalette.tsx";
import baseCode from "./examples/BaseCommandPalette.tsx?raw";
import overridesCss from "./examples/command-palette-overrides.css?raw";
import { DisabledDangerCommandPalette } from "./examples/DisabledDangerCommandPalette.tsx";
import disabledDangerCode from "./examples/DisabledDangerCommandPalette.tsx?raw";
import { EmptyCommandPalette } from "./examples/EmptyCommandPalette.tsx";
import emptyCode from "./examples/EmptyCommandPalette.tsx?raw";
import { FooterCommandPalette } from "./examples/FooterCommandPalette.tsx";
import footerCode from "./examples/FooterCommandPalette.tsx?raw";
import { GroupedCommandPalette } from "./examples/GroupedCommandPalette.tsx";
import groupedCode from "./examples/GroupedCommandPalette.tsx?raw";
import { RouterCommandPalette } from "./examples/RouterCommandPalette.tsx";
import routerCode from "./examples/RouterCommandPalette.tsx?raw";
import { SizesCommandPalette } from "./examples/SizesCommandPalette.tsx";
import sizesCode from "./examples/SizesCommandPalette.tsx?raw";
import { StyledCommandPalette } from "./examples/StyledCommandPalette.tsx";
import styledCode from "./examples/StyledCommandPalette.tsx?raw";
import { TailwindCommandPalette } from "./examples/TailwindCommandPalette.tsx";
import tailwindCode from "./examples/TailwindCommandPalette.tsx?raw";
import { VariantCommandPalette } from "./examples/VariantCommandPalette.tsx";
import variantCode from "./examples/VariantCommandPalette.tsx?raw";
import "./CommandPalettePage.scss";

type StoryId =
  "base" | "grouped" | "async" | "empty" | "disabledDanger" | "sizes" | "footer" | "router";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

export function CommandPalettePage() {
  const { t } = useTranslation("commandPalette");
  const texts = t("demo", { returnObjects: true });
  const story = { returnObjects: true } as const;

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseCommandPalette.tsx",
      code: baseCode,
      preview: <BaseCommandPalette texts={texts} />,
    },
    {
      id: "grouped",
      file: "GroupedCommandPalette.tsx",
      code: groupedCode,
      preview: <GroupedCommandPalette texts={texts} />,
    },
    {
      id: "async",
      file: "AsyncCommandPalette.tsx",
      code: asyncCode,
      preview: <AsyncCommandPalette texts={texts} />,
    },
    {
      id: "empty",
      file: "EmptyCommandPalette.tsx",
      code: emptyCode,
      preview: <EmptyCommandPalette texts={texts} emptyText={t("stories.empty.emptyText")} />,
    },
    {
      id: "disabledDanger",
      file: "DisabledDangerCommandPalette.tsx",
      code: disabledDangerCode,
      preview: (
        <DisabledDangerCommandPalette texts={texts} {...t("stories.disabledDanger.texts", story)} />
      ),
    },
    {
      id: "sizes",
      file: "SizesCommandPalette.tsx",
      code: sizesCode,
      preview: <SizesCommandPalette texts={texts} />,
    },
    {
      id: "footer",
      file: "FooterCommandPalette.tsx",
      code: footerCode,
      preview: <FooterCommandPalette texts={texts} {...t("stories.footer.texts", story)} />,
    },
    {
      id: "router",
      file: "RouterCommandPalette.tsx",
      code: routerCode,
      preview: <RouterCommandPalette texts={texts} {...t("stories.router.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { CommandPalette } from "@gem-org/gem-system"'
      />

      <CommandPalettePlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindCommandPalette.tsx" stack>
            <TailwindCommandPalette texts={texts} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantCommandPalette.tsx" stack>
            <VariantCommandPalette texts={texts} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="command-palette-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledCommandPalette.tsx" stack>
              <StyledCommandPalette texts={texts} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="CommandPalette"
        to="/system/navigation/command-palette/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
