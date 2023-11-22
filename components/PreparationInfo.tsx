import { PreparationInfo } from "@/typings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  prepInfo: PreparationInfo;
};

function PreparationInfo({ prepInfo }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium">{prepInfo.header}</h3>
      {prepInfo.faqs.map((faq, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer.map((answer, i) => (
                <p key={i} className="pb-5 last:pb-0">
                  {answer}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
export default PreparationInfo;
