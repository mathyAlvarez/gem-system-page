import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "@gem-org/gem-system";
import { MarketingLayout } from "./layouts/MarketingLayout.tsx";
import { DocsLayout } from "./layouts/DocsLayout.tsx";
import { HomePage } from "./pages/home/HomePage.tsx";
import { PlaceholderPage } from "./pages/system/components/PlaceholderPage.tsx";
import { routeGroupsFor } from "./data/navigation.ts";
import { SYSTEM_LEGACY_ROOTS, type ProductId } from "./data/products.ts";
import { componentPages, docsPages, implementedRoutes } from "./data/routes.ts";

function LegacySystemRedirect() {
  const { pathname, search, hash } = useLocation();
  return <Navigate to={`/system${pathname}${search}${hash}`} replace />;
}

function placeholderRoutes(product: ProductId) {
  return routeGroupsFor(product).flatMap(({ base, routes }) =>
    routes
      .filter((route) => !implementedRoutes.has(`${product}/${base}/${route.path}`))
      .map((route) => (
        <Route
          key={`${product}-${base}-${route.path}`}
          path={`${product}/${base}/${route.path}`}
          element={
            <PlaceholderPage title={route.label} component={route.component ?? route.label} />
          }
        />
      )),
  );
}

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

          {placeholderRoutes("system")}
          {placeholderRoutes("effects")}
          {placeholderRoutes("transitions")}
        </Route>

        {/* Old root docs URLs → /system/... */}
        {SYSTEM_LEGACY_ROOTS.map((root) => (
          <Route key={root} path={`${root}/*`} element={<LegacySystemRedirect />} />
        ))}
        <Route path="getting-started" element={<LegacySystemRedirect />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </>
  );
}
