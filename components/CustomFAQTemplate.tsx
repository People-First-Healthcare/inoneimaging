import BillingCard from "@/components/BillingCard";
import ContactUsCard from "@/components/ContactUsCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/typings";
import HeroBanner from "./HeroBanner";

type Props = {
  sectionId: string;
  heroTitle: string;
  heroBackground: string;
  mainTitle?: string;
  mainDesc?: string;
  faqs?: Faq[];
  billingCard?: boolean;
  contactUsCard?: boolean;
};

function CustomTemplate({
  sectionId,
  heroTitle,
  heroBackground,
  mainTitle,
  mainDesc,
  faqs,
  billingCard,
  contactUsCard,
}: Props) {
  return (
    <section id={sectionId} className="flex flex-col">
      {/* Image, title */}
      <HeroBanner title={heroTitle} image={heroBackground} />

      {/* faq, contact*/}
      <div className="flex flex-col md:flex-row px-6 py-10 gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col basis-2/3">
          <div>
            {faqs?.map((faq, i) => (
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
          ""
        </div>
        <div className="flex flex-col basis-1/3 gap-5">
          {billingCard && <BillingCard />}
          {contactUsCard && <ContactUsCard />}
        </div>
      </div>
    </section>
  );
}
export default CustomTemplate;
