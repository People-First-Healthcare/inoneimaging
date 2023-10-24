import { feesBillingFaq } from "@/assets/fees-billing-faq";
import CustomTemplate from "@/components/CustomTemplate";

function FeesAndBillingPage() {
  return (
    <CustomTemplate
      sectionId="fees-billing"
      heroTitle="Fees & Billing"
      heroBackground="https://picsum.photos/id/370/1600/500"
      faqs={feesBillingFaq}
      contactUsCard
    />
  );
}
export default FeesAndBillingPage;
