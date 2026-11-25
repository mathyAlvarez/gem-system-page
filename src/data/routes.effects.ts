/**
 * Gemffects docs routes under `/effects/...`.
 * Keep page imports here so system routes stay in `routes.ts`.
 */
import type { ComponentType } from "react";
import { GettingStartedPage } from "../pages/effects/GettingStartedPage.tsx";
import { DurationPage } from "../pages/effects/foundations/duration/DurationPage.tsx";
import { EasingPage } from "../pages/effects/foundations/easing/EasingPage.tsx";
import { IntensityPage } from "../pages/effects/foundations/intensity/IntensityPage.tsx";
import { ParticlesApiPage } from "../pages/effects/foundations/particles/ParticlesApiPage.tsx";
import { ParticlesPage } from "../pages/effects/foundations/particles/ParticlesPage.tsx";
import { BorderBeamApiPage } from "../pages/effects/light/BorderBeam/BorderBeamApiPage.tsx";
import { BorderBeamPage } from "../pages/effects/light/BorderBeam/BorderBeamPage.tsx";
import { FlashApiPage } from "../pages/effects/light/Flash/FlashApiPage.tsx";
import { FlashPage } from "../pages/effects/light/Flash/FlashPage.tsx";
import { GlowApiPage } from "../pages/effects/light/Glow/GlowApiPage.tsx";
import { GlowPage } from "../pages/effects/light/Glow/GlowPage.tsx";
import { SpotlightApiPage } from "../pages/effects/light/Spotlight/SpotlightApiPage.tsx";
import { SpotlightPage } from "../pages/effects/light/Spotlight/SpotlightPage.tsx";
import { FloatApiPage } from "../pages/effects/motion/Float/FloatApiPage.tsx";
import { FloatPage } from "../pages/effects/motion/Float/FloatPage.tsx";
import { MagneticApiPage } from "../pages/effects/motion/Magnetic/MagneticApiPage.tsx";
import { MagneticPage } from "../pages/effects/motion/Magnetic/MagneticPage.tsx";
import { PulseScaleApiPage } from "../pages/effects/motion/PulseScale/PulseScaleApiPage.tsx";
import { PulseScalePage } from "../pages/effects/motion/PulseScale/PulseScalePage.tsx";
import { Tilt3DApiPage } from "../pages/effects/motion/Tilt3D/Tilt3DApiPage.tsx";
import { Tilt3DPage } from "../pages/effects/motion/Tilt3D/Tilt3DPage.tsx";
import { VortexApiPage } from "../pages/effects/motion/Vortex/VortexApiPage.tsx";
import { VortexPage } from "../pages/effects/motion/Vortex/VortexPage.tsx";
import { ZoomApiPage } from "../pages/effects/motion/Zoom/ZoomApiPage.tsx";
import { ZoomPage } from "../pages/effects/motion/Zoom/ZoomPage.tsx";
import { BlurUnveilApiPage } from "../pages/effects/style/BlurUnveil/BlurUnveilApiPage.tsx";
import { BlurUnveilPage } from "../pages/effects/style/BlurUnveil/BlurUnveilPage.tsx";
import { FlickerApiPage } from "../pages/effects/style/Flicker/FlickerApiPage.tsx";
import { FlickerPage } from "../pages/effects/style/Flicker/FlickerPage.tsx";
import { GlassmorphismApiPage } from "../pages/effects/style/Glassmorphism/GlassmorphismApiPage.tsx";
import { GlassmorphismPage } from "../pages/effects/style/Glassmorphism/GlassmorphismPage.tsx";
import { GlitchApiPage } from "../pages/effects/style/Glitch/GlitchApiPage.tsx";
import { GlitchPage } from "../pages/effects/style/Glitch/GlitchPage.tsx";
import { HoloFoilApiPage } from "../pages/effects/style/HoloFoil/HoloFoilApiPage.tsx";
import { HoloFoilPage } from "../pages/effects/style/HoloFoil/HoloFoilPage.tsx";
import { MarqueeApiPage } from "../pages/effects/style/Marquee/MarqueeApiPage.tsx";
import { MarqueePage } from "../pages/effects/style/Marquee/MarqueePage.tsx";
import { NoiseApiPage } from "../pages/effects/style/Noise/NoiseApiPage.tsx";
import { NoisePage } from "../pages/effects/style/Noise/NoisePage.tsx";
import { ScrambleTextApiPage } from "../pages/effects/style/ScrambleText/ScrambleTextApiPage.tsx";
import { ScrambleTextPage } from "../pages/effects/style/ScrambleText/ScrambleTextPage.tsx";
import { GradientBorderApiPage } from "../pages/effects/gradients/GradientBorder/GradientBorderApiPage.tsx";
import { GradientBorderPage } from "../pages/effects/gradients/GradientBorder/GradientBorderPage.tsx";
import { GradientGlossyApiPage } from "../pages/effects/gradients/GradientGlossy/GradientGlossyApiPage.tsx";
import { GradientGlossyPage } from "../pages/effects/gradients/GradientGlossy/GradientGlossyPage.tsx";
import { GradientMeshApiPage } from "../pages/effects/gradients/GradientMesh/GradientMeshApiPage.tsx";
import { GradientMeshPage } from "../pages/effects/gradients/GradientMesh/GradientMeshPage.tsx";
import { GradientTextApiPage } from "../pages/effects/gradients/GradientText/GradientTextApiPage.tsx";
import { GradientTextPage } from "../pages/effects/gradients/GradientText/GradientTextPage.tsx";
import { MeteorsApiPage } from "../pages/effects/particles/Meteors/MeteorsApiPage.tsx";
import { MeteorsPage } from "../pages/effects/particles/Meteors/MeteorsPage.tsx";
import { ParticleBurstApiPage } from "../pages/effects/particles/ParticleBurst/ParticleBurstApiPage.tsx";
import { ParticleBurstPage } from "../pages/effects/particles/ParticleBurst/ParticleBurstPage.tsx";
import { ParticleRainApiPage } from "../pages/effects/particles/ParticleRain/ParticleRainApiPage.tsx";
import { ParticleRainPage } from "../pages/effects/particles/ParticleRain/ParticleRainPage.tsx";
import { RipApiPage } from "../pages/effects/particles/Rip/RipApiPage.tsx";
import { RipPage } from "../pages/effects/particles/Rip/RipPage.tsx";
import { RipZoneApiPage } from "../pages/effects/particles/RipZone/RipZoneApiPage.tsx";
import { RipZonePage } from "../pages/effects/particles/RipZone/RipZonePage.tsx";
import { RippleApiPage } from "../pages/effects/particles/Ripple/RippleApiPage.tsx";
import { RipplePage } from "../pages/effects/particles/Ripple/RipplePage.tsx";
import { UnlockApiPage } from "../pages/effects/particles/Unlock/UnlockApiPage.tsx";
import { UnlockPage } from "../pages/effects/particles/Unlock/UnlockPage.tsx";

type PageRoute = { path: string; Page: ComponentType };
type ComponentPageRoute = PageRoute & { ApiPage: ComponentType };

const P = "effects" as const;

export const effectsDocsPages: PageRoute[] = [
  { path: `${P}/getting-started`, Page: GettingStartedPage },
  { path: `${P}/foundations/particles`, Page: ParticlesPage },
  { path: `${P}/foundations/particles/api`, Page: ParticlesApiPage },
  { path: `${P}/foundations/duration`, Page: DurationPage },
  { path: `${P}/foundations/easing`, Page: EasingPage },
  { path: `${P}/foundations/intensity`, Page: IntensityPage },
];

export const effectsComponentPages: ComponentPageRoute[] = [
  { path: `${P}/light/glow`, Page: GlowPage, ApiPage: GlowApiPage },
  { path: `${P}/light/spotlight`, Page: SpotlightPage, ApiPage: SpotlightApiPage },
  { path: `${P}/light/border-beam`, Page: BorderBeamPage, ApiPage: BorderBeamApiPage },
  { path: `${P}/light/flash`, Page: FlashPage, ApiPage: FlashApiPage },
  { path: `${P}/motion/tilt-3d`, Page: Tilt3DPage, ApiPage: Tilt3DApiPage },
  { path: `${P}/motion/float`, Page: FloatPage, ApiPage: FloatApiPage },
  { path: `${P}/motion/magnetic`, Page: MagneticPage, ApiPage: MagneticApiPage },
  { path: `${P}/motion/zoom`, Page: ZoomPage, ApiPage: ZoomApiPage },
  { path: `${P}/motion/pulse-scale`, Page: PulseScalePage, ApiPage: PulseScaleApiPage },
  { path: `${P}/motion/vortex`, Page: VortexPage, ApiPage: VortexApiPage },
  { path: `${P}/style/blur-unveil`, Page: BlurUnveilPage, ApiPage: BlurUnveilApiPage },
  { path: `${P}/style/flicker`, Page: FlickerPage, ApiPage: FlickerApiPage },
  { path: `${P}/style/glassmorphism`, Page: GlassmorphismPage, ApiPage: GlassmorphismApiPage },
  { path: `${P}/style/glitch`, Page: GlitchPage, ApiPage: GlitchApiPage },
  { path: `${P}/style/holo-foil`, Page: HoloFoilPage, ApiPage: HoloFoilApiPage },
  { path: `${P}/style/marquee`, Page: MarqueePage, ApiPage: MarqueeApiPage },
  { path: `${P}/style/noise`, Page: NoisePage, ApiPage: NoiseApiPage },
  { path: `${P}/style/scramble-text`, Page: ScrambleTextPage, ApiPage: ScrambleTextApiPage },
  {
    path: `${P}/gradients/gradient-border`,
    Page: GradientBorderPage,
    ApiPage: GradientBorderApiPage,
  },
  {
    path: `${P}/gradients/gradient-glossy`,
    Page: GradientGlossyPage,
    ApiPage: GradientGlossyApiPage,
  },
  { path: `${P}/gradients/gradient-mesh`, Page: GradientMeshPage, ApiPage: GradientMeshApiPage },
  { path: `${P}/gradients/gradient-text`, Page: GradientTextPage, ApiPage: GradientTextApiPage },
  { path: `${P}/particles/meteors`, Page: MeteorsPage, ApiPage: MeteorsApiPage },
  { path: `${P}/particles/particle-burst`, Page: ParticleBurstPage, ApiPage: ParticleBurstApiPage },
  { path: `${P}/particles/particle-rain`, Page: ParticleRainPage, ApiPage: ParticleRainApiPage },
  { path: `${P}/particles/rip`, Page: RipPage, ApiPage: RipApiPage },
  { path: `${P}/particles/rip-zone`, Page: RipZonePage, ApiPage: RipZoneApiPage },
  { path: `${P}/particles/ripple`, Page: RipplePage, ApiPage: RippleApiPage },
  { path: `${P}/particles/unlock`, Page: UnlockPage, ApiPage: UnlockApiPage },
];
