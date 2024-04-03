import { generalFaq } from "@/assets/general-faq";
import CustomFAQTemplate from "@/components/CustomFAQTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "We are here to help. Check out our FAQs or contact our friendly team for more information.",
  alternates: {
    canonical: "/patient-information/faq",
  },
};
function FeesAndBillingPage() {
  return (
    <CustomFAQTemplate
      sectionId="faq"
      heroTitle="Frequently Asked Questions"
      heroBackground="/public/images/contents/FAQ.jpg"
      faqs={generalFaq}
      contactUsCard
      billingCard
    />
  );
}
export default FeesAndBillingPage;
