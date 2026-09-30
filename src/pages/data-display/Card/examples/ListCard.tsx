import { Button, Card } from "@gem-org/gem-system";
import "./card-demo.css";

type Plan = { name: string; price: string; text: string };

type ListCardProps = { plans: Plan[]; choose: string };

export function ListCard({ plans, choose }: ListCardProps) {
  return (
    <ul className="card-list">
      {plans.map((plan, index) => (
        <li key={plan.name}>
          <Card
            shadow={index === 1 ? "md" : "none"}
            title={plan.name}
            footer={
              <Button size="sm" variant={index === 1 ? "primary" : "secondary"}>
                {choose} {plan.name}
              </Button>
            }
          >
            <p className="card-price">{plan.price}</p>
            {plan.text}
          </Card>
        </li>
      ))}
    </ul>
  );
}
