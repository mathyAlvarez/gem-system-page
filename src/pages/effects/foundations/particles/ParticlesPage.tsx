import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ApiLinkSection } from "../../../../components/ApiLinkSection.tsx";
import { DemoBlock, DocsPageHeader, DocsSection } from "../../../../components/DocsPrimitives.tsx";
import { ParticlesPlayground } from "./ParticlesPlayground.tsx";
import { CustomParticles } from "./examples/CustomParticles.tsx";
import customCode from "./examples/CustomParticles.tsx?raw";
import { KindParticles } from "./examples/KindParticles.tsx";
import kindCode from "./examples/KindParticles.tsx?raw";
import { MotionParticles } from "./examples/MotionParticles.tsx";
import motionCode from "./examples/MotionParticles.tsx?raw";
import { PausedParticles } from "./examples/PausedParticles.tsx";
import pausedCode from "./examples/PausedParticles.tsx?raw";
import { RainParticles } from "./examples/RainParticles.tsx";
import rainCode from "./examples/RainParticles.tsx?raw";
import "./ParticlesPage.scss";

type StoryId = "kinds" | "motions" | "rain" | "paused" | "custom";
type Story = { id: StoryId; file: string; code: string; preview: ReactNode; stack?: boolean };

const importCode = `import "@gem-org/gemffects/particles.css";
import { ParticleLayer, useParticleField, createParticle } from "@gem-org/gemffects/particles";`;

const story = { returnObjects: true } as const;

export function ParticlesPage() {
  const { t } = useTranslation("particles");

  const stories: Story[] = [
    { id: "kinds", file: "KindParticles.tsx", code: kindCode, preview: <KindParticles /> },
    { id: "motions", file: "MotionParticles.tsx", code: motionCode, preview: <MotionParticles /> },
    {
      id: "rain",
      file: "RainParticles.tsx",
      code: rainCode,
      preview: <RainParticles {...t("stories.rain.texts", story)} />,
    },
    {
      id: "paused",
      file: "PausedParticles.tsx",
      code: pausedCode,
      preview: <PausedParticles {...t("stories.paused.texts", story)} />,
      stack: true,
    },
    {
      id: "custom",
      file: "CustomParticles.tsx",
      code: customCode,
      preview: <CustomParticles {...t("stories.custom.texts", story)} />,
    },
  ];

  return (
    <div className="docs-page">
      <DocsPageHeader
        title={t("header.title")}
        description={t("header.description")}
        importPath={importCode}
      />

      <ParticlesPlayground />

      {stories.map((item) => (
        <DocsSection
          key={item.id}
          title={t(`stories.${item.id}.title`)}
          description={t(`stories.${item.id}.description`)}
        >
          <DemoBlock code={item.code} label={item.file} stack={item.stack}>
            {item.preview}
          </DemoBlock>
        </DocsSection>
      ))}

      <ApiLinkSection
        component="Particles"
        to="/effects/foundations/particles/api"
        linkLabel={t("apiLink")}
      />
    </div>
  );
}
