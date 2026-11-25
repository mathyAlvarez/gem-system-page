/**
 * Aggregates docs routes from each product zone.
 * Add pages in `routes.system.ts` / `routes.effects.ts` / `routes.transitions.ts`.
 */
import { effectsComponentPages, effectsDocsPages } from "./routes.effects.ts";
import { systemComponentPages, systemDocsPages } from "./routes.system.ts";
import { transitionsComponentPages, transitionsDocsPages } from "./routes.transitions.ts";

export const docsPages = [...systemDocsPages, ...effectsDocsPages, ...transitionsDocsPages];

export const componentPages = [
  ...systemComponentPages,
  ...effectsComponentPages,
  ...transitionsComponentPages,
];

export const implementedRoutes = new Set(componentPages.map(({ path }) => path));
