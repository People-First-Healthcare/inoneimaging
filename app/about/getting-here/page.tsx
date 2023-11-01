import CopyAddressButton from "@/components/CopyAddressButton";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TradingHoursCard from "@/components/TradingHoursCard";
import roxburghlogo from "../../../public/images/roxburgh_village_logo.png";
import Image from "next/image";

function GettingHerePage() {
  return (
    <section id="getting-here" className="flex flex-col gap-16 pb-10">
      {/* map */}
      <div className="relative">
        <Map />
        <Link
          href={
            "https://www.google.com/maps/place/In+One+Healthcare/@-37.6389671,144.9328315,15z/data=!4m5!3m4!1s0x0:0xf504418d6c371f23!8m2!3d-37.6389671!4d144.9328315?sa=X&ved=2ahUKEwjl9_vJs_z2AhWuldgFHVjwCaQQ_BJ6BAhSEAU&shorturl=1"
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
        We are located in{" "}
        <span>
          <Image
            src={roxburghlogo}
            alt="roxburghvillage-logo"
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
                open car spaces, it can be easily accessed via Somerton Road.
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
                    operated by Metlink include:
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

      {/* more info */}
    </section>
  );
}
export default GettingHerePage;
