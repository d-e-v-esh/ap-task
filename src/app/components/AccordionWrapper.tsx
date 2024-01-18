import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionWrapperProps = {
  triggerText: string;
  contentText: string;
  itemNumber: number;
};

export const AccordionWrapper = ({
  triggerText,
  contentText,
  itemNumber,
}: AccordionWrapperProps) => {
  console.log({ itemNumber: `item-${itemNumber}` });

  return (
    <AccordionItem value={`item-${itemNumber}`}>
      <AccordionTrigger>{triggerText}</AccordionTrigger>
      <AccordionContent>
        <div dangerouslySetInnerHTML={{ __html: contentText }} />
      </AccordionContent>
    </AccordionItem>
  );
};
