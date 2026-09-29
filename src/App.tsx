import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "@gem-org/gem-system";
import { MarketingLayout } from "./layouts/MarketingLayout.tsx";
import { DocsLayout } from "./layouts/DocsLayout.tsx";
import { HomePage } from "./pages/home/HomePage.tsx";
import { GettingStartedPage } from "./pages/GettingStartedPage.tsx";
import { OverrideStylesPage } from "./pages/override-styles/OverrideStylesPage.tsx";
import { TailwindOverridesPage } from "./pages/override-styles/tailwind/TailwindOverridesPage.tsx";
import { CvaOverridesPage } from "./pages/override-styles/cva/CvaOverridesPage.tsx";
import { CssVariablesPage } from "./pages/override-styles/css-variables/CssVariablesPage.tsx";
import { TypographyPage } from "./pages/foundations/typography/TypographyPage.tsx";
import { TokensPage } from "./pages/foundations/tokens/TokensPage.tsx";
import { IconsPage } from "./pages/foundations/icons/IconsPage.tsx";
import { RadiiPage } from "./pages/foundations/radii/RadiiPage.tsx";
import { ShadowsPage } from "./pages/foundations/shadows/ShadowsPage.tsx";
import { SpacingPage } from "./pages/foundations/spacing/SpacingPage.tsx";
import { ButtonPage } from "./pages/components/Button/ButtonPage.tsx";
import { ButtonApiPage } from "./pages/components/Button/ButtonApiPage.tsx";
import { CheckboxPage } from "./pages/components/Checkbox/CheckboxPage.tsx";
import { CheckboxApiPage } from "./pages/components/Checkbox/CheckboxApiPage.tsx";
import { ComboboxPage } from "./pages/components/Combobox/ComboboxPage.tsx";
import { ComboboxApiPage } from "./pages/components/Combobox/ComboboxApiPage.tsx";
import { DatePickerPage } from "./pages/components/DatePicker/DatePickerPage.tsx";
import { DatePickerApiPage } from "./pages/components/DatePicker/DatePickerApiPage.tsx";
import { FileUploaderPage } from "./pages/components/FileUploader/FileUploaderPage.tsx";
import { FileUploaderApiPage } from "./pages/components/FileUploader/FileUploaderApiPage.tsx";
import { InputMaskPage } from "./pages/components/InputMask/InputMaskPage.tsx";
import { InputMaskApiPage } from "./pages/components/InputMask/InputMaskApiPage.tsx";
import { InputNumberPage } from "./pages/components/InputNumber/InputNumberPage.tsx";
import { InputNumberApiPage } from "./pages/components/InputNumber/InputNumberApiPage.tsx";
import { InputPasswordPage } from "./pages/components/InputPassword/InputPasswordPage.tsx";
import { InputPasswordApiPage } from "./pages/components/InputPassword/InputPasswordApiPage.tsx";
import { InputSearchPage } from "./pages/components/InputSearch/InputSearchPage.tsx";
import { InputSearchApiPage } from "./pages/components/InputSearch/InputSearchApiPage.tsx";
import { InputTextPage } from "./pages/components/InputText/InputTextPage.tsx";
import { InputTextApiPage } from "./pages/components/InputText/InputTextApiPage.tsx";
import { OtpInputPage } from "./pages/components/OtpInput/OtpInputPage.tsx";
import { OtpInputApiPage } from "./pages/components/OtpInput/OtpInputApiPage.tsx";
import { RadioPage } from "./pages/components/Radio/RadioPage.tsx";
import { RadioApiPage } from "./pages/components/Radio/RadioApiPage.tsx";
import { RadioGroupPage } from "./pages/components/RadioGroup/RadioGroupPage.tsx";
import { RadioGroupApiPage } from "./pages/components/RadioGroup/RadioGroupApiPage.tsx";
import { SelectPage } from "./pages/components/Select/SelectPage.tsx";
import { SelectApiPage } from "./pages/components/Select/SelectApiPage.tsx";
import { SliderPage } from "./pages/components/Slider/SliderPage.tsx";
import { SliderApiPage } from "./pages/components/Slider/SliderApiPage.tsx";
import { SwitchPage } from "./pages/components/Switch/SwitchPage.tsx";
import { SwitchApiPage } from "./pages/components/Switch/SwitchApiPage.tsx";
import { TextareaPage } from "./pages/components/Textarea/TextareaPage.tsx";
import { TextareaApiPage } from "./pages/components/Textarea/TextareaApiPage.tsx";
import { TooltipPage } from "./pages/components/Tooltip/TooltipPage.tsx";
import { TooltipApiPage } from "./pages/components/Tooltip/TooltipApiPage.tsx";
import { ContainerPage } from "./pages/layout/Container/ContainerPage.tsx";
import { ContainerApiPage } from "./pages/layout/Container/ContainerApiPage.tsx";
import { GridPage } from "./pages/layout/Grid/GridPage.tsx";
import { GridApiPage } from "./pages/layout/Grid/GridApiPage.tsx";
import { FlexPage } from "./pages/layout/Flex/FlexPage.tsx";
import { FlexApiPage } from "./pages/layout/Flex/FlexApiPage.tsx";
import { PlaceholderPage } from "./pages/components/PlaceholderPage.tsx";
import { docsRouteGroups } from "./data/navigation.ts";

const implementedRoutes = new Set(
  [
    ...[
      "button",
      "checkbox",
      "combobox",
      "date-picker",
      "file-uploader",
      "input-mask",
      "input-number",
      "input-password",
      "input-search",
      "input-text",
      "otp-input",
      "radio",
      "radio-group",
      "select",
      "slider",
      "switch",
      "textarea",
      "tooltip",
    ].map((path) => `components/${path}`),
    "layout/container",
    "layout/grid",
    "layout/flex",
  ],
);

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<DocsLayout />}>
          <Route path="getting-started" element={<GettingStartedPage />} />
          <Route path="override-styles" element={<OverrideStylesPage />} />
          <Route path="override-styles/tailwind" element={<TailwindOverridesPage />} />
          <Route path="override-styles/cva" element={<CvaOverridesPage />} />
          <Route path="override-styles/css-variables" element={<CssVariablesPage />} />
          <Route path="foundations/typography" element={<TypographyPage />} />
          <Route path="foundations/tokens" element={<TokensPage />} />
          <Route path="foundations/icons" element={<IconsPage />} />
          <Route path="foundations/radii" element={<RadiiPage />} />
          <Route path="foundations/shadows" element={<ShadowsPage />} />
          <Route path="foundations/spacing" element={<SpacingPage />} />
          <Route path="components/button" element={<ButtonPage />} />
          <Route path="components/button/api" element={<ButtonApiPage />} />
          <Route path="components/checkbox" element={<CheckboxPage />} />
          <Route path="components/checkbox/api" element={<CheckboxApiPage />} />
          <Route path="components/combobox" element={<ComboboxPage />} />
          <Route path="components/combobox/api" element={<ComboboxApiPage />} />
          <Route path="components/date-picker" element={<DatePickerPage />} />
          <Route path="components/date-picker/api" element={<DatePickerApiPage />} />
          <Route path="components/file-uploader" element={<FileUploaderPage />} />
          <Route path="components/file-uploader/api" element={<FileUploaderApiPage />} />
          <Route path="components/input-mask" element={<InputMaskPage />} />
          <Route path="components/input-mask/api" element={<InputMaskApiPage />} />
          <Route path="components/input-number" element={<InputNumberPage />} />
          <Route path="components/input-number/api" element={<InputNumberApiPage />} />
          <Route path="components/input-password" element={<InputPasswordPage />} />
          <Route path="components/input-password/api" element={<InputPasswordApiPage />} />
          <Route path="components/input-search" element={<InputSearchPage />} />
          <Route path="components/input-search/api" element={<InputSearchApiPage />} />
          <Route path="components/input-text" element={<InputTextPage />} />
          <Route path="components/input-text/api" element={<InputTextApiPage />} />
          <Route path="components/otp-input" element={<OtpInputPage />} />
          <Route path="components/otp-input/api" element={<OtpInputApiPage />} />
          <Route path="components/radio" element={<RadioPage />} />
          <Route path="components/radio/api" element={<RadioApiPage />} />
          <Route path="components/radio-group" element={<RadioGroupPage />} />
          <Route path="components/radio-group/api" element={<RadioGroupApiPage />} />
          <Route path="components/select" element={<SelectPage />} />
          <Route path="components/select/api" element={<SelectApiPage />} />
          <Route path="components/slider" element={<SliderPage />} />
          <Route path="components/slider/api" element={<SliderApiPage />} />
          <Route path="components/switch" element={<SwitchPage />} />
          <Route path="components/switch/api" element={<SwitchApiPage />} />
          <Route path="components/textarea" element={<TextareaPage />} />
          <Route path="components/textarea/api" element={<TextareaApiPage />} />
          <Route path="components/tooltip" element={<TooltipPage />} />
          <Route path="components/tooltip/api" element={<TooltipApiPage />} />
          <Route path="layout/container" element={<ContainerPage />} />
          <Route path="layout/container/api" element={<ContainerApiPage />} />
          <Route path="layout/grid" element={<GridPage />} />
          <Route path="layout/grid/api" element={<GridApiPage />} />
          <Route path="layout/flex" element={<FlexPage />} />
          <Route path="layout/flex/api" element={<FlexApiPage />} />
          {docsRouteGroups.flatMap(({ base, routes }) =>
            routes
              .filter((route) => !implementedRoutes.has(`${base}/${route.path}`))
              .map((route) => (
                <Route
                  key={`${base}-${route.path}`}
                  path={`${base}/${route.path}`}
                  element={
                    <PlaceholderPage
                      title={route.label}
                      component={route.component ?? route.label}
                    />
                  }
                />
              )),
          )}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </>
  );
}
