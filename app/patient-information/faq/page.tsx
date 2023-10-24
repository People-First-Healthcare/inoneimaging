import { generalFaq } from "@/assets/general-faq";
import CustomTemplate from "@/components/CustomTemplate";

function FeesAndBillingPage() {
  return (
    <CustomTemplate
      sectionId="faq"
      heroTitle="Frequently Asked Questions"
      heroBackground="https://picsum.photos/id/420/1600/500"
      faqs={generalFaq}
      contactUsCard
      billingCard
    />
  );
}
export default FeesAndBillingPage;
