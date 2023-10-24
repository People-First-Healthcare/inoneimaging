import { Service } from "@/typings";
import { MicroscopeIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  service: Service;
};

function ServiceCard({ service: { id, title } }: Props) {
  return (
    <Link
      href={`/services/${id}`}
      className="flex flex-col items-center text-center space-y-5 border-[0.5px] border-purple-100 rounded-sm px-8 py-10 max-w-md hover:translate-x-1 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="p-5 bg-gray-50 rounded-full">
        <MicroscopeIcon size="40" />
      </div>
      <p className="text-xl font-semibold">{title}</p>
    </Link>
  );
}
export default ServiceCard;
