import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

function HeroBanner({ title, image }: Props) {
  return (
    <div className="relative flex flex-col justify-center items-center h-80 lg:h-96">
      <Image
        src={image}
        alt={title}
        fill
        className="absolute object-cover opacity-50 -z-10"
      />
      <div className="flex flex-col items-center gap-2 bg-white p-3">
        <h1 className="text-5xl lg:text-7xl text-gray-950">{title}</h1>
      </div>
    </div>
  );
}
export default HeroBanner;
