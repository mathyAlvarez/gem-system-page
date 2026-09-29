import { Container } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

type BaseContainerProps = { title: string; body: string };

export function BaseContainer({ title, body }: BaseContainerProps) {
  return (
    <div className="container-stage">
      <Container>
        <ContainerDemoBox title={title} body={body} />
      </Container>
    </div>
  );
}
