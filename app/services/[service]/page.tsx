import { services } from "@/assets/services";
import BillingCard from "@/components/BillingCard";
import ContactUsCard from "@/components/ContactUsCard";
import HeroBanner from "@/components/HeroBanner";
import PregnancyUltrasoundInfo from "@/components/PregnancyUltrasoundInfo";
import RequestAppointmentButton from "@/components/RequestAppointmentButton";
import SubService from "@/components/SubService";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import a from "indefinite";

function ServicePage({ params }: { params: { service: string } }) {
  const currService = services.filter(
    (service) => service.id === params.service
  )[0];
  return (
    <section id={params.service} className="flex flex-col">
      {/* Image, title, cta */}
      <HeroBanner title={currService.title} image={currService.image} />

      {/* description and faq, billing and contact*/}
      <div className="flex flex-col md:flex-row px-6 py-10 gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col basis-2/3 gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium">
              What is {a(currService.title)}?
            </h2>
            {currService.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>

          {currService.subService && (
            <SubService subService={currService.subService} />
          )}

          {currService.pregnancyInfo && (
            <PregnancyUltrasoundInfo pregInfo={currService.pregnancyInfo} />
          )}

          {currService.faqs && (
            <div className="mt-5">
              {currService.faqs?.map((faq, i) => (
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
          )}

          <div className="mt-10">
            <RequestAppointmentButton />
          </div>
        </div>
        <div className="flex flex-col h-fit basis-1/3 gap-5 sticky top-[15%]">
          <BillingCard />
          <ContactUsCard />
        </div>
      </div>
    </section>
  );
}
export default ServicePage;
