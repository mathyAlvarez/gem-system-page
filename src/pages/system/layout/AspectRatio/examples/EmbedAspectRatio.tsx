import { AspectRatio } from "@gem-org/gem-system";

type EmbedAspectRatioProps = { title: string; body: string };

export function EmbedAspectRatio({ title, body }: EmbedAspectRatioProps) {
  const srcDoc = `<body style="margin:0;display:grid;place-items:center;height:100vh;font-family:sans-serif;background:#0d9f82;color:#fff"><p>${body}</p></body>`;

  return (
    <AspectRatio ratio="16:9" maxWidth={560}>
      <iframe title={title} srcDoc={srcDoc} loading="lazy" />
    </AspectRatio>
  );
}
