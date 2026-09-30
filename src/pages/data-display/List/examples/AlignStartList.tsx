import { Avatar, List } from "@gem-org/gem-system";
import "./list-demo.css";

type Message = { id: string; from: string; subject: string; preview: string };

type AlignStartListProps = { messages: Message[] };

export function AlignStartList({ messages }: AlignStartListProps) {
  return (
    <div className="list-demo">
      <List
        bordered
        divided
        items={messages.map((message) => ({
          id: message.id,
          align: "start" as const,
          avatar: <Avatar name={message.from} size="sm" alt="" />,
          label: message.subject,
          description: `${message.from} — ${message.preview}`,
        }))}
      />
    </div>
  );
}
