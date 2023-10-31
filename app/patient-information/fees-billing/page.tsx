import { feesBillingFaq } from "@/assets/fees-billing-faq";
import CustomFAQTemplate from "@/components/CustomFAQTemplate";

function FeesAndBillingPage() {
  return (
    <CustomFAQTemplate
      sectionId="fees-billing"
      heroTitle="Fees & Billing"
      heroBackground="https://picsum.photos/id/370/1600/500"
      faqs={feesBillingFaq}
      contactUsCard
    />
  );
}
export default FeesAndBillingPage;
