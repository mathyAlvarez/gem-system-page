import { DatePicker } from "@gem-org/gem-system";

const today = new Date();

type LocaleDatePickersProps = { labels: { en: string; es: string; pt: string } };

export function LocaleDatePickers({ labels }: LocaleDatePickersProps) {
  return (
    <>
      <DatePicker label={labels.en} locale="en" defaultValue={today} />
      <DatePicker label={labels.es} locale="es" defaultValue={today} />
      <DatePicker label={labels.pt} locale="pt" defaultValue={today} />
    </>
  );
}
