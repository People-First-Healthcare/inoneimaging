import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactUsButton from "./ContactUsButton";
import ContactUsContent from "./ContactUsContent";

function ContactUsCard() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Have more questions?</CardTitle>
      </CardHeader>
      <CardContent>
        <ContactUsContent />
      </CardContent>
      <CardFooter>
        <ContactUsButton className="w-full" />
      </CardFooter>
    </Card>
  );
}
export default ContactUsCard;
