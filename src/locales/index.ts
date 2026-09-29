import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enBase from "./en/base.json";
import enButton from "./en/button.json";
import enCheckbox from "./en/checkbox.json";
import enCombobox from "./en/combobox.json";
import enCommon from "./en/common.json";
import enDatePicker from "./en/date-picker.json";
import enFileUploader from "./en/file-uploader.json";
import enGettingStarted from "./en/getting-started.json";
import enIcons from "./en/icons.json";
import enInputMask from "./en/input-mask.json";
import enInputNumber from "./en/input-number.json";
import enInputPassword from "./en/input-password.json";
import enInputSearch from "./en/input-search.json";
import enInputText from "./en/input-text.json";
import enOtpInput from "./en/otp-input.json";
import enRadio from "./en/radio.json";
import enRadioGroup from "./en/radio-group.json";
import enSelect from "./en/select.json";
import enSlider from "./en/slider.json";
import enSwitch from "./en/switch.json";
import enTextarea from "./en/textarea.json";
import enTooltip from "./en/tooltip.json";
import enContainer from "./en/container.json";
import enGrid from "./en/grid.json";
import enFlex from "./en/flex.json";
import enOverrideStyles from "./en/override-styles.json";
import enRadii from "./en/radii.json";
import enShadows from "./en/shadows.json";
import enSpacing from "./en/spacing.json";
import enTokens from "./en/tokens.json";
import enTypography from "./en/typography.json";
import esBase from "./es/base.json";
import esButton from "./es/button.json";
import esCheckbox from "./es/checkbox.json";
import esCombobox from "./es/combobox.json";
import esCommon from "./es/common.json";
import esDatePicker from "./es/date-picker.json";
import esFileUploader from "./es/file-uploader.json";
import esGettingStarted from "./es/getting-started.json";
import esIcons from "./es/icons.json";
import esInputMask from "./es/input-mask.json";
import esInputNumber from "./es/input-number.json";
import esInputPassword from "./es/input-password.json";
import esInputSearch from "./es/input-search.json";
import esInputText from "./es/input-text.json";
import esOtpInput from "./es/otp-input.json";
import esRadio from "./es/radio.json";
import esRadioGroup from "./es/radio-group.json";
import esSelect from "./es/select.json";
import esSlider from "./es/slider.json";
import esSwitch from "./es/switch.json";
import esTextarea from "./es/textarea.json";
import esTooltip from "./es/tooltip.json";
import esContainer from "./es/container.json";
import esGrid from "./es/grid.json";
import esFlex from "./es/flex.json";
import esOverrideStyles from "./es/override-styles.json";
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
    button: esButton,
    checkbox: esCheckbox,
    combobox: esCombobox,
    datePicker: esDatePicker,
    fileUploader: esFileUploader,
    inputMask: esInputMask,
    inputNumber: esInputNumber,
    inputPassword: esInputPassword,
    inputSearch: esInputSearch,
    inputText: esInputText,
    otpInput: esOtpInput,
    radio: esRadio,
    radioGroup: esRadioGroup,
    select: esSelect,
    slider: esSlider,
    switch: esSwitch,
    textarea: esTextarea,
    tooltip: esTooltip,
    container: esContainer,
    grid: esGrid,
    flex: esFlex,
    overrideStyles: esOverrideStyles,
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
    button: enButton,
    checkbox: enCheckbox,
    combobox: enCombobox,
    datePicker: enDatePicker,
    fileUploader: enFileUploader,
    inputMask: enInputMask,
    inputNumber: enInputNumber,
    inputPassword: enInputPassword,
    inputSearch: enInputSearch,
    inputText: enInputText,
    otpInput: enOtpInput,
    radio: enRadio,
    radioGroup: enRadioGroup,
    select: enSelect,
    slider: enSlider,
    switch: enSwitch,
    textarea: enTextarea,
    tooltip: enTooltip,
    container: enContainer,
    grid: enGrid,
    flex: enFlex,
    overrideStyles: enOverrideStyles,
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
