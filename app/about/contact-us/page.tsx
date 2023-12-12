import ContactUsContent from "@/components/ContactUsContent";
import ContactUsFormWrapper from "@/app/about/contact-us/components/ContactUsFormWrapper";
import CTA from "@/components/CTA";
import HeroBanner from "@/components/HeroBanner";

function ContactUs() {
  return (
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <HeroBanner
        title={"Contact Us"}
        image={"https://picsum.photos/id/502/1600/500"}
      />
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
        <div className="flex flex-col p-5 rounded-md bg-slate-50 my-auto">
          <h3 className="text-center text-2xl lg:text-3xl p-5">
            Send us a message
          </h3>
          <ContactUsFormWrapper />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <CTA />
      </div>
    </section>
  );
}
export default ContactUs;
