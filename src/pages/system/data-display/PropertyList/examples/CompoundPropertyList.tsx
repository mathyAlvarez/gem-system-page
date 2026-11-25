import { Badge, PropertyList } from "@gem-org/gem-system";
import "./property-list-demo.css";

type CompoundPropertyListProps = {
  title: string;
  paid: string;
  customer: string;
  channel: string;
  web: string;
  quantity: string;
  address: string;
};

export function CompoundPropertyList({
  title,
  paid,
  customer,
  channel,
  web,
  quantity,
  address,
}: CompoundPropertyListProps) {
  return (
    <div className="property-list-demo">
      <PropertyList title={title} extra={<Badge tone="success">{paid}</Badge>} columns={2}>
        <PropertyList.Item label={customer}>Ada Lovelace</PropertyList.Item>
        <PropertyList.Item label={channel}>{web}</PropertyList.Item>
        <PropertyList.Item label="SKU">
          <span className="property-list-mono">GEM-CARD-12</span>
        </PropertyList.Item>
        <PropertyList.Item label={quantity}>3</PropertyList.Item>
        <PropertyList.Item label={address} span={2}>
          12 Analytical Engine Rd, London
        </PropertyList.Item>
      </PropertyList>
    </div>
  );
}
