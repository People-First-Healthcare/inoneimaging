import FeatureCard from "@/components/FeatureCard";
import ProcessCard from "@/components/ProcessCard";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { services } from "@/assets/services";
import RequestAppointmentButton from "@/components/RequestAppointmentButton";

export default function Home() {
  return (
    <main>
      {/* Intro */}
      <section
        id="section-home"
        className="flex flex-col space-y-10 lg:flex-row max-w-5xl mx-auto lg:h-[650px]"
      >
        <div className="space-y-7 p-10 lg:pt-40 pb-32 lg:w-2/3">
          <h1 className="text-5xl md:text-6xl lg:max-w-lg">
            We follow a holistic approach to health care.
          </h1>
          <h2 className="text-lg w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <RequestAppointmentButton />
        </div>

        <div className="bg-purple-300 relative min-h-[400px] lg:w-1/3">
          <Image
            src={
              "https://assets.website-files.com/62444c22812cca0a6e05b335/62444c9c770af7c8b7b23c16_Healthcare%20Worker.png"
            }
            alt="healthcare worker photo"
            width={500}
            height={500}
            className="absolute max-w-md bottom-0 right-0"
          />
        </div>
      </section>
      {/* Feature */}
      <section
        id="section-feature"
        className="flex flex-col p-10 bg-purple-800 lg:flex-row justify-center lg:py-14"
      >
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </section>

      {/* Services */}
      <section
        id="section-services"
        className="flex flex-col px-5 py-12 items-center text-center space-y-7 sm:p-20 max-w-7xl mx-auto"
      >
        <h2 className="uppercase tracking-wider text-purple-800">Services</h2>
        <p className="uppercase text-4xl font-medium max-w-lg pb-12">
          Using our latest technology
        </p>
        <div className="flex flex-col space-y-7 lg:space-y-0 lg:flex-row lg:space-x-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </section>
      {/* Easy Process */}
      <section
        id="section-process"
        className="flex flex-col items-center text-center bg-purple-50 px-5 py-12 space-y-7 sm:p-20 "
      >
        <h2 className="uppercase tracking-wider text-purple-800">Steps</h2>
        <p className="uppercase text-4xl font-medium max-w-lg lg:pb-12">
          How does it work?
        </p>
        <div className="flex flex-col lg:flex-row">
          <ProcessCard step={1} desc="Request Appointment" />
          <div className="hidden lg:flex lg:items-end">
            <Image
              src="https://assets.website-files.com/5fc4341651db5a6e16d9ead7/5fc571f6b429986492de81d7_line-arc-1.svg"
              width={100}
              height={100}
              alt="arrow"
            />
          </div>
          <ProcessCard step={2} desc="Perform Examination" />
          <div className="hidden lg:flex lg:items-start">
            <Image
              src="https://assets.website-files.com/5fc4341651db5a6e16d9ead7/5fc571f682f57cd28d76c4ca_line-arc-2.svg"
              width={100}
              height={100}
              alt="arrow"
            />
          </div>
          <ProcessCard step={3} desc="Results to Referrer" />
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="flex flex-col items-center py-16 text-center"
      >
        <h2 className="text-4xl text-center p-5">
          Book your next appointment now
        </h2>
        <p className="p-10 max-w-5xl">
          Complete our booking form and one of our friendly staff will contact
          you &#45; it&#39;s quick, and easy. Click on the below link and follow
          the simple steps. Remember to have your referral handy.
        </p>
        <div>
          <RequestAppointmentButton />
        </div>
      </section>
    </main>
  );
}
