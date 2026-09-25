import { Button, Select, type SelectValue } from "@gem-org/gem-system";
import { toggleTheme } from "@gem-org/gem-system/tokens";
import { useTranslation } from "react-i18next";
import { currentVersionId, docsVersions } from "../data/versions.ts";
import { useGemTheme } from "../hooks/useGemTheme.ts";
import { supportedLanguages } from "../locales/index.ts";
import { Moon, Sun } from "./ThemeIcons.tsx";

export function LanguageSelect() {
  const { t, i18n } = useTranslation();
  const options = supportedLanguages.map((language) => ({
    value: language,
    label: t(`language.${language}`),
  }));

  const handleChange = (value: SelectValue) => {
    if (typeof value === "string") void i18n.changeLanguage(value);
  };

  return (
    <Select
      aria-label={t("language.label")}
      size="sm"
      options={options}
      value={i18n.resolvedLanguage ?? "es"}
      onChange={handleChange}
      searchable={false}
      wrapperClassName="docs-navbar__language"
    />
  );
}

export function VersionSelect() {
  const { t } = useTranslation();
  const options = docsVersions.map((version) => ({ value: version.id, label: version.label }));

  const handleChange = (value: SelectValue) => {
    const target = docsVersions.find((version) => version.id === value);
    if (!target || target.id === currentVersionId || !target.url) return;
    const { pathname, search, hash } = window.location;
    window.location.href = `${target.url}${pathname}${search}${hash}`;
  };

  return (
    <Select
      aria-label={t("version.label")}
      size="sm"
      options={options}
      value={currentVersionId}
      onChange={handleChange}
      searchable={false}
      wrapperClassName="docs-navbar__version"
    />
  );
}

export function ThemeToggle() {
  const { t } = useTranslation();
  const theme = useGemTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="secondary"
      size="sm"
      leftIcon={isDark ? <Moon size="sm" /> : <Sun size="sm" />}
      aria-label={isDark ? t("theme.toLight") : t("theme.toDark")}
      onClick={() => toggleTheme()}
    >
      {t("theme.label")}
    </Button>
  );
}
