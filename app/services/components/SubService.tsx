import { Button } from "@/components/ui/button";
import { SubService } from "@/typings";
import { ArrowRight } from "lucide-react";
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
              <Link href={"/services/pregnancy-ultrasound"} className="p-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="italic underline gap-1"
                >
                  More info <ArrowRight size={"18px"} />
                </Button>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SubService;
