import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enBase from "./en/base.json";
import enCommon from "./en/common.json";
import enGettingStarted from "./en/getting-started.json";
import enIcons from "./en/icons.json";
import enRadii from "./en/radii.json";
import enShadows from "./en/shadows.json";
import enSpacing from "./en/spacing.json";
import enTokens from "./en/tokens.json";
import enTypography from "./en/typography.json";
import esBase from "./es/base.json";
import esCommon from "./es/common.json";
import esGettingStarted from "./es/getting-started.json";
import esIcons from "./es/icons.json";
import esRadii from "./es/radii.json";
import esShadows from "./es/shadows.json";
import esSpacing from "./es/spacing.json";
import esTokens from "./es/tokens.json";
import esTypography from "./es/typography.json";

export const supportedLanguages = ["es", "en"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultNS = "common";

export const resources = {
  es: {
    common: esCommon,
    base: esBase,
    gettingStarted: esGettingStarted,
    typography: esTypography,
    tokens: esTokens,
    icons: esIcons,
    radii: esRadii,
    shadows: esShadows,
    spacing: esSpacing,
  },
  en: {
    common: enCommon,
    base: enBase,
    gettingStarted: enGettingStarted,
    typography: enTypography,
    tokens: enTokens,
    icons: enIcons,
    radii: enRadii,
    shadows: enShadows,
    spacing: enSpacing,
  },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: Object.keys(resources.es),
    defaultNS,
    fallbackLng: "es",
    supportedLngs: supportedLanguages,
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "gem-docs-language",
      caches: ["localStorage"],
    },
  });

const syncHtmlLang = (language: string) => {
  document.documentElement.lang = language;
};

syncHtmlLang(i18n.resolvedLanguage ?? "es");
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
