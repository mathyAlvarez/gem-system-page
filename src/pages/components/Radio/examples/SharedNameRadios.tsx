import { Radio } from "@gem-org/gem-system";

type SharedNameRadiosProps = {
  labels: { es: string; en: string; pt: string };
};

export function SharedNameRadios({ labels }: SharedNameRadiosProps) {
  return (
    <>
      <Radio name="standalone-lang" value="es" label={labels.es} defaultChecked />
      <Radio name="standalone-lang" value="en" label={labels.en} />
      <Radio name="standalone-lang" value="pt" label={labels.pt} />
    </>
  );
}
