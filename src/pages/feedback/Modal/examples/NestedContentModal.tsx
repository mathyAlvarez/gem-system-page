import { useState } from "react";
import { Button, DatePicker, Modal, Select, Switch, Tabs } from "@gem-org/gem-system";
import type { ModalCommon } from "./demo.ts";
import "./modal-demo.css";

type NestedContentModalProps = {
  common: ModalCommon;
  open: string;
  title: string;
  subtitle: string;
  tabsLabel: string;
  tabs: { details: string; schedule: string };
  intro: string;
  region: string;
  regionPlaceholder: string;
  regions: { north: string; south: string; east: string; west: string };
  startDate: string;
  datePlaceholder: string;
  notify: string;
};

export function NestedContentModal({ common, open: openLabel, ...texts }: NestedContentModalProps) {
  const [open, setOpen] = useState(false);
  const regionOptions = Object.entries(texts.regions).map(([value, label]) => ({ value, label }));

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openLabel}</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        size="lg"
        title={texts.title}
        subtitle={texts.subtitle}
        closeLabel={common.closeLabel}
        footer={
          <>
            <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
              {common.cancel}
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              {common.save}
            </Button>
          </>
        }
      >
        <Tabs
          size="sm"
          defaultValue="details"
          listLabel={texts.tabsLabel}
          items={[
            {
              id: "details",
              label: texts.tabs.details,
              content: (
                <div className="modal-stack">
                  <p className="modal-copy">{texts.intro}</p>
                  <Select size="sm" label={texts.region} placeholder={texts.regionPlaceholder} options={regionOptions} />
                  <Switch label={texts.notify} defaultChecked />
                </div>
              ),
            },
            {
              id: "schedule",
              label: texts.tabs.schedule,
              content: (
                <div className="modal-stack">
                  <DatePicker size="sm" label={texts.startDate} placeholder={texts.datePlaceholder} />
                </div>
              ),
            },
          ]}
        />
      </Modal>
    </>
  );
}
