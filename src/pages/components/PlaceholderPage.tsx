import { Alert, Button, Typography } from "@gem-org/gem-system";
import { Link } from "react-router-dom";
import { DocsPageHeader } from "../../components/DocsPrimitives.tsx";

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

      <Alert
        status="info"
        variant="soft"
        title="Próximo paso"
        action={
          <Link to="/components/button">
            <Button variant="secondary" size="sm">
              Ver ejemplo Button
            </Button>
          </Link>
        }
      >
        <Typography variant="body">
          Usá <Typography variant="code" as="span">ButtonPage</Typography> como
          plantilla: header, secciones y <Typography variant="code" as="span">DemoBlock</Typography>.
        </Typography>
      </Alert>
    </div>
  );
}
