import type { StepperItem } from "@gem-org/gem-system";

type StepCopy = { label: string; description: string; content: string };

export type StepperTexts = {
  navLabel: string;
  back: string;
  next: string;
  finish: string;
  restart: string;
  done: string;
  steps: {
    account: StepCopy;
    profile: StepCopy;
    review: StepCopy;
  };
};

export function setupItems({ steps }: StepperTexts): StepperItem[] {
  return [
    { id: "account", ...steps.account },
    { id: "profile", ...steps.profile },
    { id: "review", ...steps.review },
  ];
}
