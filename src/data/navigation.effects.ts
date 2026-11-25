import { Home } from "@gem-org/gem-system/icons";
import { productPath } from "./products.ts";
import type { ComponentRoute, DocsRouteGroup, NavEntry, NavLeaf } from "./navigation.types.ts";

const PRODUCT = "effects" as const;

export const lightRoutes: ComponentRoute[] = [
  { path: "glow", label: "Glow" },
  { path: "spotlight", label: "Spotlight" },
  { path: "border-beam", label: "Border Beam", component: "BorderBeam" },
  { path: "flash", label: "Flash" },
];

export const motionRoutes: ComponentRoute[] = [
  { path: "tilt-3d", label: "Tilt 3D", component: "Tilt3D" },
  { path: "float", label: "Float" },
  { path: "magnetic", label: "Magnetic" },
  { path: "zoom", label: "Zoom" },
  { path: "pulse-scale", label: "Pulse Scale", component: "PulseScale" },
  { path: "vortex", label: "Vortex" },
];

export const styleRoutes: ComponentRoute[] = [
  { path: "holo-foil", label: "Holo Foil", component: "HoloFoil" },
  { path: "flicker", label: "Flicker" },
  { path: "glitch", label: "Glitch" },
  { path: "glassmorphism", label: "Glassmorphism" },
  { path: "blur-unveil", label: "Blur Unveil", component: "BlurUnveil" },
  { path: "marquee", label: "Marquee" },
  { path: "scramble-text", label: "Scramble Text", component: "ScrambleText" },
  { path: "noise", label: "Noise" },
];

export const gradientRoutes: ComponentRoute[] = [
  { path: "gradient-text", label: "Gradient Text", component: "GradientText" },
  { path: "gradient-mesh", label: "Gradient Mesh", component: "GradientMesh" },
  { path: "gradient-border", label: "Gradient Border", component: "GradientBorder" },
  { path: "gradient-glossy", label: "Gradient Glossy", component: "GradientGlossy" },
];

export const particleRoutes: ComponentRoute[] = [
  { path: "particle-burst", label: "Particle Burst", component: "ParticleBurst" },
  { path: "particle-rain", label: "Particle Rain", component: "ParticleRain" },
  { path: "ripple", label: "Ripple" },
  { path: "rip", label: "Rip" },
  { path: "rip-zone", label: "Rip Zone", component: "RipZone" },
  { path: "meteors", label: "Meteors" },
  { path: "unlock", label: "Unlock" },
];

export const effectsRouteGroups: DocsRouteGroup[] = [
  { base: "light", routes: lightRoutes },
  { base: "motion", routes: motionRoutes },
  { base: "style", routes: styleRoutes },
  { base: "gradients", routes: gradientRoutes },
  { base: "particles", routes: particleRoutes },
];

const toNavItems = (base: string, routes: ComponentRoute[]): NavLeaf[] =>
  routes.map((route) => ({
    id: `${base}-${route.path}`,
    label: route.label,
    to: productPath(PRODUCT, base, route.path),
  }));

export const EFFECTS_API_NAV_ID = "effects-api";

const apiNavItems: NavLeaf[] = effectsRouteGroups
  .flatMap(({ base, routes }) =>
    routes.map((route) => ({
      id: `api-${base}-${route.path}`,
      label: route.component ?? route.label,
      to: productPath(PRODUCT, base, route.path, "api"),
    })),
  )
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

export const effectsNavigation: NavEntry[] = [
  {
    id: "getting-started",
    labelKey: "gettingStarted",
    to: productPath(PRODUCT, "getting-started"),
    icon: Home,
  },
  {
    id: "foundations",
    labelKey: "foundations",
    items: [
      {
        id: "foundation-particles",
        labelKey: "foundationParticles",
        to: productPath(PRODUCT, "foundations", "particles"),
      },
      {
        id: "foundation-duration",
        labelKey: "duration",
        to: productPath(PRODUCT, "foundations", "duration"),
      },
      {
        id: "foundation-easing",
        labelKey: "easing",
        to: productPath(PRODUCT, "foundations", "easing"),
      },
      {
        id: "foundation-intensity",
        labelKey: "intensity",
        to: productPath(PRODUCT, "foundations", "intensity"),
      },
    ],
  },
  { id: "light", labelKey: "light", items: toNavItems("light", lightRoutes) },
  { id: "motion", labelKey: "motion", items: toNavItems("motion", motionRoutes) },
  { id: "style", labelKey: "style", items: toNavItems("style", styleRoutes) },
  { id: "gradients", labelKey: "gradients", items: toNavItems("gradients", gradientRoutes) },
  { id: "particles", labelKey: "particles", items: toNavItems("particles", particleRoutes) },
  { id: EFFECTS_API_NAV_ID, labelKey: "effectsApi", items: apiNavItems },
];
