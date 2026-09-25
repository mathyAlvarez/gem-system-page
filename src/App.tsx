import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "@gem-org/gem-system";
import { MarketingLayout } from "./layouts/MarketingLayout.tsx";
import { DocsLayout } from "./layouts/DocsLayout.tsx";
import { HomePage } from "./pages/home/HomePage.tsx";
import { GettingStartedPage } from "./pages/GettingStartedPage.tsx";
import { TypographyPage } from "./pages/foundations/typography/TypographyPage.tsx";
import { TokensPage } from "./pages/foundations/tokens/TokensPage.tsx";
import { IconsPage } from "./pages/foundations/icons/IconsPage.tsx";
import { RadiiPage } from "./pages/foundations/radii/RadiiPage.tsx";
import { ShadowsPage } from "./pages/foundations/shadows/ShadowsPage.tsx";
import { SpacingPage } from "./pages/foundations/spacing/SpacingPage.tsx";
import { ButtonPage } from "./pages/components/ButtonPage.tsx";
import { PlaceholderPage } from "./pages/components/PlaceholderPage.tsx";
import { docsRouteGroups } from "./data/navigation.ts";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<DocsLayout />}>
          <Route path="getting-started" element={<GettingStartedPage />} />
          <Route path="foundations/typography" element={<TypographyPage />} />
          <Route path="foundations/tokens" element={<TokensPage />} />
          <Route path="foundations/icons" element={<IconsPage />} />
          <Route path="foundations/radii" element={<RadiiPage />} />
          <Route path="foundations/shadows" element={<ShadowsPage />} />
          <Route path="foundations/spacing" element={<SpacingPage />} />
          <Route path="components/button" element={<ButtonPage />} />
          {docsRouteGroups.flatMap(({ base, routes }) =>
            routes
              .filter((route) => !(base === "components" && route.path === "button"))
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
