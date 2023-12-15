import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

function BillingCard() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Bulk Billing</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          We are a bulk-billing clinic for Medicare eligible patients for most
          examinations. Please give us a call for more information.
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={"/patient-information/fees-billing"}>More info</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default BillingCard;
