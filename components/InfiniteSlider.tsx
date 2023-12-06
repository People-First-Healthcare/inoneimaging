import Image from "next/image";

// https://www.julienthibeaut.xyz/blog/create-infinite-slider-with-tailwind-css

const LOGOS = [
  "/images/siemens-logo.jpeg",
  "/images/ge_healthcare-logo.jpeg",
  "/images/diagnostic-imaging-service-accredited-logo.jpeg",
  "/images/intelepacs-logo.jpeg",
  "/images/college-of-radiologists-new-zealand-logo.jpeg",
  "/images/asa-logo.jpeg",
  "/images/canon-logo.jpeg",
  "/images/aice-logo.jpeg",
];

export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto w-5/6 lg:w-4/6 overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(300px*8)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[165px] items-center justify-center"
            key={index}
          >
            <Image src={logo} alt={logo} width={165} height={90} />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[165px] items-center justify-center"
            key={index}
          >
            <Image src={logo} alt={logo} width={165} height={90} />
          </div>
        ))}
      </div>
    </div>
  );
};
