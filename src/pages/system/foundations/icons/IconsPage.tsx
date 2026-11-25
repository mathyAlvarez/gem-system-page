import { Typography } from "@gem-org/gem-system";
import { CheckCircle, Plus, Search, iconSize, type IconSizeToken } from "@gem-org/gem-system/icons";
import { Trans, useTranslation } from "react-i18next";
import { DemoBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { IconColorVariants } from "./IconColorVariants.tsx";
import { iconGroups, uniqueIconCount } from "./iconGroups.ts";
import "./IconsPage.scss";

const sizeOrder = Object.keys(iconSize) as IconSizeToken[];
const customSizes = [18, "1.75rem", 44] as const;

type CustomSize = (typeof customSizes)[number];

const customSizeLabel = (size: CustomSize) => (typeof size === "number" ? `${size}px` : size);

const sizeProp = (size: CustomSize | IconSizeToken) =>
  typeof size === "number" ? `{${size}}` : JSON.stringify(size);

const sizesCode = `import { Search } from "@gem-org/gem-system/icons";

export function IconSizes() {
  return (
    <>
${sizeOrder.map((size) => `      <Search size=${sizeProp(size)} /> {/* ${iconSize[size]} */}`).join("\n")}
    </>
  );
}`;

const customCode = `import { Search } from "@gem-org/gem-system/icons";

export function IconCustomSize() {
  return (
    <>
${customSizes.map((size) => `      <Search size=${sizeProp(size)} /> {/* ${customSizeLabel(size)} */}`).join("\n")}
    </>
  );
}`;

const rich = { strong: <strong />, code: <code /> };

export function IconsPage() {
  const { t } = useTranslation("icons");

  const usageCode = `import { CheckCircle, Plus, Search } from "@gem-org/gem-system/icons";

export function IconUsage() {
  return (
    <>
      <Search size="lg" title=${JSON.stringify(t("usage.searchTitle"))} />
      <Plus size={32} title=${JSON.stringify(t("usage.addTitle"))} />
      <CheckCircle size="2xl" title="OK" />
    </>
  );
}`;

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath='import { Search, Plus } from "@gem-org/gem-system/icons"'
      />

      <Typography variant="body" className="docs-page__meta">
        <Trans t={t} i18nKey="intro" values={{ count: uniqueIconCount }} components={rich} />
      </Typography>

      <DocsSection title={t("usage.title")}>
        <DemoBlock code={usageCode} label="IconUsage.tsx">
          <Search size="lg" title={t("usage.searchTitle")} />
          <Plus size={32} title={t("usage.addTitle")} />
          <CheckCircle size="2xl" title="OK" />
        </DemoBlock>
      </DocsSection>

      {iconGroups.map((group) => (
        <DocsSection key={group.id} title={t(`groups.${group.id}`)} description={group.code}>
          <div className="icons-grid">
            {group.icons.map(({ name, Component }) => (
              <div key={name} className="icons-tile">
                <div className="icons-tile__glyph">
                  <Component size="lg" />
                </div>
                <div className="icons-tile__meta">
                  <Typography variant="label">{name}</Typography>
                  <code className="icons-tile__code">{`<${name} />`}</code>
                </div>
              </div>
            ))}
          </div>
        </DocsSection>
      ))}

      <DocsSection title={t("sizes.title")} description="xs → 8xl">
        <DemoBlock code={sizesCode} label="IconSizes.tsx">
          <div className="icons-sizes">
            {sizeOrder.map((size) => (
              <div key={size} className="icons-sizes__item">
                <Search size={size} />
                <span className="icons-sizes__label">
                  {size} · {iconSize[size]}
                </span>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocsSection>

      <DocsSection title={t("custom.title")} description="number | CSS length">
        <Typography variant="body" className="docs-page__meta">
          <Trans t={t} i18nKey="custom.description" components={rich} />
        </Typography>
        <DemoBlock code={customCode} label="IconCustomSize.tsx">
          <div className="icons-sizes">
            {customSizes.map((size) => (
              <div key={String(size)} className="icons-sizes__item">
                <Search size={size} />
                <span className="icons-sizes__label">{customSizeLabel(size)}</span>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocsSection>

      <IconColorVariants />
    </div>
  );
}
