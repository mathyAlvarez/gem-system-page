import { useState } from "react";
import { Button, Popconfirm, toast } from "@gem-org/gem-system";
import { Trash } from "@gem-org/gem-system/icons";
import type { PopconfirmCommon } from "./demo.ts";
import "./popconfirm-demo.css";

type ListPopconfirmProps = {
  common: PopconfirmCommon;
  files: string[];
  remove: string;
  title: string;
  confirm: string;
  removed: string;
  reset: string;
};

export function ListPopconfirm({
  common,
  files,
  remove,
  title,
  confirm,
  removed,
  reset,
}: ListPopconfirmProps) {
  const [items, setItems] = useState(files);

  if (items.length === 0) {
    return (
      <Button variant="secondary" size="sm" onClick={() => setItems(files)}>
        {reset}
      </Button>
    );
  }

  return (
    <ul className="popconfirm-list">
      {items.map((file) => (
        <li key={file}>
          <span>{file}</span>
          <Popconfirm
            placement="left"
            size="sm"
            title={`${title} ${file}?`}
            confirmLabel={confirm}
            cancelLabel={common.cancel}
            onConfirm={() => {
              setItems((current) => current.filter((item) => item !== file));
              toast.success(`${file} ${removed}`);
            }}
          >
            <Button variant="transparent" size="sm" iconOnly aria-label={`${remove} ${file}`}>
              <Trash size="sm" />
            </Button>
          </Popconfirm>
        </li>
      ))}
    </ul>
  );
}
