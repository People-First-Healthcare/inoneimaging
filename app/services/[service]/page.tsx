import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BillingCard from "@/components/BillingCard";
import ContactUsCard from "@/components/ContactUsCard";
import a from "indefinite";
import { services } from "@/assets/services";

function ServicePage({ params }: { params: { service: string } }) {
  const currService = services.filter(
    (service) => service.id === params.service
  )[0];
  return (
    <section id={params.service} className="flex flex-col">
      {/* Image, title, cta */}
      <div className="relative flex flex-col justify-center items-center h-80 lg:h-96">
        <Image
          src={currService.image}
          alt={currService.title}
          fill
          className="absolute object-cover opacity-50 -z-10"
        />
        <div className="flex flex-col items-center gap-2 bg-white p-3">
          <h1 className="text-5xl lg:text-7xl text-gray-950">
            {currService.title}
          </h1>
        </div>
      </div>

      {/* description and faq, billing and contact*/}
      <div className="flex flex-col md:flex-row px-6 py-10 gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col basis-2/3">
          <h2 className="text-xl font-medium mb-5">
            What is {a(currService.title)}?
          </h2>
          <p>{currService.description}</p>
          <div className="mt-10">
            {currService.faqs.map((faq, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="mt-10">
            <Button>Request Appointment</Button>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 gap-5">
          <BillingCard />
          <ContactUsCard />
        </div>
      </div>
    </section>
  );
}
export default ServicePage;
