import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactUsContent from "./ContactUsContent";
import { Button } from "./ui/button";
import Link from "next/link";
import ContactUsButton from "./ContactUsButton";

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
