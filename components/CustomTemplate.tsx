import BillingCard from "@/components/BillingCard";
import ContactUsCard from "@/components/ContactUsCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/typings";
import Image from "next/image";

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
      <div className="relative flex flex-col justify-center items-center h-80 lg:h-96">
        <Image
          src={heroBackground}
          alt={heroTitle}
          fill
          className="absolute object-cover opacity-50 -z-10"
        />
        <div className="flex flex-col items-center gap-2 bg-white p-3">
          <h1 className="text-5xl lg:text-7xl text-gray-950">{heroTitle}</h1>
        </div>
      </div>

      {/* faq, contact*/}
      <div className="flex flex-col md:flex-row px-6 py-10 gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col basis-2/3">
          <div>
            {faqs?.map((faq, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
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
