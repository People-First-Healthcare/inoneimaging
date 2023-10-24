import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function BillingCard() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Bulk Billing</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          In most instances, we bulk bill to Medicare, but it is important to
          check with your individual practice prior to your service.
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
