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
import enAspectRatio from "./en/aspect-ratio.json";
import enResizablePanels from "./en/resizable-panels.json";
import enScrollArea from "./en/scroll-area.json";
import enNavbar from "./en/navbar.json";
import enSidebar from "./en/sidebar.json";
import enBreadcrumbs from "./en/breadcrumbs.json";
import enTabs from "./en/tabs.json";
import enPagination from "./en/pagination.json";
import enLink from "./en/link.json";
import enDropdownMenu from "./en/dropdown-menu.json";
import enBlockUi from "./en/block-ui.json";
import enCommandPalette from "./en/command-palette.json";
import enContextMenu from "./en/context-menu.json";
import enFab from "./en/fab.json";
import enStepper from "./en/stepper.json";
import enModal from "./en/modal.json";
import enDrawer from "./en/drawer.json";
import enAlert from "./en/alert.json";
import enBadge from "./en/badge.json";
import enCopyToClipboard from "./en/copyToClipboard.json";
import enPopconfirm from "./en/popconfirm.json";
import enProgressBar from "./en/progressBar.json";
import enSkeleton from "./en/skeleton.json";
import enSpinner from "./en/spinner.json";
import enToast from "./en/toast.json";
import enCard from "./en/card.json";
import enAccordion from "./en/accordion.json";
import enAvatar from "./en/avatar.json";
import enDivider from "./en/divider.json";
import enEmptyState from "./en/empty-state.json";
import enIndicator from "./en/indicator.json";
import enList from "./en/list.json";
import enPropertyList from "./en/property-list.json";
import enShine from "./en/shine.json";
import enStatisticCard from "./en/statistic-card.json";
import enTable from "./en/table.json";
import enTimeline from "./en/timeline.json";
import enTransition from "./en/transition.json";
import enTreeView from "./en/tree-view.json";
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
import esAspectRatio from "./es/aspect-ratio.json";
import esResizablePanels from "./es/resizable-panels.json";
import esScrollArea from "./es/scroll-area.json";
import esNavbar from "./es/navbar.json";
import esSidebar from "./es/sidebar.json";
import esBreadcrumbs from "./es/breadcrumbs.json";
import esTabs from "./es/tabs.json";
import esPagination from "./es/pagination.json";
import esLink from "./es/link.json";
import esDropdownMenu from "./es/dropdown-menu.json";
import esBlockUi from "./es/block-ui.json";
import esCommandPalette from "./es/command-palette.json";
import esContextMenu from "./es/context-menu.json";
import esFab from "./es/fab.json";
import esStepper from "./es/stepper.json";
import esModal from "./es/modal.json";
import esDrawer from "./es/drawer.json";
import esAlert from "./es/alert.json";
import esBadge from "./es/badge.json";
import esCopyToClipboard from "./es/copyToClipboard.json";
import esPopconfirm from "./es/popconfirm.json";
import esProgressBar from "./es/progressBar.json";
import esSkeleton from "./es/skeleton.json";
import esSpinner from "./es/spinner.json";
import esToast from "./es/toast.json";
import esCard from "./es/card.json";
import esAccordion from "./es/accordion.json";
import esAvatar from "./es/avatar.json";
import esDivider from "./es/divider.json";
import esEmptyState from "./es/empty-state.json";
import esIndicator from "./es/indicator.json";
import esList from "./es/list.json";
import esPropertyList from "./es/property-list.json";
import esShine from "./es/shine.json";
import esStatisticCard from "./es/statistic-card.json";
import esTable from "./es/table.json";
import esTimeline from "./es/timeline.json";
import esTransition from "./es/transition.json";
import esTreeView from "./es/tree-view.json";
import esOverrideStyles from "./es/override-styles.json";
import esRadii from "./es/radii.json";
import esShadows from "./es/shadows.json";
import esSpacing from "./es/spacing.json";
import esTokens from "./es/tokens.json";
import esTypography from "./es/typography.json";
import { effectsResourcesEn, effectsResourcesEs } from "./effects.resources.ts";
import { transitionsResourcesEn, transitionsResourcesEs } from "./transitions.resources.ts";

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
    aspectRatio: esAspectRatio,
    resizablePanels: esResizablePanels,
    scrollArea: esScrollArea,
    navbar: esNavbar,
    sidebar: esSidebar,
    breadcrumbs: esBreadcrumbs,
    tabs: esTabs,
    pagination: esPagination,
    link: esLink,
    dropdownMenu: esDropdownMenu,
    blockUi: esBlockUi,
    commandPalette: esCommandPalette,
    contextMenu: esContextMenu,
    fab: esFab,
    stepper: esStepper,
    modal: esModal,
    drawer: esDrawer,
    alert: esAlert,
    badge: esBadge,
    copyToClipboard: esCopyToClipboard,
    popconfirm: esPopconfirm,
    progressBar: esProgressBar,
    skeleton: esSkeleton,
    spinner: esSpinner,
    toast: esToast,
    card: esCard,
    accordion: esAccordion,
    avatar: esAvatar,
    divider: esDivider,
    emptyState: esEmptyState,
    indicator: esIndicator,
    list: esList,
    propertyList: esPropertyList,
    shine: esShine,
    statisticCard: esStatisticCard,
    table: esTable,
    timeline: esTimeline,
    transition: esTransition,
    treeView: esTreeView,
    overrideStyles: esOverrideStyles,
    ...effectsResourcesEs,
    ...transitionsResourcesEs,
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
    aspectRatio: enAspectRatio,
    resizablePanels: enResizablePanels,
    scrollArea: enScrollArea,
    navbar: enNavbar,
    sidebar: enSidebar,
    breadcrumbs: enBreadcrumbs,
    tabs: enTabs,
    pagination: enPagination,
    link: enLink,
    dropdownMenu: enDropdownMenu,
    blockUi: enBlockUi,
    commandPalette: enCommandPalette,
    contextMenu: enContextMenu,
    fab: enFab,
    stepper: enStepper,
    modal: enModal,
    drawer: enDrawer,
    alert: enAlert,
    badge: enBadge,
    copyToClipboard: enCopyToClipboard,
    popconfirm: enPopconfirm,
    progressBar: enProgressBar,
    skeleton: enSkeleton,
    spinner: enSpinner,
    toast: enToast,
    card: enCard,
    accordion: enAccordion,
    avatar: enAvatar,
    divider: enDivider,
    emptyState: enEmptyState,
    indicator: enIndicator,
    list: enList,
    propertyList: enPropertyList,
    shine: enShine,
    statisticCard: enStatisticCard,
    table: enTable,
    timeline: enTimeline,
    transition: enTransition,
    treeView: enTreeView,
    overrideStyles: enOverrideStyles,
    ...effectsResourcesEn,
    ...transitionsResourcesEn,
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
