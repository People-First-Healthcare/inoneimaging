import { feesBillingFaq } from "@/assets/fees-billing-faq";
import CustomFAQTemplate from "@/components/CustomFAQTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Our Fees & Billing Information",
  description:
    "We are proud to be a bulk billing imaging provider in Roxburgh Park. Find out more information about our fees and billing information here or contact our friendly team if you have any questions.",
};

function FeesAndBillingPage() {
  return (
    <CustomFAQTemplate
      sectionId="fees-billing"
      heroTitle="Fees & Billing"
      heroBackground="https://picsum.photos/id/371/1600/500"
      faqs={feesBillingFaq}
      contactUsCard
    />
  );
}
export default FeesAndBillingPage;
