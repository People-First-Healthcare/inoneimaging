import ContactUsFormWrapper from "@/app/about/contact-us/components/ContactUsFormWrapper";
import ContactUsContent from "@/components/ContactUsContent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import RequestLoginFormWrapper from "./components/RequestLoginFormWrapper";

function AccessPatientImagesPage() {
  return (
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <div className="relative flex flex-col justify-center items-center h-80 lg:h-96">
        <Image
          src={"https://picsum.photos/id/507/1600/500"}
          alt={"sample background"}
          fill
          className="absolute object-cover opacity-50 -z-10"
        />
        <div className="flex flex-col items-center gap-2 bg-white p-3">
          <h1 className="text-3xl lg:text-5xl text-gray-950">
            Access Patient Images
          </h1>
        </div>
      </div>

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
