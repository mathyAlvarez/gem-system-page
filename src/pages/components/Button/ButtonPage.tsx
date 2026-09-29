import type { ReactNode } from "react";
import { Button } from "@gem-org/gem-system";
import { Close, Plus, Search, Trash } from "@gem-org/gem-system/icons";
import { useTranslation } from "react-i18next";
import type buttonEs from "../../../locales/es/button.json";
import { ApiLinkSection } from "../../../components/ApiLinkSection.tsx";
import { DemoBlock, DocsPageHeader, DocsSection } from "../../../components/DocsPrimitives.tsx";
import { ButtonPlayground } from "./ButtonPlayground.tsx";
import { ButtonOverrides } from "./ButtonOverrides.tsx";
import { buttonShadows, buttonVariants } from "./buttonDocs.ts";
import "./ButtonPage.scss";

type StoryTexts = (typeof buttonEs)["stories"];
type StoryId = keyof StoryTexts;
type StoryTextKey = {
  [K in StoryId]: `${K}.${Extract<keyof StoryTexts[K], string>}`;
}[StoryId];

type Story = { id: StoryId; preview: ReactNode; code: string };

const component = (name: string, imports: string, body: string) =>
  `${imports}

export function ${name}() {
  return (
${body}
  );
}`;

const buttonImport = 'import { Button } from "@gem-org/gem-system";';
const iconImport = (icons: string[]) =>
  `${buttonImport}\nimport { ${icons.join(", ")} } from "@gem-org/gem-system/icons";`;
const text = (value: string) => `{${JSON.stringify(value)}}`;

export function ButtonPage() {
  const { t } = useTranslation("button");
  const s = (key: StoryTextKey): string => t(`stories.${key}`);

  const stories: Story[] = [
    {
      id: "allVariants",
      preview: buttonVariants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      )),
      code: component(
        "AllVariants",
        buttonImport,
        `    <>
${buttonVariants.map((variant) => `      <Button variant="${variant}">${variant}</Button>`).join("\n")}
    </>`,
      ),
    },
    {
      id: "danger",
      preview: (
        <Button variant="danger" leftIcon={<Trash size="sm" />}>
          {s("danger.label")}
        </Button>
      ),
      code: component(
        "DangerButton",
        iconImport(["Trash"]),
        `    <Button variant="danger" leftIcon={<Trash size="sm" />}>
      ${text(s("danger.label"))}
    </Button>`,
      ),
    },
    {
      id: "loading",
      preview: <Button isLoading>{s("loading.label")}</Button>,
      code: component(
        "LoadingButton",
        buttonImport,
        `    <Button variant="primary" isLoading>
      ${text(s("loading.label"))}
    </Button>`,
      ),
    },
    {
      id: "iconOnly",
      preview: (
        <Button variant="secondary" iconOnly aria-label={s("iconOnly.ariaLabel")}>
          <Search size="sm" />
        </Button>
      ),
      code: component(
        "IconOnlyButton",
        iconImport(["Search"]),
        `    <Button variant="secondary" iconOnly aria-label=${JSON.stringify(s("iconOnly.ariaLabel"))}>
      <Search size="sm" />
    </Button>`,
      ),
    },
    {
      id: "rounded",
      preview: <Button rounded>{s("rounded.label")}</Button>,
      code: component(
        "RoundedButton",
        buttonImport,
        `    <Button variant="primary" rounded>
      ${text(s("rounded.label"))}
    </Button>`,
      ),
    },
    {
      id: "custom",
      preview: (
        <Button
          className="gem-bg-tertiary-800 gem-text-neutral-0 gem-border-tertiary-900"
          leftIcon={<Plus size="sm" />}
        >
          {s("custom.label")}
        </Button>
      ),
      code: component(
        "CustomPaletteButton",
        `import "@gem-org/gem-system/utilities.css";\n${iconImport(["Plus"])}`,
        `    <Button
      className="gem-bg-tertiary-800 gem-text-neutral-0 gem-border-tertiary-900"
      leftIcon={<Plus size="sm" />}
    >
      ${text(s("custom.label"))}
    </Button>`,
      ),
    },
    {
      id: "shadows",
      preview: buttonShadows.map((shadow) => (
        <Button key={shadow} shadow={shadow}>
          shadow-{shadow}
        </Button>
      )),
      code: component(
        "ButtonShadows",
        buttonImport,
        `    <>
${buttonShadows.map((shadow) => `      <Button variant="primary" shadow="${shadow}">shadow-${shadow}</Button>`).join("\n")}
    </>`,
      ),
    },
    {
      id: "hoveredOff",
      preview: <Button hovered={false}>{s("hoveredOff.label")}</Button>,
      code: component(
        "NoHoverButton",
        buttonImport,
        `    <Button variant="primary" hovered={false}>
      ${text(s("hoveredOff.label"))}
    </Button>`,
      ),
    },
    {
      id: "withIcons",
      preview: (
        <>
          <Button leftIcon={<Plus size="sm" />}>{s("withIcons.add")}</Button>
          <Button variant="secondary" rightIcon={<Search size="sm" />}>
            {s("withIcons.search")}
          </Button>
          <Button rounded leftIcon={<Plus size="sm" />}>
            {s("withIcons.pill")}
          </Button>
          <Button variant="transparent" iconOnly rounded aria-label={s("withIcons.close")}>
            <Close size="sm" />
          </Button>
          <Button variant="danger" iconOnly aria-label={s("withIcons.delete")} isLoading>
            <Trash size="sm" />
          </Button>
        </>
      ),
      code: component(
        "ButtonsWithIcons",
        iconImport(["Close", "Plus", "Search", "Trash"]),
        `    <>
      <Button variant="primary" leftIcon={<Plus size="sm" />}>
        ${text(s("withIcons.add"))}
      </Button>
      <Button variant="secondary" rightIcon={<Search size="sm" />}>
        ${text(s("withIcons.search"))}
      </Button>
      <Button variant="primary" rounded leftIcon={<Plus size="sm" />}>
        ${text(s("withIcons.pill"))}
      </Button>
      <Button variant="transparent" iconOnly rounded aria-label=${JSON.stringify(s("withIcons.close"))}>
        <Close size="sm" />
      </Button>
      <Button variant="danger" iconOnly aria-label=${JSON.stringify(s("withIcons.delete"))} isLoading>
        <Trash size="sm" />
      </Button>
    </>`,
      ),
    },
  ];

  const toFileName = (id: StoryId) => `${id.charAt(0).toUpperCase()}${id.slice(1)}.tsx`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Button } from "@gem-org/gem-system"'
      />

      <ButtonPlayground />

      {stories.map((story) => (
        <DocsSection
          key={story.id}
          title={s(`${story.id}.title`)}
          description={s(`${story.id}.description`)}
        >
          <DemoBlock code={story.code} label={toFileName(story.id)}>
            {story.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <ButtonOverrides />

      <ApiLinkSection component="Button" to="/components/button/api" linkLabel={t("apiLink")} />
    </div>
  );
}
