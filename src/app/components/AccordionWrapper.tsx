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
  return (
    <AccordionItem value={`item-${itemNumber}`}>
      <AccordionTrigger className="text-left">{triggerText}</AccordionTrigger>
      <AccordionContent>
        <div dangerouslySetInnerHTML={{ __html: contentText }} />
      </AccordionContent>
    </AccordionItem>
  );
};
