import { PregnancyInfo } from "@/typings";

type Props = {
  pregInfo: PregnancyInfo;
};

function PregnancyUltrasoundInfo({ pregInfo }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl">{pregInfo.header}</h3>
      <ul className="flex flex-col gap-5">
        {pregInfo.subService.map((subService, i) => (
          <li key={i}>
            <p className="underline">{subService.name}</p>
            <p>{subService.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PregnancyUltrasoundInfo;
