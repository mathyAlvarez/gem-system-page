import { Container } from "@gem-org/gem-system";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

type FlushContainerProps = { title: string; body: string };

export function FlushContainer({ title, body }: FlushContainerProps) {
  return (
    <div className="container-stage">
      <Container size="sm" padded={false}>
        <ContainerDemoBox title={title} body={body} />
      </Container>
    </div>
  );
}
