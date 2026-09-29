import { useEffect, useState } from "react";
import { Button, Select } from "@gem-org/gem-system";

type User = { id: string; name: string; role: string; active: boolean };

type LoadingSelectProps = {
  users: readonly User[];
  texts: {
    label: string;
    loadingHelper: string;
    loadedHelper: string;
    reload: string;
    searchPlaceholder: string;
    noResultsText: string;
  };
};

export function LoadingSelect({ users, texts }: LoadingSelectProps) {
  const [attempt, setAttempt] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState<readonly User[]>([]);
  const [value, setValue] = useState("");

  const reload = () => {
    setIsLoading(true);
    setOptions([]);
    setValue("");
    setAttempt((current) => current + 1);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOptions(users);
      setValue("u1");
      setIsLoading(false);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [attempt, users]);

  return (
    <>
      <Select
        label={texts.label}
        options={options}
        optionValue="id"
        optionLabel="name"
        optionDescription="role"
        isLoading={isLoading}
        value={value}
        onChange={(next) => {
          if (typeof next === "string") setValue(next);
        }}
        helperText={isLoading ? texts.loadingHelper : texts.loadedHelper}
        searchPlaceholder={texts.searchPlaceholder}
        noResultsText={texts.noResultsText}
      />
      <div>
        <Button size="sm" variant="secondary" onClick={reload} disabled={isLoading}>
          {texts.reload}
        </Button>
      </div>
    </>
  );
}
