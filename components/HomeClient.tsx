"use client";

import { services } from "@/assets/services";
import Dashlines from "@/components/Dashlines";
import FeatureCard from "@/components/FeatureCard";
import ProcessCard from "@/components/ProcessCard";
import RequestAppointmentButton from "@/components/RequestAppointmentButton";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { ltrAnimation, rtlAnimation, bottomupAnimation } from "@/lib/animation";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import CTA from "@/components/CTA";

export default function HomeClient() {
  return (
    <main className="overflow-x-hidden">
      {/* Intro */}
      <section
        id="section-home"
        className="flex flex-col space-y-10 lg:flex-row max-w-5xl mx-auto lg:h-[650px]"
      >
        <motion.div
          {...ltrAnimation}
          className="space-y-7 p-10 lg:pt-40 pb-32 lg:w-2/3"
        >
          <h1 className="text-5xl md:text-6xl lg:max-w-lg">
            We follow a holistic approach to health care.
          </h1>
          <h2 className="text-lg w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <RequestAppointmentButton />
        </motion.div>

        <motion.div
          {...rtlAnimation}
          className="bg-purple-300 relative min-h-[350px] lg:w-1/3"
        >
          <Image
            src={
              "https://assets.website-files.com/62444c22812cca0a6e05b335/62444c9c770af7c8b7b23c16_Healthcare%20Worker.png"
            }
            alt="healthcare worker photo"
            width={500}
            height={500}
            className="absolute max-w-md bottom-0 right-0"
          />
        </motion.div>
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
      <div className="bg-wave-purple-bottom aspect-[1280/100] w-full bg-no-repeat bg-center bg-cover"></div>
      <section
        id="section-services"
        className="flex flex-col px-5 py-12 items-center text-center space-y-7 sm:p-20 max-w-7xl mx-auto"
      >
        <motion.h2
          {...bottomupAnimation}
          className="uppercase tracking-wider text-purple-800"
        >
          Services
        </motion.h2>
        <motion.p
          {...bottomupAnimation}
          className="uppercase text-4xl font-medium max-w-lg pb-12"
        >
          Using our latest technology
        </motion.p>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {services
            .filter((service) => service.id !== "pregnancy-ultrasound")
            .map((service, i) => (
              <ServiceCard key={i} service={service} order={i} />
            ))}
        </div>
      </section>
      {/* Easy Process */}
      <div className="bg-wave-pink-top aspect-[1280/100] w-full bg-no-repeat bg-center bg-cover"></div>
      <section
        id="section-process"
        className="flex flex-col items-center text-center bg-purple-50 px-5 py-12 space-y-7 sm:p-20"
      >
        <motion.h2
          {...bottomupAnimation}
          className="uppercase tracking-wider text-purple-800"
        >
          Steps
        </motion.h2>
        <motion.p
          {...bottomupAnimation}
          className="uppercase text-4xl font-medium max-w-lg lg:pb-12"
        >
          How does it work?
        </motion.p>
        <div className="flex flex-col lg:flex-row relative lg:gap-10">
          <Dashlines className="hidden lg:block absolute z-0 top-[75px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <ProcessCard step={1} desc="Request Appointment" />
          <ProcessCard step={2} desc="Perform Examination" />
          <ProcessCard step={3} desc="Results to Your Doctor" />
        </div>
      </section>
      <div className="bg-wave-pink-bottom aspect-[1280/100] w-full bg-no-repeat bg-center bg-cover"></div>

      {/* CTA */}
      <section
        id="cta"
        className="flex flex-col items-center py-16 text-center"
      >
        <CTA />
      </section>

      <section id="partners" className="py-6">
        <InfiniteSlider />
      </section>
    </main>
  );
}
