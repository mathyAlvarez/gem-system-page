import { Container, type ContainerProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { ContainerDemoBox } from "./ContainerDemoBox.tsx";

function ArticleContainer({ className, ...props }: ContainerProps) {
  return (
    <Container
      className={cn("[--gem-container-max:36rem] [--gem-container-pad:var(--gem-space-8)] py-6", className)}
      {...props}
    />
  );
}

type TailwindContainerProps = {
  texts: { article: string; articleBody: string; merged: string; mergedBody: string };
};

export function TailwindContainer({ texts }: TailwindContainerProps) {
  return (
    <div className="container-compare">
      <div className="container-stage">
        <ArticleContainer>
          <ContainerDemoBox title={texts.article} body={texts.articleBody} />
        </ArticleContainer>
      </div>
      <div className="container-stage">
        <ArticleContainer className="py-0 [--gem-container-max:24rem]">
          <ContainerDemoBox title={texts.merged} body={texts.mergedBody} />
        </ArticleContainer>
      </div>
    </div>
  );
}
