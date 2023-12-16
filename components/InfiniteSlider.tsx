import Image from "next/image";

// https://www.julienthibeaut.xyz/blog/create-infinite-slider-with-tailwind-css

const LOGOS = [
  "/images/logos/siemens-logo.png",
  "/images/logos/gehealthcare-logo.svg",
  "/images/logos/asa-logo.jpeg",
  "/images/logos/canon-logo.png",
  "/images/logos/asar-logo.jpeg",
  "/images/logos/crowdit-logo.png",
  "/images/logos/northwestradiology-logo.png",
  "/images/logos/promedicus-logo.png",
];

export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto w-5/6 lg:w-4/6 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(400px*8)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center p-5"
            key={index}
          >
            <Image
              src={logo}
              alt={"Our Partner logo"}
              width={165}
              height={90}
            />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[250px] items-center justify-center p-5"
            key={index}
          >
            <Image
              src={logo}
              alt={"Our Partner logo"}
              width={165}
              height={90}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
