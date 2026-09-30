import { useState } from "react";
import { List } from "@gem-org/gem-system";
import "./list-demo.css";

type Task = { id: string; label: string };

type CheckboxListProps = { tasks: Task[]; done: string };

export function CheckboxList({ tasks, done }: CheckboxListProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({ [tasks[0].id]: true });
  const count = tasks.filter((task) => checked[task.id]).length;

  return (
    <div className="list-demo">
      <List
        bordered
        items={tasks.map((task) => ({
          type: "checkbox" as const,
          id: task.id,
          label: task.label,
          checked: Boolean(checked[task.id]),
        }))}
        onCheckedChange={(id, next) => setChecked((current) => ({ ...current, [id]: next }))}
      />
      <p className="list-caption">
        {count}/{tasks.length} {done}
      </p>
    </div>
  );
}
