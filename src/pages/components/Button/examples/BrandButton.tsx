import { Button } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import "./brand-button.css";

export function BrandButton({ label }: { label: string }) {
  return (
    <Button className="brand-button" leftIcon={<Plus size="sm" />}>
      {label}
    </Button>
  );
}
