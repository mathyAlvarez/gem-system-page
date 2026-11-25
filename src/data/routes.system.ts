/**
 * Gem System docs routes under `/system/...`.
 * Keep page imports here so effects/transitions stay in their own modules.
 */
import type { ComponentType } from "react";
import { GettingStartedPage } from "../pages/system/GettingStartedPage.tsx";
import { OverrideStylesPage } from "../pages/system/override-styles/OverrideStylesPage.tsx";
import { TailwindOverridesPage } from "../pages/system/override-styles/tailwind/TailwindOverridesPage.tsx";
import { CvaOverridesPage } from "../pages/system/override-styles/cva/CvaOverridesPage.tsx";
import { CssVariablesPage } from "../pages/system/override-styles/css-variables/CssVariablesPage.tsx";
import { TypographyPage } from "../pages/system/foundations/typography/TypographyPage.tsx";
import { TokensPage } from "../pages/system/foundations/tokens/TokensPage.tsx";
import { IconsPage } from "../pages/system/foundations/icons/IconsPage.tsx";
import { RadiiPage } from "../pages/system/foundations/radii/RadiiPage.tsx";
import { ShadowsPage } from "../pages/system/foundations/shadows/ShadowsPage.tsx";
import { SpacingPage } from "../pages/system/foundations/spacing/SpacingPage.tsx";
import { ButtonPage } from "../pages/system/components/Button/ButtonPage.tsx";
import { ButtonApiPage } from "../pages/system/components/Button/ButtonApiPage.tsx";
import { CheckboxPage } from "../pages/system/components/Checkbox/CheckboxPage.tsx";
import { CheckboxApiPage } from "../pages/system/components/Checkbox/CheckboxApiPage.tsx";
import { ComboboxPage } from "../pages/system/components/Combobox/ComboboxPage.tsx";
import { ComboboxApiPage } from "../pages/system/components/Combobox/ComboboxApiPage.tsx";
import { DatePickerPage } from "../pages/system/components/DatePicker/DatePickerPage.tsx";
import { DatePickerApiPage } from "../pages/system/components/DatePicker/DatePickerApiPage.tsx";
import { FileUploaderPage } from "../pages/system/components/FileUploader/FileUploaderPage.tsx";
import { FileUploaderApiPage } from "../pages/system/components/FileUploader/FileUploaderApiPage.tsx";
import { InputMaskPage } from "../pages/system/components/InputMask/InputMaskPage.tsx";
import { InputMaskApiPage } from "../pages/system/components/InputMask/InputMaskApiPage.tsx";
import { InputNumberPage } from "../pages/system/components/InputNumber/InputNumberPage.tsx";
import { InputNumberApiPage } from "../pages/system/components/InputNumber/InputNumberApiPage.tsx";
import { InputPasswordPage } from "../pages/system/components/InputPassword/InputPasswordPage.tsx";
import { InputPasswordApiPage } from "../pages/system/components/InputPassword/InputPasswordApiPage.tsx";
import { InputSearchPage } from "../pages/system/components/InputSearch/InputSearchPage.tsx";
import { InputSearchApiPage } from "../pages/system/components/InputSearch/InputSearchApiPage.tsx";
import { InputTextPage } from "../pages/system/components/InputText/InputTextPage.tsx";
import { InputTextApiPage } from "../pages/system/components/InputText/InputTextApiPage.tsx";
import { OtpInputPage } from "../pages/system/components/OtpInput/OtpInputPage.tsx";
import { OtpInputApiPage } from "../pages/system/components/OtpInput/OtpInputApiPage.tsx";
import { RadioPage } from "../pages/system/components/Radio/RadioPage.tsx";
import { RadioApiPage } from "../pages/system/components/Radio/RadioApiPage.tsx";
import { RadioGroupPage } from "../pages/system/components/RadioGroup/RadioGroupPage.tsx";
import { RadioGroupApiPage } from "../pages/system/components/RadioGroup/RadioGroupApiPage.tsx";
import { SelectPage } from "../pages/system/components/Select/SelectPage.tsx";
import { SelectApiPage } from "../pages/system/components/Select/SelectApiPage.tsx";
import { SliderPage } from "../pages/system/components/Slider/SliderPage.tsx";
import { SliderApiPage } from "../pages/system/components/Slider/SliderApiPage.tsx";
import { SwitchPage } from "../pages/system/components/Switch/SwitchPage.tsx";
import { SwitchApiPage } from "../pages/system/components/Switch/SwitchApiPage.tsx";
import { TextareaPage } from "../pages/system/components/Textarea/TextareaPage.tsx";
import { TextareaApiPage } from "../pages/system/components/Textarea/TextareaApiPage.tsx";
import { TooltipPage } from "../pages/system/components/Tooltip/TooltipPage.tsx";
import { TooltipApiPage } from "../pages/system/components/Tooltip/TooltipApiPage.tsx";
import { ContainerPage } from "../pages/system/layout/Container/ContainerPage.tsx";
import { ContainerApiPage } from "../pages/system/layout/Container/ContainerApiPage.tsx";
import { GridPage } from "../pages/system/layout/Grid/GridPage.tsx";
import { GridApiPage } from "../pages/system/layout/Grid/GridApiPage.tsx";
import { FlexPage } from "../pages/system/layout/Flex/FlexPage.tsx";
import { FlexApiPage } from "../pages/system/layout/Flex/FlexApiPage.tsx";
import { AspectRatioPage } from "../pages/system/layout/AspectRatio/AspectRatioPage.tsx";
import { AspectRatioApiPage } from "../pages/system/layout/AspectRatio/AspectRatioApiPage.tsx";
import { ResizablePanelsPage } from "../pages/system/layout/ResizablePanels/ResizablePanelsPage.tsx";
import { ResizablePanelsApiPage } from "../pages/system/layout/ResizablePanels/ResizablePanelsApiPage.tsx";
import { ScrollAreaPage } from "../pages/system/layout/ScrollArea/ScrollAreaPage.tsx";
import { ScrollAreaApiPage } from "../pages/system/layout/ScrollArea/ScrollAreaApiPage.tsx";
import { NavbarPage } from "../pages/system/navigation/Navbar/NavbarPage.tsx";
import { NavbarApiPage } from "../pages/system/navigation/Navbar/NavbarApiPage.tsx";
import { SidebarPage } from "../pages/system/navigation/Sidebar/SidebarPage.tsx";
import { SidebarApiPage } from "../pages/system/navigation/Sidebar/SidebarApiPage.tsx";
import { BreadcrumbsPage } from "../pages/system/navigation/Breadcrumbs/BreadcrumbsPage.tsx";
import { BreadcrumbsApiPage } from "../pages/system/navigation/Breadcrumbs/BreadcrumbsApiPage.tsx";
import { TabsPage } from "../pages/system/navigation/Tabs/TabsPage.tsx";
import { TabsApiPage } from "../pages/system/navigation/Tabs/TabsApiPage.tsx";
import { PaginationPage } from "../pages/system/navigation/Pagination/PaginationPage.tsx";
import { PaginationApiPage } from "../pages/system/navigation/Pagination/PaginationApiPage.tsx";
import { LinkPage } from "../pages/system/navigation/Link/LinkPage.tsx";
import { LinkApiPage } from "../pages/system/navigation/Link/LinkApiPage.tsx";
import { DropdownMenuPage } from "../pages/system/navigation/DropdownMenu/DropdownMenuPage.tsx";
import { DropdownMenuApiPage } from "../pages/system/navigation/DropdownMenu/DropdownMenuApiPage.tsx";
import { BlockUiPage } from "../pages/system/navigation/BlockUi/BlockUiPage.tsx";
import { BlockUiApiPage } from "../pages/system/navigation/BlockUi/BlockUiApiPage.tsx";
import { CommandPalettePage } from "../pages/system/navigation/CommandPalette/CommandPalettePage.tsx";
import { CommandPaletteApiPage } from "../pages/system/navigation/CommandPalette/CommandPaletteApiPage.tsx";
import { ContextMenuPage } from "../pages/system/navigation/ContextMenu/ContextMenuPage.tsx";
import { ContextMenuApiPage } from "../pages/system/navigation/ContextMenu/ContextMenuApiPage.tsx";
import { FabPage } from "../pages/system/navigation/Fab/FabPage.tsx";
import { FabApiPage } from "../pages/system/navigation/Fab/FabApiPage.tsx";
import { StepperPage } from "../pages/system/navigation/Stepper/StepperPage.tsx";
import { StepperApiPage } from "../pages/system/navigation/Stepper/StepperApiPage.tsx";
import { ModalPage } from "../pages/system/feedback/Modal/ModalPage.tsx";
import { ModalApiPage } from "../pages/system/feedback/Modal/ModalApiPage.tsx";
import { DrawerPage } from "../pages/system/feedback/Drawer/DrawerPage.tsx";
import { DrawerApiPage } from "../pages/system/feedback/Drawer/DrawerApiPage.tsx";
import { AlertPage } from "../pages/system/feedback/Alert/AlertPage.tsx";
import { AlertApiPage } from "../pages/system/feedback/Alert/AlertApiPage.tsx";
import { BadgePage } from "../pages/system/feedback/Badge/BadgePage.tsx";
import { BadgeApiPage } from "../pages/system/feedback/Badge/BadgeApiPage.tsx";
import { CopyToClipboardPage } from "../pages/system/feedback/CopyToClipboard/CopyToClipboardPage.tsx";
import { CopyToClipboardApiPage } from "../pages/system/feedback/CopyToClipboard/CopyToClipboardApiPage.tsx";
import { PopconfirmPage } from "../pages/system/feedback/Popconfirm/PopconfirmPage.tsx";
import { PopconfirmApiPage } from "../pages/system/feedback/Popconfirm/PopconfirmApiPage.tsx";
import { ProgressBarPage } from "../pages/system/feedback/ProgressBar/ProgressBarPage.tsx";
import { ProgressBarApiPage } from "../pages/system/feedback/ProgressBar/ProgressBarApiPage.tsx";
import { SkeletonPage } from "../pages/system/feedback/Skeleton/SkeletonPage.tsx";
import { SkeletonApiPage } from "../pages/system/feedback/Skeleton/SkeletonApiPage.tsx";
import { SpinnerPage } from "../pages/system/feedback/Spinner/SpinnerPage.tsx";
import { SpinnerApiPage } from "../pages/system/feedback/Spinner/SpinnerApiPage.tsx";
import { ToastPage } from "../pages/system/feedback/Toast/ToastPage.tsx";
import { ToastApiPage } from "../pages/system/feedback/Toast/ToastApiPage.tsx";
import { CardPage } from "../pages/system/data-display/Card/CardPage.tsx";
import { CardApiPage } from "../pages/system/data-display/Card/CardApiPage.tsx";
import { AccordionPage } from "../pages/system/data-display/Accordion/AccordionPage.tsx";
import { AccordionApiPage } from "../pages/system/data-display/Accordion/AccordionApiPage.tsx";
import { AvatarPage } from "../pages/system/data-display/Avatar/AvatarPage.tsx";
import { AvatarApiPage } from "../pages/system/data-display/Avatar/AvatarApiPage.tsx";
import { DividerPage } from "../pages/system/data-display/Divider/DividerPage.tsx";
import { DividerApiPage } from "../pages/system/data-display/Divider/DividerApiPage.tsx";
import { EmptyStatePage } from "../pages/system/data-display/EmptyState/EmptyStatePage.tsx";
import { EmptyStateApiPage } from "../pages/system/data-display/EmptyState/EmptyStateApiPage.tsx";
import { IndicatorPage } from "../pages/system/data-display/Indicator/IndicatorPage.tsx";
import { IndicatorApiPage } from "../pages/system/data-display/Indicator/IndicatorApiPage.tsx";
import { ListPage } from "../pages/system/data-display/List/ListPage.tsx";
import { ListApiPage } from "../pages/system/data-display/List/ListApiPage.tsx";
import { PropertyListPage } from "../pages/system/data-display/PropertyList/PropertyListPage.tsx";
import { PropertyListApiPage } from "../pages/system/data-display/PropertyList/PropertyListApiPage.tsx";
import { ShinePage } from "../pages/system/data-display/Shine/ShinePage.tsx";
import { ShineApiPage } from "../pages/system/data-display/Shine/ShineApiPage.tsx";
import { StatisticCardPage } from "../pages/system/data-display/StatisticCard/StatisticCardPage.tsx";
import { StatisticCardApiPage } from "../pages/system/data-display/StatisticCard/StatisticCardApiPage.tsx";
import { TablePage } from "../pages/system/data-display/Table/TablePage.tsx";
import { TableApiPage } from "../pages/system/data-display/Table/TableApiPage.tsx";
import { TimelinePage } from "../pages/system/data-display/Timeline/TimelinePage.tsx";
import { TimelineApiPage } from "../pages/system/data-display/Timeline/TimelineApiPage.tsx";
import { TransitionPage } from "../pages/system/data-display/Transition/TransitionPage.tsx";
import { TransitionApiPage } from "../pages/system/data-display/Transition/TransitionApiPage.tsx";
import { TreeViewPage } from "../pages/system/data-display/TreeView/TreeViewPage.tsx";
import { TreeViewApiPage } from "../pages/system/data-display/TreeView/TreeViewApiPage.tsx";

type PageRoute = { path: string; Page: ComponentType };
type ComponentPageRoute = PageRoute & { ApiPage: ComponentType };

const P = "system" as const;

export const systemDocsPages: PageRoute[] = [
  { path: `${P}/getting-started`, Page: GettingStartedPage },
  { path: `${P}/override-styles`, Page: OverrideStylesPage },
  { path: `${P}/override-styles/tailwind`, Page: TailwindOverridesPage },
  { path: `${P}/override-styles/cva`, Page: CvaOverridesPage },
  { path: `${P}/override-styles/css-variables`, Page: CssVariablesPage },
  { path: `${P}/foundations/typography`, Page: TypographyPage },
  { path: `${P}/foundations/tokens`, Page: TokensPage },
  { path: `${P}/foundations/icons`, Page: IconsPage },
  { path: `${P}/foundations/radii`, Page: RadiiPage },
  { path: `${P}/foundations/shadows`, Page: ShadowsPage },
  { path: `${P}/foundations/spacing`, Page: SpacingPage },
];

export const systemComponentPages: ComponentPageRoute[] = [
  { path: "system/components/button", Page: ButtonPage, ApiPage: ButtonApiPage },
  { path: "system/components/checkbox", Page: CheckboxPage, ApiPage: CheckboxApiPage },
  { path: "system/components/combobox", Page: ComboboxPage, ApiPage: ComboboxApiPage },
  { path: "system/components/date-picker", Page: DatePickerPage, ApiPage: DatePickerApiPage },
  { path: "system/components/file-uploader", Page: FileUploaderPage, ApiPage: FileUploaderApiPage },
  { path: "system/components/input-mask", Page: InputMaskPage, ApiPage: InputMaskApiPage },
  { path: "system/components/input-number", Page: InputNumberPage, ApiPage: InputNumberApiPage },
  {
    path: "system/components/input-password",
    Page: InputPasswordPage,
    ApiPage: InputPasswordApiPage,
  },
  { path: "system/components/input-search", Page: InputSearchPage, ApiPage: InputSearchApiPage },
  { path: "system/components/input-text", Page: InputTextPage, ApiPage: InputTextApiPage },
  { path: "system/components/otp-input", Page: OtpInputPage, ApiPage: OtpInputApiPage },
  { path: "system/components/radio", Page: RadioPage, ApiPage: RadioApiPage },
  { path: "system/components/radio-group", Page: RadioGroupPage, ApiPage: RadioGroupApiPage },
  { path: "system/components/select", Page: SelectPage, ApiPage: SelectApiPage },
  { path: "system/components/slider", Page: SliderPage, ApiPage: SliderApiPage },
  { path: "system/components/switch", Page: SwitchPage, ApiPage: SwitchApiPage },
  { path: "system/components/textarea", Page: TextareaPage, ApiPage: TextareaApiPage },
  { path: "system/components/tooltip", Page: TooltipPage, ApiPage: TooltipApiPage },
  { path: "system/layout/container", Page: ContainerPage, ApiPage: ContainerApiPage },
  { path: "system/layout/grid", Page: GridPage, ApiPage: GridApiPage },
  { path: "system/layout/flex", Page: FlexPage, ApiPage: FlexApiPage },
  { path: "system/layout/aspect-ratio", Page: AspectRatioPage, ApiPage: AspectRatioApiPage },
  {
    path: "system/layout/resizable-panels",
    Page: ResizablePanelsPage,
    ApiPage: ResizablePanelsApiPage,
  },
  { path: "system/layout/scroll-area", Page: ScrollAreaPage, ApiPage: ScrollAreaApiPage },
  { path: "system/navigation/navbar", Page: NavbarPage, ApiPage: NavbarApiPage },
  { path: "system/navigation/sidebar", Page: SidebarPage, ApiPage: SidebarApiPage },
  { path: "system/navigation/breadcrumbs", Page: BreadcrumbsPage, ApiPage: BreadcrumbsApiPage },
  { path: "system/navigation/tabs", Page: TabsPage, ApiPage: TabsApiPage },
  { path: "system/navigation/pagination", Page: PaginationPage, ApiPage: PaginationApiPage },
  { path: "system/navigation/link", Page: LinkPage, ApiPage: LinkApiPage },
  { path: "system/navigation/dropdown-menu", Page: DropdownMenuPage, ApiPage: DropdownMenuApiPage },
  { path: "system/navigation/block-ui", Page: BlockUiPage, ApiPage: BlockUiApiPage },
  {
    path: "system/navigation/command-palette",
    Page: CommandPalettePage,
    ApiPage: CommandPaletteApiPage,
  },
  { path: "system/navigation/context-menu", Page: ContextMenuPage, ApiPage: ContextMenuApiPage },
  { path: "system/navigation/fab", Page: FabPage, ApiPage: FabApiPage },
  { path: "system/navigation/stepper", Page: StepperPage, ApiPage: StepperApiPage },
  { path: "system/feedback/modal", Page: ModalPage, ApiPage: ModalApiPage },
  { path: "system/feedback/drawer", Page: DrawerPage, ApiPage: DrawerApiPage },
  { path: "system/feedback/alert", Page: AlertPage, ApiPage: AlertApiPage },
  { path: "system/feedback/badge", Page: BadgePage, ApiPage: BadgeApiPage },
  {
    path: "system/feedback/copy-to-clipboard",
    Page: CopyToClipboardPage,
    ApiPage: CopyToClipboardApiPage,
  },
  { path: "system/feedback/popconfirm", Page: PopconfirmPage, ApiPage: PopconfirmApiPage },
  { path: "system/feedback/progress-bar", Page: ProgressBarPage, ApiPage: ProgressBarApiPage },
  { path: "system/feedback/skeleton", Page: SkeletonPage, ApiPage: SkeletonApiPage },
  { path: "system/feedback/spinner", Page: SpinnerPage, ApiPage: SpinnerApiPage },
  { path: "system/feedback/toast", Page: ToastPage, ApiPage: ToastApiPage },
  { path: "system/data-display/card", Page: CardPage, ApiPage: CardApiPage },
  { path: "system/data-display/accordion", Page: AccordionPage, ApiPage: AccordionApiPage },
  { path: "system/data-display/avatar", Page: AvatarPage, ApiPage: AvatarApiPage },
  { path: "system/data-display/divider", Page: DividerPage, ApiPage: DividerApiPage },
  { path: "system/data-display/empty-state", Page: EmptyStatePage, ApiPage: EmptyStateApiPage },
  { path: "system/data-display/indicator", Page: IndicatorPage, ApiPage: IndicatorApiPage },
  { path: "system/data-display/list", Page: ListPage, ApiPage: ListApiPage },
  {
    path: "system/data-display/property-list",
    Page: PropertyListPage,
    ApiPage: PropertyListApiPage,
  },
  { path: "system/data-display/shine", Page: ShinePage, ApiPage: ShineApiPage },
  {
    path: "system/data-display/statistic-card",
    Page: StatisticCardPage,
    ApiPage: StatisticCardApiPage,
  },
  { path: "system/data-display/table", Page: TablePage, ApiPage: TableApiPage },
  { path: "system/data-display/timeline", Page: TimelinePage, ApiPage: TimelineApiPage },
  { path: "system/data-display/transition", Page: TransitionPage, ApiPage: TransitionApiPage },
  { path: "system/data-display/tree-view", Page: TreeViewPage, ApiPage: TreeViewApiPage },
];
