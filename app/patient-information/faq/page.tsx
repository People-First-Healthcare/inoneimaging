import { generalFaq } from "@/assets/general-faq";
import CustomFAQTemplate from "@/components/CustomFAQTemplate";

function FeesAndBillingPage() {
  return (
    <CustomFAQTemplate
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
