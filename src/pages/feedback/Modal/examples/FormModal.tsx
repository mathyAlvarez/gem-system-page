import { useId, useState, type FormEvent } from "react";
import { Button, InputText, Modal, toast } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

type FormModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  email: string;
  emailPlaceholder: string;
  role: string;
  rolePlaceholder: string;
  submit: string;
  sent: string;
};

export function FormModal({ common, open: openLabel, title, subtitle, ...texts }: FormModalProps) {
  const [open, setOpen] = useState(false);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    toast.success(texts.sent);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
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
              {texts.submit}
            </Button>
          </>
        }
      >
        <form id={formId} className="modal-form" onSubmit={handleSubmit}>
          <InputText label={texts.email} placeholder={texts.emailPlaceholder} type="email" required />
          <InputText label={texts.role} placeholder={texts.rolePlaceholder} />
        </form>
      </Modal>
    </>
  );
}
