import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import { Trash } from "@gem-org/gem-system/icons";
import { wait } from "./demo.ts";
import "./popconfirm-demo.css";

type ActionCopy = { trigger: string; title: string; description: string; confirm: string; cancel: string; done: string };

type CustomButtonsPopconfirmProps = { element: ActionCopy; render: ActionCopy };

export function CustomButtonsPopconfirm({ element, render }: CustomButtonsPopconfirmProps) {
  return (
    <div className="popconfirm-row">
      <Popconfirm
        tone="warning"
        title={element.title}
        description={element.description}
        cancelButton={
          <Button variant="transparent" size="sm">
            {element.cancel}
          </Button>
        }
        confirmButton={
          <Button variant="warning" size="sm" rounded>
            {element.confirm}
          </Button>
        }
        onConfirm={() => {
          toast.success(element.done);
        }}
      >
        <Button variant="secondary" size="sm">
          {element.trigger}
        </Button>
      </Popconfirm>

      <Popconfirm
        title={render.title}
        description={render.description}
        confirmButton={({ ref, onClick, disabled, isLoading, className }) => (
          <Button
            ref={ref}
            className={className}
            variant="danger"
            size="sm"
            leftIcon={<Trash size="sm" />}
            disabled={disabled}
            isLoading={isLoading}
            onClick={onClick}
          >
            {render.confirm}
          </Button>
        )}
        cancelButton={({ ref, onClick, disabled, className }) => (
          <Button ref={ref} className={className} variant="link" size="sm" disabled={disabled} onClick={onClick}>
            {render.cancel}
          </Button>
        )}
        onConfirm={async () => {
          await wait(800);
          toast.success(render.done);
        }}
      >
        <Button variant="danger" size="sm">
          {render.trigger}
        </Button>
      </Popconfirm>
    </div>
  );
}
