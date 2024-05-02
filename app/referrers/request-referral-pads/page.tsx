import RequestReferralPadsFormWrapper from "./components/RequestReferralPadsFormWrapper";
import HeroBanner from "@/components/HeroBanner";
import { Metadata } from "next";
import ContactUsCard from "@/components/ContactUsCard";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Order Referrer Pads",
  description:
    "Referrers can conveniently request referral pads through this form. Follow the steps and request for referrer pads now.",
  alternates: {
    canonical: "/referrers/request-referrer-pads",
  },
};

function RequestReferralPads() {
  return (
    // <section id="e-referral" className="flex flex-col">
    //   {/* Image, title */}
    //   <HeroBanner
    //     title={"Request Referral Pads"}
    //     image={"/images/contents/reception.png"}
    //   />

    //   <div className="flex flex-col lg:flex-row items-center px-4 py-10 gap-10 lg:gap-16 mx-auto">
    //     {/* Form */}
    //     <div className="flex flex-col gap-5 max-w-xl">
    //       <h2 className="text-2xl">Request an Appointment</h2>
    //       <RequestReferralPadsFormWrapper />
    //     </div>

    //     {/* Photo */}
    //     <Image
    //       src={"/images/contents/penpaper.png"}
    //       width={400}
    //       height={500}
    //       alt="A happy patient waiting for an appointment"
    //       className="rounded-xl"
    //     />
    //   </div>
    // </section>
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <HeroBanner
        title={"Request Referral Pads"}
        image={"/images/contents/examine.jpg"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 px-5 md:px-20 gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-7 lg:justify-center">
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl lg:w-[70%]">
              Request Referral Pads
            </h2>
            <p className="text-lg">
              Referring doctors and allied health professionals may fill out our
              online form to order InOne Imaging Referral Pads.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-5 rounded-md bg-slate-50 my-auto">
          <RequestReferralPadsFormWrapper />
        </div>
      </div>
    </section>
  );
}
export default RequestReferralPads;
