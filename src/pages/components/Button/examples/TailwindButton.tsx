import { Button, type ButtonProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";

function PillButton({ className, ...props }: ButtonProps) {
  return <Button className={cn("rounded-full bg-emerald-600 px-6 hover:bg-emerald-700", className)} {...props} />;
}

export function TailwindButton({ label }: { label: string }) {
  return (
    <>
      <Button>{label}</Button>
      <PillButton>{label}</PillButton>
      <PillButton className="bg-sky-600 hover:bg-sky-700">{label}</PillButton>
    </>
  );
}
