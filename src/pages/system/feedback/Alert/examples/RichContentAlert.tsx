import { Alert } from "@gem-org/gem-system";
import "./alert-demo.css";

type RichContentAlertProps = { title: string; intro: string; items: string[] };

export function RichContentAlert({ title, intro, items }: RichContentAlertProps) {
  return (
    <Alert status="error" variant="outline" title={title}>
      {intro}
      <ul className="alert-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Alert>
  );
}
