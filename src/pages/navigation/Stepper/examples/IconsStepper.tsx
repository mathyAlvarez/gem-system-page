import { Stepper, type StepperItem } from "@gem-org/gem-system";
import { Calendar, Folder, Settings, User } from "@gem-org/gem-system/icons";
import "./stepper-demo.css";

type IconStep = { label: string; content: string };

type IconsStepperProps = {
  navLabel: string;
  steps: { account: IconStep; files: IconStep; schedule: IconStep; settings: IconStep };
};

export function IconsStepper({ navLabel, steps }: IconsStepperProps) {
  const items: StepperItem[] = [
    { id: "account", icon: <User size="sm" />, ...steps.account },
    { id: "files", icon: <Folder size="sm" />, ...steps.files },
    { id: "schedule", icon: <Calendar size="sm" />, ...steps.schedule },
    { id: "settings", icon: <Settings size="sm" />, ...steps.settings },
  ];

  return (
    <div className="stepper-demo">
      <Stepper items={items} defaultValue="files" alternativeLabel navLabel={navLabel} />
    </div>
  );
}
