import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import RequestLoginFormWrapper from "./components/RequestLoginFormWrapper";
import HeroBanner from "@/components/HeroBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Patient Images",
  description:
    "Referrers can conveniently access patient images through Northwest Radiology Portal. Follow the steps and request for access now.",
  alternates: {
    canonical: "/referrers/access-patient-images",
  },
};

function AccessPatientImagesPage() {
  return (
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <HeroBanner
        title={"Access Patient Images"}
        image={"/images/contents/doctor.png"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 px-5 md:px-20 gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-7 lg:justify-center">
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl lg:w-[70%]">
              Access patient reports and images
            </h2>
            <p className="text-lg">
              Referrers can now conveniently access patient reports and images
              online using the login details provided by us. Please fill out the
              form to get the login details and allow up to 48 hours for our
              support team to activate your login.
            </p>
          </div>
          <div className="border-b border-black"></div>
          <Link
            href={"https://patient.northwestradiology.com/login.cshtml"}
            className="w-full"
          >
            <Button className="w-full">I already have the login details</Button>
          </Link>
        </div>
        <div className="flex flex-col p-5 rounded-md bg-slate-50 my-auto">
          <h3 className="text-center text-2xl lg:text-3xl p-5">
            Request Login Access
          </h3>
          <RequestLoginFormWrapper />
        </div>
      </div>
    </section>
  );
}
export default AccessPatientImagesPage;
