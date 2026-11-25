import { Alert, Typography } from "@gem-org/gem-system";
import { DocsPageHeader } from "../../../components/DocsPrimitives.tsx";

type PlaceholderPageProps = {
  title: string;
  component: string;
};

export function PlaceholderPage({ title, component }: PlaceholderPageProps) {
  return (
    <div className="docs-page">
      <DocsPageHeader
        title={title}
        description={`Página de documentación para ${title}. Todavía no tiene demos; la ruta ya está lista para completar.`}
        importPath={`import { ${component} } from "@gem-org/gem-system"`}
      />

      <Alert status="info" variant="soft" title="Próximo paso">
        <Typography variant="body">
          La ruta ya está lista. Migrá o creá la página con{" "}
          <Typography variant="code" as="span">
            DemoBlock
          </Typography>
          , playground y API siguiendo el blueprint de docs.
        </Typography>
      </Alert>
    </div>
  );
}
