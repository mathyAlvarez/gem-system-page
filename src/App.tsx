import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "@gem-org/gem-system";
import { MarketingLayout } from "./layouts/MarketingLayout.tsx";
import { DocsLayout } from "./layouts/DocsLayout.tsx";
import { HomePage } from "./pages/home/HomePage.tsx";
import { PlaceholderPage } from "./pages/components/PlaceholderPage.tsx";
import { docsRouteGroups } from "./data/navigation.ts";
import { componentPages, docsPages, implementedRoutes } from "./data/routes.ts";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route element={<DocsLayout />}>
          {docsPages.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          {componentPages.flatMap(({ path, Page, ApiPage }) => [
            <Route key={path} path={path} element={<Page />} />,
            <Route key={`${path}/api`} path={`${path}/api`} element={<ApiPage />} />,
          ])}
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
