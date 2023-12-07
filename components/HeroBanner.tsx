import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

function HeroBanner({ title, image }: Props) {
  return (
    <div className="relative flex justify-center items-center h-96">
      <Image
        src={image}
        alt={title}
        fill
        className="absolute object-cover opacity-80 -z-10"
      />
      <h1 className="text-3xl lg:text-5xl text-gray-950 bg-white bg-opacity-80 p-3">
        {title}
      </h1>
    </div>
  );
}
export default HeroBanner;
