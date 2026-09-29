import { Container } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";
import "./container-overrides.css";

type StyledContainersProps = {
  texts: { narrow: string; narrowBody: string; card: string; cardBody: string };
};

export function StyledContainers({ texts }: StyledContainersProps) {
  return (
    <div className="container-compare">
      <div className="container-stage">
        <Container className="container-narrow">
          <ContainerDemoBox title={texts.narrow} body={texts.narrowBody} />
        </Container>
      </div>
      <div className="container-stage">
        <Container className="container-card">
          <ContainerDemoBox title={texts.card} body={texts.cardBody} />
        </Container>
      </div>
    </div>
  );
}
