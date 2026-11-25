import { Banner, Button } from "@gem-org/gem-system";

type BannerAlertProps = { title: string; description: string; review: string; closeLabel: string };

export function BannerAlert({ title, description, review, closeLabel }: BannerAlertProps) {
  return (
    <Banner
      status="info"
      variant="solid"
      radius="sm"
      title={title}
      isClosable
      closeAriaLabel={closeLabel}
      action={
        <Button variant="secondary" size="sm">
          {review}
        </Button>
      }
    >
      {description}
    </Banner>
  );
}
