/**
 * i18n namespaces for Gemsitions docs pages.
 * Merged into `locales/index.ts` so product docs stay easy to add/remove.
 */
import enAnimatedNumber from "./en/animated-number.json";
import enAutoAnimateContainer from "./en/auto-animate-container.json";
import enCollapseTransition from "./en/collapse-transition.json";
import enCrossFadeView from "./en/cross-fade-view.json";
import enFadeTransition from "./en/fade-transition.json";
import enFlipList from "./en/flip-list.json";
import enTransitionsGettingStarted from "./en/transitions-getting-started.json";
import enPushStack from "./en/push-stack.json";
import enScaleTransition from "./en/scale-transition.json";
import enSharedLayout from "./en/shared-layout.json";
import enSlideTransition from "./en/slide-transition.json";
import enStaggerGroup from "./en/stagger-group.json";
import enSwipeToDismiss from "./en/swipe-to-dismiss.json";
import enTextMorph from "./en/text-morph.json";
import enViewTransition from "./en/view-transition.json";
import esAnimatedNumber from "./es/animated-number.json";
import esAutoAnimateContainer from "./es/auto-animate-container.json";
import esCollapseTransition from "./es/collapse-transition.json";
import esCrossFadeView from "./es/cross-fade-view.json";
import esFadeTransition from "./es/fade-transition.json";
import esFlipList from "./es/flip-list.json";
import esTransitionsGettingStarted from "./es/transitions-getting-started.json";
import esPushStack from "./es/push-stack.json";
import esScaleTransition from "./es/scale-transition.json";
import esSharedLayout from "./es/shared-layout.json";
import esSlideTransition from "./es/slide-transition.json";
import esStaggerGroup from "./es/stagger-group.json";
import esSwipeToDismiss from "./es/swipe-to-dismiss.json";
import esTextMorph from "./es/text-morph.json";
import esViewTransition from "./es/view-transition.json";

export const transitionsResourcesEs = {
  transitionsGettingStarted: esTransitionsGettingStarted,
  animatedNumber: esAnimatedNumber,
  textMorph: esTextMorph,
  autoAnimateContainer: esAutoAnimateContainer,
  sharedLayout: esSharedLayout,
  collapseTransition: esCollapseTransition,
  fadeTransition: esFadeTransition,
  scaleTransition: esScaleTransition,
  slideTransition: esSlideTransition,
  crossFadeView: esCrossFadeView,
  pushStack: esPushStack,
  viewTransition: esViewTransition,
  flipList: esFlipList,
  staggerGroup: esStaggerGroup,
  swipeToDismiss: esSwipeToDismiss,
} as const;

export const transitionsResourcesEn = {
  transitionsGettingStarted: enTransitionsGettingStarted,
  animatedNumber: enAnimatedNumber,
  textMorph: enTextMorph,
  autoAnimateContainer: enAutoAnimateContainer,
  sharedLayout: enSharedLayout,
  collapseTransition: enCollapseTransition,
  fadeTransition: enFadeTransition,
  scaleTransition: enScaleTransition,
  slideTransition: enSlideTransition,
  crossFadeView: enCrossFadeView,
  pushStack: enPushStack,
  viewTransition: enViewTransition,
  flipList: enFlipList,
  staggerGroup: enStaggerGroup,
  swipeToDismiss: enSwipeToDismiss,
} as const;
