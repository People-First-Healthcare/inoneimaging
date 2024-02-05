import CopyAddressButton from "@/app/about/getting-here/components/CopyAddressButton";
import Map from "@/app/about/getting-here/components/Map";
import TradingHoursCard from "@/app/about/getting-here/components/TradingHoursCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import roxburghlogo from "../../../public/images/logos/roxburgh_village_logo.png";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Here is Easy",
  description:
    "In One Imaging is located at Roxburgh Village Shopping Centre with plenty of parking spaces. There are also train and bus services just next to Roxburgh Village.",
  alternates: {
    canonical: "/about/getting-here",
  },
};

function GettingHerePage() {
  return (
    <section id="getting-here" className="flex flex-col gap-16 pb-10">
      {/* Map */}
      <div className="relative">
        <Map />
        <Link
          href={
            "https://maps.app.goo.gl/RBscTfw1Kbzy9Gfm8"
          }
          target="_blank"
        >
          <Button className="absolute top-[70%] left-1/2 transform -translate-x-1/2 w-72">
            Get Directions
          </Button>
        </Link>

        <CopyAddressButton classname="absolute top-[82%] left-1/2 transform -translate-x-1/2 w-72" />
      </div>
      <h1 className="text-4xl text-center">
        We are located at{" "}
        <span>
          <Image
            src={roxburghlogo}
            alt="Roxburgh Village logo"
            width={200}
            className="inline-block -translate-y-3"
          />
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-5 w-full max-w-7xl mx-auto gap-10">
        <div className="md:col-span-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Travelling by Car</AccordionTrigger>
              <AccordionContent>
                Parking at Roxburgh Village couldn’t be simpler. With over 880
                open car spaces, it can be easily accessed via Somerton Road,
                David Munroe Dr, and Thomas Brunton Parade.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Travelling by Train</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-6">
                  <p>
                    If you are looking to avoid the traffic, Metro Trains
                    provide a train service from Melbourne CBD to Roxburgh Park
                    station, which is located directly next to Roxburgh Village.
                    It takes less than 5 minutes to walk from the train station
                    to InOne Imaging.
                  </p>
                  <p>
                    Looking for further details on this amazing train service?
                    Metro Trains Melbourne have all the information you need on
                    their website. If you prefer talking to a live person, they
                    can be reached via 1800 800 007.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Travelling by Bus</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-6">
                  <p>
                    There are many bus lines that service Roxburgh Village so
                    getting here is a breeze. The current bus lines, all
                    operated by PTV include:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>484 - Broadmeadows - Roxburgh Park</li>
                    <li>
                      541 - Craigieburn North (Mt Ridley Rd) - Broadmeadows
                      Station
                    </li>
                    <li>542 - Pascoe Vale - Roxburgh Park</li>
                    <li>543 - Greenvale Gardens - Roxburgh Park</li>
                    <li>544 - Craigieburn - Roxburgh Park</li>
                    <li>901 - Melbourne Airport - Roxburgh Park</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <TradingHoursCard />
      </div>

      <div className="max-w-7xl mx-auto">
        <CTA />
      </div>
    </section>
  );
}
export default GettingHerePage;
