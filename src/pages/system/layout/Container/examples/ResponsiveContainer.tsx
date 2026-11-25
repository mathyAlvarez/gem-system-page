import { useSyncExternalStore } from "react";
import { Container } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

const steps = [
  { query: "(min-width: 1024px)", padding: "2rem" },
  { query: "(min-width: 768px)", padding: "1.5rem" },
  { query: "(min-width: 640px)", padding: "1.25rem" },
];

const getPadding = () =>
  steps.find((step) => window.matchMedia(step.query).matches)?.padding ?? "1rem";

const subscribe = (onChange: () => void) => {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
};

type ResponsiveContainerProps = { title: string; body: string };

export function ResponsiveContainer({ title, body }: ResponsiveContainerProps) {
  const padding = useSyncExternalStore(subscribe, getPadding);

  return (
    <div className="container-stage">
      <Container size="xl">
        <ContainerDemoBox title={`${title}: ${padding}`} body={body} />
      </Container>
    </div>
  );
}
