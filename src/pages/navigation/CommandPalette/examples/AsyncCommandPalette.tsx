import { useRef, useState } from "react";
import { Button, CommandPalette, defaultCommandFilter, type CommandPaletteCommand } from "@gem-org/gem-system";
import { actionCommands, navigationCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

function searchCommands(commands: CommandPaletteCommand[], query: string) {
  return new Promise<CommandPaletteCommand[]>((resolve) => {
    window.setTimeout(() => resolve(commands.filter((item) => defaultCommandFilter(item, query))), 700);
  });
}

type AsyncCommandPaletteProps = { texts: CommandPaletteTexts };

export function AsyncCommandPalette({ texts }: AsyncCommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CommandPaletteCommand[]>([]);
  const [loading, setLoading] = useState(false);
  const lastRequest = useRef(0);

  async function search(next: string) {
    setQuery(next);
    setLoading(true);
    const request = ++lastRequest.current;
    const items = await searchCommands([...navigationCommands(texts), ...actionCommands(texts)], next);
    if (request !== lastRequest.current) return;
    setResults(items);
    setLoading(false);
  }

  return (
    <div className="palette-stack">
      <Button
        onClick={() => {
          setOpen(true);
          search("");
        }}
      >
        {texts.open}
      </Button>
      <CommandPalette
        items={results}
        open={open}
        onOpenChange={setOpen}
        query={query}
        onQueryChange={search}
        loading={loading}
        shouldFilter={false}
        resetOnOpen={false}
        shortcut={false}
        {...paletteLabels(texts)}
      />
    </div>
  );
}
