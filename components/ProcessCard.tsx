type Props = {
  step: number;
  desc: string;
};

function ProcessCard({ step, desc }: Props) {
  return (
    <div className="flex flex-col items-center space-y-5 p-8 z-10">
      <p className="bg-white rounded-full text-2xl w-20 h-20 flex items-center justify-center font-medium">
        {step}
      </p>
      <p className="text-lg">{desc}</p>
    </div>
  );
}
export default ProcessCard;
