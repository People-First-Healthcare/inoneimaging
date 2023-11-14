import { PregnancyInfo } from "@/typings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  pregInfo: PregnancyInfo;
};

function PregnancyUltrasoundInfo({ pregInfo }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium">Pregnancy Ultrasounds</h3>
        <p>{pregInfo.description}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl">{pregInfo.subServiceHeader}</h3>
        <ul className="flex flex-col gap-5">
          {pregInfo.subService.map((subService, i) => (
            <li key={i}>
              <p className="underline">{subService.name}</p>
              <p>{subService.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium">{pregInfo.preparationHeader}</h3>
        {pregInfo.preperationFaqs.map((faq, i) => (
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
    </div>
  );
}
export default PregnancyUltrasoundInfo;
