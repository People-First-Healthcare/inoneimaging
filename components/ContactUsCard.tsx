import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactUsContent from "./ContactUsContent";
import { Button } from "./ui/button";

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
        <Button className="w-full">Contact us</Button>
      </CardFooter>
    </Card>
  );
}
export default ContactUsCard;
