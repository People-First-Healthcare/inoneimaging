import ContactUsContent from "@/components/ContactUsContent";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";

function ContactUs() {
  return (
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <div className="relative flex flex-col justify-center items-center h-80 lg:h-96">
        <Image
          src={"https://picsum.photos/id/502/1600/500"}
          alt={"request appointment background"}
          fill
          className="absolute object-cover opacity-50 -z-10"
        />
        <div className="flex flex-col items-center gap-2 bg-white p-3">
          <h1 className="text-3xl lg:text-5xl text-gray-950">Contact Us</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 px-5 md:px-20 gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-7 lg:justify-center">
          <div className="space-y-5 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl lg:w-[70%]">
              Contact our support team to get more info
            </h2>
            <p className="text-lg">
              Need more information or have specific inquiries? Our dedicated
              support team is here to assist you. Whether you have questions
              about our services, need guidance on test options, or require
              clarification on any aspect, we&apos;re just a message or phone
              call away.
            </p>
          </div>
          <div className="border-b border-black"></div>
          <ContactUsContent />
        </div>
        <div className="p-5 rounded-md">
          <h3 className="text-center text-2xl lg:text-3xl p-5">
            Send us a message
          </h3>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
