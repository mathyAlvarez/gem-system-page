import { useState } from "react";
import { Button, List } from "@gem-org/gem-system";
import { File, Trash } from "@gem-org/gem-system/icons";
import "./list-demo.css";

type SecondaryActionListProps = { files: string[]; remove: string; restore: string };

export function SecondaryActionList({ files, remove, restore }: SecondaryActionListProps) {
  const [visible, setVisible] = useState(files);
  const [selected, setSelected] = useState<string>();

  return (
    <div className="list-demo">
      <List
        bordered
        divided
        value={selected}
        onChange={(id) => setSelected(id)}
        items={visible.map((file) => ({
          id: file,
          label: file,
          icon: <File size="sm" />,
          secondaryAction: (
            <Button
              variant="transparent"
              size="sm"
              iconOnly
              aria-label={`${remove} ${file}`}
              onClick={() => setVisible((current) => current.filter((item) => item !== file))}
            >
              <Trash size="sm" />
            </Button>
          ),
        }))}
      />
      {visible.length < files.length ? (
        <div>
          <Button variant="link" size="sm" onClick={() => setVisible(files)}>
            {restore}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
