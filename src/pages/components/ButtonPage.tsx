import { Button } from "@gem-org/gem-system";
import { Close, Plus, Search } from "@gem-org/gem-system/icons";
import { DemoBlock, DocsPageHeader, DocsSection } from "../../components/DocsPrimitives.tsx";

const variants = [
  "primary",
  "secondary",
  "tertiary",
  "transparent",
  "danger",
  "success",
  "warning",
  "info",
  "neutral",
  "link",
] as const;

const sizes = ["sm", "md", "lg", "xl"] as const;

export function ButtonPage() {
  return (
    <div className="docs-page">
      <DocsPageHeader
        title="Button"
        description="Acción primaria y secundarias. Variantes, tamaños, loading e iconos."
        importPath='import { Button } from "@gem-org/gem-system"'
      />

      <DocsSection title="Variantes">
        <DemoBlock
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`}
        >
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </DemoBlock>
      </DocsSection>

      <DocsSection title="Tamaños">
        <DemoBlock
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </DemoBlock>
      </DocsSection>

      <DocsSection title="Con iconos">
        <DemoBlock
          code={`<Button leftIcon={<Plus title="Alta" />}>Nuevo</Button>
<Button iconOnly aria-label="Cerrar"><Close /></Button>
<Button rightIcon={<Search />}>Buscar</Button>`}
        >
          <Button leftIcon={<Plus title="Alta" />}>Nuevo</Button>
          <Button iconOnly aria-label="Cerrar">
            <Close />
          </Button>
          <Button variant="secondary" rightIcon={<Search />}>
            Buscar
          </Button>
        </DemoBlock>
      </DocsSection>

      <DocsSection title="Estados">
        <DemoBlock
          code={`<Button isLoading>Guardando</Button>
<Button disabled>Deshabilitado</Button>
<Button rounded>Rounded</Button>`}
        >
          <Button isLoading>Guardando</Button>
          <Button disabled>Deshabilitado</Button>
          <Button rounded>Rounded</Button>
          <Button shadow="md">Con sombra</Button>
        </DemoBlock>
      </DocsSection>
    </div>
  );
}
