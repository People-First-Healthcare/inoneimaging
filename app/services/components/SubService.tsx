import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SubService } from "@/typings";
import { InfoIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  subService: SubService;
};

function SubService({ subService }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl">{subService.header}</h3>
      <ul>
        {subService.item.map((item, i) => (
          <li key={i} className="list-disc list-inside">
            {item}
            {item === "Pregnancy scans for all stages" && (
              <Link href={"/services/pregnancy-ultrasound"}>
                <Alert className="ml-4 my-2 hover:bg-purple-50 hover:border-white">
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    Click here for more information on pregnancy ultrasounds we
                    offer
                  </AlertDescription>
                </Alert>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SubService;
