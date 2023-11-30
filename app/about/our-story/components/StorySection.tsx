import Image from "next/image";

type Props = {
  title: string;
  mainDescription: string;
  secondaryDescription?: string;
  values?: string[];
  valuesDescription?: string[];
  image: string;
  imageOnLeft?: boolean;
  bgColor?: string;
};

function StorySection({
  title,
  mainDescription,
  secondaryDescription,
  values,
  valuesDescription,
  image,
  imageOnLeft = false,
  bgColor = "bg-white",
}: Props) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 px-6 lg:px-0 lg:h-[calc(100vh-80px)] py-14 lg:py-0 ${bgColor}`}
    >
      <div className="flex flex-col gap-3 lg:justify-center lg:max-w-xl mx-auto lg:px-10">
        <p className="tracking-widest">{title}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">
          {mainDescription}
        </h1>
        <p className="text-lg">{secondaryDescription}</p>
        {values &&
          values.map((value, i) => (
            <div key={i}>
              <h2 className="text-xl md:text-2xl font-medium">{value}</h2>
              <p>{valuesDescription?.[i]}</p>
            </div>
          ))}
      </div>
      <div className={`relative min-h-[480px] ${imageOnLeft && "lg:-order-1"}`}>
        <Image
          src={image}
          alt="sample-photo"
          fill
          className="absolute object-cover"
        />
      </div>
    </div>
  );
}
export default StorySection;
