/**
 * Gemsitions docs routes under `/transitions/...`.
 * Keep page imports here so system routes stay in `routes.ts`.
 */
import type { ComponentType } from "react";
import { GettingStartedPage } from "../pages/transitions/GettingStartedPage.tsx";
import { AnimatedNumberApiPage } from "../pages/transitions/content/AnimatedNumber/AnimatedNumberApiPage.tsx";
import { AnimatedNumberPage } from "../pages/transitions/content/AnimatedNumber/AnimatedNumberPage.tsx";
import { TextMorphApiPage } from "../pages/transitions/content/TextMorph/TextMorphApiPage.tsx";
import { TextMorphPage } from "../pages/transitions/content/TextMorph/TextMorphPage.tsx";
import { AutoAnimateContainerApiPage } from "../pages/transitions/morphing-layout/AutoAnimateContainer/AutoAnimateContainerApiPage.tsx";
import { AutoAnimateContainerPage } from "../pages/transitions/morphing-layout/AutoAnimateContainer/AutoAnimateContainerPage.tsx";
import { SharedLayoutApiPage } from "../pages/transitions/morphing-layout/SharedLayout/SharedLayoutApiPage.tsx";
import { SharedLayoutPage } from "../pages/transitions/morphing-layout/SharedLayout/SharedLayoutPage.tsx";
import { CollapseTransitionApiPage } from "../pages/transitions/mount-unmount/CollapseTransition/CollapseTransitionApiPage.tsx";
import { CollapseTransitionPage } from "../pages/transitions/mount-unmount/CollapseTransition/CollapseTransitionPage.tsx";
import { FadeTransitionApiPage } from "../pages/transitions/mount-unmount/FadeTransition/FadeTransitionApiPage.tsx";
import { FadeTransitionPage } from "../pages/transitions/mount-unmount/FadeTransition/FadeTransitionPage.tsx";
import { ScaleTransitionApiPage } from "../pages/transitions/mount-unmount/ScaleTransition/ScaleTransitionApiPage.tsx";
import { ScaleTransitionPage } from "../pages/transitions/mount-unmount/ScaleTransition/ScaleTransitionPage.tsx";
import { SlideTransitionApiPage } from "../pages/transitions/mount-unmount/SlideTransition/SlideTransitionApiPage.tsx";
import { SlideTransitionPage } from "../pages/transitions/mount-unmount/SlideTransition/SlideTransitionPage.tsx";
import { CrossFadeViewApiPage } from "../pages/transitions/views-layouts/CrossFadeView/CrossFadeViewApiPage.tsx";
import { CrossFadeViewPage } from "../pages/transitions/views-layouts/CrossFadeView/CrossFadeViewPage.tsx";
import { PushStackApiPage } from "../pages/transitions/views-layouts/PushStack/PushStackApiPage.tsx";
import { PushStackPage } from "../pages/transitions/views-layouts/PushStack/PushStackPage.tsx";
import { ViewTransitionApiPage } from "../pages/transitions/views-layouts/ViewTransition/ViewTransitionApiPage.tsx";
import { ViewTransitionPage } from "../pages/transitions/views-layouts/ViewTransition/ViewTransitionPage.tsx";
import { FlipListApiPage } from "../pages/transitions/lists-sequences/FlipList/FlipListApiPage.tsx";
import { FlipListPage } from "../pages/transitions/lists-sequences/FlipList/FlipListPage.tsx";
import { StaggerGroupApiPage } from "../pages/transitions/lists-sequences/StaggerGroup/StaggerGroupApiPage.tsx";
import { StaggerGroupPage } from "../pages/transitions/lists-sequences/StaggerGroup/StaggerGroupPage.tsx";
import { SwipeToDismissApiPage } from "../pages/transitions/lists-sequences/SwipeToDismiss/SwipeToDismissApiPage.tsx";
import { SwipeToDismissPage } from "../pages/transitions/lists-sequences/SwipeToDismiss/SwipeToDismissPage.tsx";

type PageRoute = { path: string; Page: ComponentType };
type ComponentPageRoute = PageRoute & { ApiPage: ComponentType };

const P = "transitions" as const;

export const transitionsDocsPages: PageRoute[] = [
  { path: `${P}/getting-started`, Page: GettingStartedPage },
];

export const transitionsComponentPages: ComponentPageRoute[] = [
  {
    path: `${P}/content/animated-number`,
    Page: AnimatedNumberPage,
    ApiPage: AnimatedNumberApiPage,
  },
  { path: `${P}/content/text-morph`, Page: TextMorphPage, ApiPage: TextMorphApiPage },
  {
    path: `${P}/morphing-layout/auto-animate-container`,
    Page: AutoAnimateContainerPage,
    ApiPage: AutoAnimateContainerApiPage,
  },
  {
    path: `${P}/morphing-layout/shared-layout`,
    Page: SharedLayoutPage,
    ApiPage: SharedLayoutApiPage,
  },
  {
    path: `${P}/mount-unmount/collapse-transition`,
    Page: CollapseTransitionPage,
    ApiPage: CollapseTransitionApiPage,
  },
  {
    path: `${P}/mount-unmount/fade-transition`,
    Page: FadeTransitionPage,
    ApiPage: FadeTransitionApiPage,
  },
  {
    path: `${P}/mount-unmount/scale-transition`,
    Page: ScaleTransitionPage,
    ApiPage: ScaleTransitionApiPage,
  },
  {
    path: `${P}/mount-unmount/slide-transition`,
    Page: SlideTransitionPage,
    ApiPage: SlideTransitionApiPage,
  },
  {
    path: `${P}/views-layouts/cross-fade-view`,
    Page: CrossFadeViewPage,
    ApiPage: CrossFadeViewApiPage,
  },
  {
    path: `${P}/views-layouts/push-stack`,
    Page: PushStackPage,
    ApiPage: PushStackApiPage,
  },
  {
    path: `${P}/views-layouts/view-transition`,
    Page: ViewTransitionPage,
    ApiPage: ViewTransitionApiPage,
  },
  {
    path: `${P}/lists-sequences/flip-list`,
    Page: FlipListPage,
    ApiPage: FlipListApiPage,
  },
  {
    path: `${P}/lists-sequences/stagger-group`,
    Page: StaggerGroupPage,
    ApiPage: StaggerGroupApiPage,
  },
  {
    path: `${P}/lists-sequences/swipe-to-dismiss`,
    Page: SwipeToDismissPage,
    ApiPage: SwipeToDismissApiPage,
  },
];
