import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

function HeroBanner({ title, image }: Props) {
  return (
    <div className="flex flex-col md:flex-row h-[500px]">
      <div className="relative flex-1 md:order-2">
        <Image src={image} alt={title} fill className="absolute object-cover" />
      </div>
      <div className="bg-hero-bg md:flex-1 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white p-6 text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
export default HeroBanner;
