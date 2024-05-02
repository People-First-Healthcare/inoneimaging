import HeroBanner from "@/components/HeroBanner";
import { Metadata } from "next";
import RequestReferralPadsFormWrapper from "./components/RequestReferralPadsFormWrapper";

export const metadata: Metadata = {
  title: "Order Referral Pads",
  description:
    "Referrers can conveniently request referral pads through this form. Follow the steps and request for referrer pads now.",
  alternates: {
    canonical: "/referrers/request-referral-pads",
  },
};

function RequestReferralPads() {
  return (
    <section id="request-referral-pads" className="flex flex-col">
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
