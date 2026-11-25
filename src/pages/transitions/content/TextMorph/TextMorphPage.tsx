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
import { TextMorphPlayground } from "./TextMorphPlayground.tsx";
import { AsChildTextMorph } from "./examples/AsChildTextMorph.tsx";
import asChildCode from "./examples/AsChildTextMorph.tsx?raw";
import { BaseTextMorph } from "./examples/BaseTextMorph.tsx";
import baseCode from "./examples/BaseTextMorph.tsx?raw";
import { CallbacksTextMorph } from "./examples/CallbacksTextMorph.tsx";
import callbacksCode from "./examples/CallbacksTextMorph.tsx?raw";
import { DisabledTextMorph } from "./examples/DisabledTextMorph.tsx";
import disabledCode from "./examples/DisabledTextMorph.tsx?raw";
import { EffectTextMorph } from "./examples/EffectTextMorph.tsx";
import effectCode from "./examples/EffectTextMorph.tsx?raw";
import { SplitCharactersTextMorph } from "./examples/SplitCharactersTextMorph.tsx";
import splitCharactersCode from "./examples/SplitCharactersTextMorph.tsx?raw";
import { SplitLinesTextMorph } from "./examples/SplitLinesTextMorph.tsx";
import splitLinesCode from "./examples/SplitLinesTextMorph.tsx?raw";
import { SplitWordsTextMorph } from "./examples/SplitWordsTextMorph.tsx";
import splitWordsCode from "./examples/SplitWordsTextMorph.tsx?raw";
import { StaggerTextMorph } from "./examples/StaggerTextMorph.tsx";
import staggerCode from "./examples/StaggerTextMorph.tsx?raw";
import { StyledTextMorph } from "./examples/StyledTextMorph.tsx";
import styledCode from "./examples/StyledTextMorph.tsx?raw";
import overridesCss from "./examples/text-morph-overrides.css?raw";
import { TailwindTextMorph } from "./examples/TailwindTextMorph.tsx";
import tailwindCode from "./examples/TailwindTextMorph.tsx?raw";
import { TimingTextMorph } from "./examples/TimingTextMorph.tsx";
import timingCode from "./examples/TimingTextMorph.tsx?raw";
import { UtilitiesTextMorph } from "./examples/UtilitiesTextMorph.tsx";
import utilitiesCode from "./examples/UtilitiesTextMorph.tsx?raw";
import { VariantTextMorph } from "./examples/VariantTextMorph.tsx";
import variantCode from "./examples/VariantTextMorph.tsx?raw";
import "./TextMorphPage.scss";

type StoryId =
  | "base"
  | "effects"
  | "splitWords"
  | "splitCharacters"
  | "splitLines"
  | "stagger"
  | "timing"
  | "callbacks"
  | "disabled"
  | "asChild"
  | "utilities";

type Story = { id: StoryId; file: string; code: string; preview: ReactNode };

const importCode = `import "@gem-org/gemsitions/text-morph.css";
import { TextMorph } from "@gem-org/gemsitions/text-morph";`;

const story = { returnObjects: true } as const;

export function TextMorphPage() {
  const { t } = useTranslation("textMorph");

  const stories: Story[] = [
    {
      id: "base",
      file: "BaseTextMorph.tsx",
      code: baseCode,
      preview: <BaseTextMorph {...t("stories.base.texts", story)} />,
    },
    {
      id: "effects",
      file: "EffectTextMorph.tsx",
      code: effectCode,
      preview: <EffectTextMorph {...t("stories.effects.texts", story)} />,
    },
    {
      id: "splitWords",
      file: "SplitWordsTextMorph.tsx",
      code: splitWordsCode,
      preview: <SplitWordsTextMorph {...t("stories.splitWords.texts", story)} />,
    },
    {
      id: "splitCharacters",
      file: "SplitCharactersTextMorph.tsx",
      code: splitCharactersCode,
      preview: <SplitCharactersTextMorph {...t("stories.splitCharacters.texts", story)} />,
    },
    {
      id: "splitLines",
      file: "SplitLinesTextMorph.tsx",
      code: splitLinesCode,
      preview: <SplitLinesTextMorph {...t("stories.splitLines.texts", story)} />,
    },
    {
      id: "stagger",
      file: "StaggerTextMorph.tsx",
      code: staggerCode,
      preview: <StaggerTextMorph {...t("stories.stagger.texts", story)} />,
    },
    {
      id: "timing",
      file: "TimingTextMorph.tsx",
      code: timingCode,
      preview: <TimingTextMorph {...t("stories.timing.texts", story)} />,
    },
    {
      id: "callbacks",
      file: "CallbacksTextMorph.tsx",
      code: callbacksCode,
      preview: <CallbacksTextMorph {...t("stories.callbacks.texts", story)} />,
    },
    {
      id: "disabled",
      file: "DisabledTextMorph.tsx",
      code: disabledCode,
      preview: <DisabledTextMorph {...t("stories.disabled.texts", story)} />,
    },
    {
      id: "asChild",
      file: "AsChildTextMorph.tsx",
      code: asChildCode,
      preview: <AsChildTextMorph {...t("stories.asChild.texts", story)} />,
    },
    {
      id: "utilities",
      file: "UtilitiesTextMorph.tsx",
      code: utilitiesCode,
      preview: <UtilitiesTextMorph {...t("stories.utilities.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <TextMorphPlayground />

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
          <DemoBlock code={tailwindCode} label="TailwindTextMorph.tsx" stack>
            <TailwindTextMorph {...t("styles.tailwind", story)} />
          </DemoBlock>
        }
        cva={
          <DemoBlock code={variantCode} label="VariantTextMorph.tsx" stack>
            <VariantTextMorph {...t("styles.variant", story)} />
          </DemoBlock>
        }
        cssVariables={
          <>
            <CodeBlock code={overridesCss} label="text-morph-overrides.css" language="css" />
            <DemoBlock code={styledCode} label="StyledTextMorph.tsx" stack>
              <StyledTextMorph {...t("styles.styled", story)} />
            </DemoBlock>
          </>
        }
      />

      <ApiLinkSection
        component="TextMorph"
        to="/transitions/content/text-morph/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
