import { useId, useState, type FormEvent } from "react";
import { Button, Drawer, InputText, toast } from "@gem-org/gem-system";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

type FormDrawerProps = {
  common: DrawerCommon;
  open: string;
  title: string;
  subtitle: string;
  name: string;
  namePlaceholder: string;
  website: string;
  websitePlaceholder: string;
  saved: string;
};

export function FormDrawer({
  common,
  open: openLabel,
  title,
  subtitle,
  ...texts
}: FormDrawerProps) {
  const [open, setOpen] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    toast.success(texts.saved);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={title}
        subtitle={subtitle}
        closeLabel={common.closeLabel}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {common.cancel}
            </Button>
            <Button size="sm" type="submit" form={formId}>
              {common.save}
            </Button>
          </>
        }
      >
        <form id={formId} className="drawer-stack" onSubmit={handleSubmit}>
          <InputText label={texts.name} placeholder={texts.namePlaceholder} required />
          <InputText label={texts.website} placeholder={texts.websitePlaceholder} type="url" />
        </form>
      </Drawer>
    </>
  );
}
