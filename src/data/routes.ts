import type { ComponentType } from "react";
import { GettingStartedPage } from "../pages/GettingStartedPage.tsx";
import { OverrideStylesPage } from "../pages/override-styles/OverrideStylesPage.tsx";
import { TailwindOverridesPage } from "../pages/override-styles/tailwind/TailwindOverridesPage.tsx";
import { CvaOverridesPage } from "../pages/override-styles/cva/CvaOverridesPage.tsx";
import { CssVariablesPage } from "../pages/override-styles/css-variables/CssVariablesPage.tsx";
import { TypographyPage } from "../pages/foundations/typography/TypographyPage.tsx";
import { TokensPage } from "../pages/foundations/tokens/TokensPage.tsx";
import { IconsPage } from "../pages/foundations/icons/IconsPage.tsx";
import { RadiiPage } from "../pages/foundations/radii/RadiiPage.tsx";
import { ShadowsPage } from "../pages/foundations/shadows/ShadowsPage.tsx";
import { SpacingPage } from "../pages/foundations/spacing/SpacingPage.tsx";
import { ButtonPage } from "../pages/components/Button/ButtonPage.tsx";
import { ButtonApiPage } from "../pages/components/Button/ButtonApiPage.tsx";
import { CheckboxPage } from "../pages/components/Checkbox/CheckboxPage.tsx";
import { CheckboxApiPage } from "../pages/components/Checkbox/CheckboxApiPage.tsx";
import { ComboboxPage } from "../pages/components/Combobox/ComboboxPage.tsx";
import { ComboboxApiPage } from "../pages/components/Combobox/ComboboxApiPage.tsx";
import { DatePickerPage } from "../pages/components/DatePicker/DatePickerPage.tsx";
import { DatePickerApiPage } from "../pages/components/DatePicker/DatePickerApiPage.tsx";
import { FileUploaderPage } from "../pages/components/FileUploader/FileUploaderPage.tsx";
import { FileUploaderApiPage } from "../pages/components/FileUploader/FileUploaderApiPage.tsx";
import { InputMaskPage } from "../pages/components/InputMask/InputMaskPage.tsx";
import { InputMaskApiPage } from "../pages/components/InputMask/InputMaskApiPage.tsx";
import { InputNumberPage } from "../pages/components/InputNumber/InputNumberPage.tsx";
import { InputNumberApiPage } from "../pages/components/InputNumber/InputNumberApiPage.tsx";
import { InputPasswordPage } from "../pages/components/InputPassword/InputPasswordPage.tsx";
import { InputPasswordApiPage } from "../pages/components/InputPassword/InputPasswordApiPage.tsx";
import { InputSearchPage } from "../pages/components/InputSearch/InputSearchPage.tsx";
import { InputSearchApiPage } from "../pages/components/InputSearch/InputSearchApiPage.tsx";
import { InputTextPage } from "../pages/components/InputText/InputTextPage.tsx";
import { InputTextApiPage } from "../pages/components/InputText/InputTextApiPage.tsx";
import { OtpInputPage } from "../pages/components/OtpInput/OtpInputPage.tsx";
import { OtpInputApiPage } from "../pages/components/OtpInput/OtpInputApiPage.tsx";
import { RadioPage } from "../pages/components/Radio/RadioPage.tsx";
import { RadioApiPage } from "../pages/components/Radio/RadioApiPage.tsx";
import { RadioGroupPage } from "../pages/components/RadioGroup/RadioGroupPage.tsx";
import { RadioGroupApiPage } from "../pages/components/RadioGroup/RadioGroupApiPage.tsx";
import { SelectPage } from "../pages/components/Select/SelectPage.tsx";
import { SelectApiPage } from "../pages/components/Select/SelectApiPage.tsx";
import { SliderPage } from "../pages/components/Slider/SliderPage.tsx";
import { SliderApiPage } from "../pages/components/Slider/SliderApiPage.tsx";
import { SwitchPage } from "../pages/components/Switch/SwitchPage.tsx";
import { SwitchApiPage } from "../pages/components/Switch/SwitchApiPage.tsx";
import { TextareaPage } from "../pages/components/Textarea/TextareaPage.tsx";
import { TextareaApiPage } from "../pages/components/Textarea/TextareaApiPage.tsx";
import { TooltipPage } from "../pages/components/Tooltip/TooltipPage.tsx";
import { TooltipApiPage } from "../pages/components/Tooltip/TooltipApiPage.tsx";
import { ContainerPage } from "../pages/layout/Container/ContainerPage.tsx";
import { ContainerApiPage } from "../pages/layout/Container/ContainerApiPage.tsx";
import { GridPage } from "../pages/layout/Grid/GridPage.tsx";
import { GridApiPage } from "../pages/layout/Grid/GridApiPage.tsx";
import { FlexPage } from "../pages/layout/Flex/FlexPage.tsx";
import { FlexApiPage } from "../pages/layout/Flex/FlexApiPage.tsx";
import { AspectRatioPage } from "../pages/layout/AspectRatio/AspectRatioPage.tsx";
import { AspectRatioApiPage } from "../pages/layout/AspectRatio/AspectRatioApiPage.tsx";
import { ResizablePanelsPage } from "../pages/layout/ResizablePanels/ResizablePanelsPage.tsx";
import { ResizablePanelsApiPage } from "../pages/layout/ResizablePanels/ResizablePanelsApiPage.tsx";
import { ScrollAreaPage } from "../pages/layout/ScrollArea/ScrollAreaPage.tsx";
import { ScrollAreaApiPage } from "../pages/layout/ScrollArea/ScrollAreaApiPage.tsx";
import { NavbarPage } from "../pages/navigation/Navbar/NavbarPage.tsx";
import { NavbarApiPage } from "../pages/navigation/Navbar/NavbarApiPage.tsx";
import { SidebarPage } from "../pages/navigation/Sidebar/SidebarPage.tsx";
import { SidebarApiPage } from "../pages/navigation/Sidebar/SidebarApiPage.tsx";
import { BreadcrumbsPage } from "../pages/navigation/Breadcrumbs/BreadcrumbsPage.tsx";
import { BreadcrumbsApiPage } from "../pages/navigation/Breadcrumbs/BreadcrumbsApiPage.tsx";
import { TabsPage } from "../pages/navigation/Tabs/TabsPage.tsx";
import { TabsApiPage } from "../pages/navigation/Tabs/TabsApiPage.tsx";
import { PaginationPage } from "../pages/navigation/Pagination/PaginationPage.tsx";
import { PaginationApiPage } from "../pages/navigation/Pagination/PaginationApiPage.tsx";
import { LinkPage } from "../pages/navigation/Link/LinkPage.tsx";
import { LinkApiPage } from "../pages/navigation/Link/LinkApiPage.tsx";
import { DropdownMenuPage } from "../pages/navigation/DropdownMenu/DropdownMenuPage.tsx";
import { DropdownMenuApiPage } from "../pages/navigation/DropdownMenu/DropdownMenuApiPage.tsx";
import { BlockUiPage } from "../pages/navigation/BlockUi/BlockUiPage.tsx";
import { BlockUiApiPage } from "../pages/navigation/BlockUi/BlockUiApiPage.tsx";
import { CommandPalettePage } from "../pages/navigation/CommandPalette/CommandPalettePage.tsx";
import { CommandPaletteApiPage } from "../pages/navigation/CommandPalette/CommandPaletteApiPage.tsx";
import { ContextMenuPage } from "../pages/navigation/ContextMenu/ContextMenuPage.tsx";
import { ContextMenuApiPage } from "../pages/navigation/ContextMenu/ContextMenuApiPage.tsx";
import { FabPage } from "../pages/navigation/Fab/FabPage.tsx";
import { FabApiPage } from "../pages/navigation/Fab/FabApiPage.tsx";
import { StepperPage } from "../pages/navigation/Stepper/StepperPage.tsx";
import { StepperApiPage } from "../pages/navigation/Stepper/StepperApiPage.tsx";
import { ModalPage } from "../pages/feedback/Modal/ModalPage.tsx";
import { ModalApiPage } from "../pages/feedback/Modal/ModalApiPage.tsx";
import { DrawerPage } from "../pages/feedback/Drawer/DrawerPage.tsx";
import { DrawerApiPage } from "../pages/feedback/Drawer/DrawerApiPage.tsx";
import { AlertPage } from "../pages/feedback/Alert/AlertPage.tsx";
import { AlertApiPage } from "../pages/feedback/Alert/AlertApiPage.tsx";
import { BadgePage } from "../pages/feedback/Badge/BadgePage.tsx";
import { BadgeApiPage } from "../pages/feedback/Badge/BadgeApiPage.tsx";
import { CopyToClipboardPage } from "../pages/feedback/CopyToClipboard/CopyToClipboardPage.tsx";
import { CopyToClipboardApiPage } from "../pages/feedback/CopyToClipboard/CopyToClipboardApiPage.tsx";
import { PopconfirmPage } from "../pages/feedback/Popconfirm/PopconfirmPage.tsx";
import { PopconfirmApiPage } from "../pages/feedback/Popconfirm/PopconfirmApiPage.tsx";
import { ProgressBarPage } from "../pages/feedback/ProgressBar/ProgressBarPage.tsx";
import { ProgressBarApiPage } from "../pages/feedback/ProgressBar/ProgressBarApiPage.tsx";
import { SkeletonPage } from "../pages/feedback/Skeleton/SkeletonPage.tsx";
import { SkeletonApiPage } from "../pages/feedback/Skeleton/SkeletonApiPage.tsx";
import { SpinnerPage } from "../pages/feedback/Spinner/SpinnerPage.tsx";
import { SpinnerApiPage } from "../pages/feedback/Spinner/SpinnerApiPage.tsx";
import { ToastPage } from "../pages/feedback/Toast/ToastPage.tsx";
import { ToastApiPage } from "../pages/feedback/Toast/ToastApiPage.tsx";
import { CardPage } from "../pages/data-display/Card/CardPage.tsx";
import { CardApiPage } from "../pages/data-display/Card/CardApiPage.tsx";
import { AccordionPage } from "../pages/data-display/Accordion/AccordionPage.tsx";
import { AccordionApiPage } from "../pages/data-display/Accordion/AccordionApiPage.tsx";
import { AvatarPage } from "../pages/data-display/Avatar/AvatarPage.tsx";
import { AvatarApiPage } from "../pages/data-display/Avatar/AvatarApiPage.tsx";
import { DividerPage } from "../pages/data-display/Divider/DividerPage.tsx";
import { DividerApiPage } from "../pages/data-display/Divider/DividerApiPage.tsx";
import { EmptyStatePage } from "../pages/data-display/EmptyState/EmptyStatePage.tsx";
import { EmptyStateApiPage } from "../pages/data-display/EmptyState/EmptyStateApiPage.tsx";
import { IndicatorPage } from "../pages/data-display/Indicator/IndicatorPage.tsx";
import { IndicatorApiPage } from "../pages/data-display/Indicator/IndicatorApiPage.tsx";
import { ListPage } from "../pages/data-display/List/ListPage.tsx";
import { ListApiPage } from "../pages/data-display/List/ListApiPage.tsx";
import { PropertyListPage } from "../pages/data-display/PropertyList/PropertyListPage.tsx";
import { PropertyListApiPage } from "../pages/data-display/PropertyList/PropertyListApiPage.tsx";
import { ShinePage } from "../pages/data-display/Shine/ShinePage.tsx";
import { ShineApiPage } from "../pages/data-display/Shine/ShineApiPage.tsx";
import { StatisticCardPage } from "../pages/data-display/StatisticCard/StatisticCardPage.tsx";
import { StatisticCardApiPage } from "../pages/data-display/StatisticCard/StatisticCardApiPage.tsx";
import { TablePage } from "../pages/data-display/Table/TablePage.tsx";
import { TableApiPage } from "../pages/data-display/Table/TableApiPage.tsx";
import { TimelinePage } from "../pages/data-display/Timeline/TimelinePage.tsx";
import { TimelineApiPage } from "../pages/data-display/Timeline/TimelineApiPage.tsx";
import { TransitionPage } from "../pages/data-display/Transition/TransitionPage.tsx";
import { TransitionApiPage } from "../pages/data-display/Transition/TransitionApiPage.tsx";
import { TreeViewPage } from "../pages/data-display/TreeView/TreeViewPage.tsx";
import { TreeViewApiPage } from "../pages/data-display/TreeView/TreeViewApiPage.tsx";

type PageRoute = { path: string; Page: ComponentType };
type ComponentPageRoute = PageRoute & { ApiPage: ComponentType };

export const docsPages: PageRoute[] = [
  { path: "getting-started", Page: GettingStartedPage },
  { path: "override-styles", Page: OverrideStylesPage },
  { path: "override-styles/tailwind", Page: TailwindOverridesPage },
  { path: "override-styles/cva", Page: CvaOverridesPage },
  { path: "override-styles/css-variables", Page: CssVariablesPage },
  { path: "foundations/typography", Page: TypographyPage },
  { path: "foundations/tokens", Page: TokensPage },
  { path: "foundations/icons", Page: IconsPage },
  { path: "foundations/radii", Page: RadiiPage },
  { path: "foundations/shadows", Page: ShadowsPage },
  { path: "foundations/spacing", Page: SpacingPage },
];

export const componentPages: ComponentPageRoute[] = [
  { path: "components/button", Page: ButtonPage, ApiPage: ButtonApiPage },
  { path: "components/checkbox", Page: CheckboxPage, ApiPage: CheckboxApiPage },
  { path: "components/combobox", Page: ComboboxPage, ApiPage: ComboboxApiPage },
  { path: "components/date-picker", Page: DatePickerPage, ApiPage: DatePickerApiPage },
  { path: "components/file-uploader", Page: FileUploaderPage, ApiPage: FileUploaderApiPage },
  { path: "components/input-mask", Page: InputMaskPage, ApiPage: InputMaskApiPage },
  { path: "components/input-number", Page: InputNumberPage, ApiPage: InputNumberApiPage },
  { path: "components/input-password", Page: InputPasswordPage, ApiPage: InputPasswordApiPage },
  { path: "components/input-search", Page: InputSearchPage, ApiPage: InputSearchApiPage },
  { path: "components/input-text", Page: InputTextPage, ApiPage: InputTextApiPage },
  { path: "components/otp-input", Page: OtpInputPage, ApiPage: OtpInputApiPage },
  { path: "components/radio", Page: RadioPage, ApiPage: RadioApiPage },
  { path: "components/radio-group", Page: RadioGroupPage, ApiPage: RadioGroupApiPage },
  { path: "components/select", Page: SelectPage, ApiPage: SelectApiPage },
  { path: "components/slider", Page: SliderPage, ApiPage: SliderApiPage },
  { path: "components/switch", Page: SwitchPage, ApiPage: SwitchApiPage },
  { path: "components/textarea", Page: TextareaPage, ApiPage: TextareaApiPage },
  { path: "components/tooltip", Page: TooltipPage, ApiPage: TooltipApiPage },
  { path: "layout/container", Page: ContainerPage, ApiPage: ContainerApiPage },
  { path: "layout/grid", Page: GridPage, ApiPage: GridApiPage },
  { path: "layout/flex", Page: FlexPage, ApiPage: FlexApiPage },
  { path: "layout/aspect-ratio", Page: AspectRatioPage, ApiPage: AspectRatioApiPage },
  { path: "layout/resizable-panels", Page: ResizablePanelsPage, ApiPage: ResizablePanelsApiPage },
  { path: "layout/scroll-area", Page: ScrollAreaPage, ApiPage: ScrollAreaApiPage },
  { path: "navigation/navbar", Page: NavbarPage, ApiPage: NavbarApiPage },
  { path: "navigation/sidebar", Page: SidebarPage, ApiPage: SidebarApiPage },
  { path: "navigation/breadcrumbs", Page: BreadcrumbsPage, ApiPage: BreadcrumbsApiPage },
  { path: "navigation/tabs", Page: TabsPage, ApiPage: TabsApiPage },
  { path: "navigation/pagination", Page: PaginationPage, ApiPage: PaginationApiPage },
  { path: "navigation/link", Page: LinkPage, ApiPage: LinkApiPage },
  { path: "navigation/dropdown-menu", Page: DropdownMenuPage, ApiPage: DropdownMenuApiPage },
  { path: "navigation/block-ui", Page: BlockUiPage, ApiPage: BlockUiApiPage },
  { path: "navigation/command-palette", Page: CommandPalettePage, ApiPage: CommandPaletteApiPage },
  { path: "navigation/context-menu", Page: ContextMenuPage, ApiPage: ContextMenuApiPage },
  { path: "navigation/fab", Page: FabPage, ApiPage: FabApiPage },
  { path: "navigation/stepper", Page: StepperPage, ApiPage: StepperApiPage },
  { path: "feedback/modal", Page: ModalPage, ApiPage: ModalApiPage },
  { path: "feedback/drawer", Page: DrawerPage, ApiPage: DrawerApiPage },
  { path: "feedback/alert", Page: AlertPage, ApiPage: AlertApiPage },
  { path: "feedback/badge", Page: BadgePage, ApiPage: BadgeApiPage },
  { path: "feedback/copy-to-clipboard", Page: CopyToClipboardPage, ApiPage: CopyToClipboardApiPage },
  { path: "feedback/popconfirm", Page: PopconfirmPage, ApiPage: PopconfirmApiPage },
  { path: "feedback/progress-bar", Page: ProgressBarPage, ApiPage: ProgressBarApiPage },
  { path: "feedback/skeleton", Page: SkeletonPage, ApiPage: SkeletonApiPage },
  { path: "feedback/spinner", Page: SpinnerPage, ApiPage: SpinnerApiPage },
  { path: "feedback/toast", Page: ToastPage, ApiPage: ToastApiPage },
  { path: "data-display/card", Page: CardPage, ApiPage: CardApiPage },
  { path: "data-display/accordion", Page: AccordionPage, ApiPage: AccordionApiPage },
  { path: "data-display/avatar", Page: AvatarPage, ApiPage: AvatarApiPage },
  { path: "data-display/divider", Page: DividerPage, ApiPage: DividerApiPage },
  { path: "data-display/empty-state", Page: EmptyStatePage, ApiPage: EmptyStateApiPage },
  { path: "data-display/indicator", Page: IndicatorPage, ApiPage: IndicatorApiPage },
  { path: "data-display/list", Page: ListPage, ApiPage: ListApiPage },
  { path: "data-display/property-list", Page: PropertyListPage, ApiPage: PropertyListApiPage },
  { path: "data-display/shine", Page: ShinePage, ApiPage: ShineApiPage },
  { path: "data-display/statistic-card", Page: StatisticCardPage, ApiPage: StatisticCardApiPage },
  { path: "data-display/table", Page: TablePage, ApiPage: TableApiPage },
  { path: "data-display/timeline", Page: TimelinePage, ApiPage: TimelineApiPage },
  { path: "data-display/transition", Page: TransitionPage, ApiPage: TransitionApiPage },
  { path: "data-display/tree-view", Page: TreeViewPage, ApiPage: TreeViewApiPage },
];

export const implementedRoutes = new Set(componentPages.map(({ path }) => path));
