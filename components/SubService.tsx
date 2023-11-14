import { SubService } from "@/typings";

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
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SubService;
