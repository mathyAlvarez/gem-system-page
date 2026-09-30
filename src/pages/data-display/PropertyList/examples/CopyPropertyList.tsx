import { Badge, CopyToClipboard, PropertyList } from "@gem-org/gem-system";
import "./property-list-demo.css";

type CopyPropertyListProps = {
  title: string;
  clientId: string;
  status: string;
  active: string;
  webhook: string;
  created: string;
  createdValue: string;
  copy: string;
  copied: string;
};

const CLIENT_ID = "gem_pk_live_8c21";

export function CopyPropertyList(props: CopyPropertyListProps) {
  const { title, clientId, status, active, webhook, created, createdValue, copy, copied } = props;

  return (
    <div className="property-list-demo property-list-demo--narrow">
      <PropertyList title={title} bordered>
        <PropertyList.Item label={clientId}>
          <span className="property-list-value-row">
            <span className="property-list-mono">{CLIENT_ID}</span>
            <CopyToClipboard
              value={CLIENT_ID}
              size="sm"
              label={copy}
              copiedLabel={copied}
              copyAriaLabel={`${copy} ${clientId}`}
              copiedAriaLabel={copied}
            />
          </span>
        </PropertyList.Item>
        <PropertyList.Item label={status}>
          <Badge tone="success" variant="soft">
            {active}
          </Badge>
        </PropertyList.Item>
        <PropertyList.Item label={webhook}>https://api.gem.org/hooks</PropertyList.Item>
        <PropertyList.Item label={created}>{createdValue}</PropertyList.Item>
      </PropertyList>
    </div>
  );
}
