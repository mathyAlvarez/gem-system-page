import { Button, ScrollArea, Typography } from "@gem-org/gem-system";
import "./scroll-demo.css";

type Message = { author: string; text: string };

type FillParentScrollAreaProps = {
  title: string;
  label: string;
  send: string;
  messages: Message[];
};

export function FillParentScrollArea({ title, label, send, messages }: FillParentScrollAreaProps) {
  return (
    <div className="scroll-frame flex h-80 flex-col overflow-hidden">
      <div className="border-b border-(--gem-color-border) p-4">
        <Typography variant="label" as="span">
          {title}
        </Typography>
      </div>

      <ScrollArea radius="none" label={label} className="min-h-0 flex-1">
        <div className="flex flex-col gap-3 p-4">
          {[...messages, ...messages].map((message, index) => (
            <div key={index}>
              <Typography variant="caption" as="p" className="m-0">
                {message.author}
              </Typography>
              <Typography variant="body" as="p" className="m-0">
                {message.text}
              </Typography>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex justify-end border-t border-(--gem-color-border) p-3">
        <Button size="sm">{send}</Button>
      </div>
    </div>
  );
}
