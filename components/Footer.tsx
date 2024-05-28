import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ChangeLanguage from "./ChangeLanguage";
import Logo from "./Logo";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-10 bg-purple-50">
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 text-center py-14 sm:py-16 space-y-8 lg:space-y-0 sm:text-left max-w-7xl mx-auto w-11/12">
        <div className="sm:col-span-4 lg:col-span-2 flex flex-col space-y-5">
          <div className="flex justify-center sm:justify-normal">
            <Logo />
          </div>
          <div className="flex justify-center sm:justify-normal gap-2">
            <Image
              src="/images/logos/Flag1-logo.png"
              width={50}
              height={50}
              alt="Acknowledgement of Country Flag"
            />
            <Image
              src="/images/logos/Flag2-logo.png"
              width={50}
              height={50}
              alt="Acknowledgement of Country Flag"
            />
          </div>
          <p className="text-sm md:max-w-sm">
            InOne Imaging acknowledges the Traditional Owners of the lands on
            which our services are located.
          </p>
          <p className="text-sm md:max-w-sm">
            We honour the strength and resilience of Aboriginal and Torres
            Strait Islander peoples and pay our respects to all Elders, past and
            present.
          </p>

          <div className="flex justify-center space-x-5 sm:justify-normal">
            <SocialIcon
              url="https://www.facebook.com/inonehealthcare"
              style={{
                width: "24px",
                height: "24px",
              }}
              target="_blank"
            />
            <SocialIcon
              url="https://www.instagram.com/inonehealthcare/"
              style={{ width: "24px", height: "24px" }}
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/in-one-healthcare/"
              style={{ width: "24px", height: "24px" }}
              target="_blank"
            />

            <ChangeLanguage />
          </div>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-neutral font-medium">
            Services
          </p>
          <Link href={"/services/x-ray"}>
            <p>X-Ray</p>
          </Link>
          <Link href={"/services/ct-scan"}>
            <p>CT Scan</p>
          </Link>
          <Link href={"/services/ultrasound"}>
            <p>Ultrasound</p>
          </Link>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-neutral font-medium">
            Partners
          </p>
          <Link
            href={"https://www.inonehealthcare.com.au/vision-clinic/"}
            target="_blank"
          >
            <p>InOne Vision</p>
          </Link>
          <Link
            href={"https://www.inonehealthcare.com.au/allied-health/"}
            target="_blank"
          >
            <p>InOne Healthcare</p>
          </Link>
        </div>
        {/* <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-neutral font-medium">
            Our Team
          </p>
          <Link href={"/about/our-team"}>
            <p>X-Ray</p>
          </Link>
          <Link href={"/about/our-team"}>
            <p>CT Scan</p>
          </Link>
          <Link href={"/about/our-team"}>
            <p>Ultrasound</p>
          </Link>
        </div> */}
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-neutral font-medium">
            Contact
          </p>
          <Link
            href={"https://maps.app.goo.gl/RBscTfw1Kbzy9Gfm8"}
            target="_blank"
          >
            <p>
              Shop RP25E Roxburgh Village, 250 Somerton Road, Roxburgh Park, VIC
              3064
            </p>
          </Link>
          <Link href={`mailto:${"info@inoneimaging.com.au"}`}>
            <p>info@inoneimaging.com.au</p>
          </Link>
          <Link href={`tel:1300765456`}>
            <p>Phone: 1300 765 456</p>
          </Link>
          <Link href={`tel:0394923652`}>
            <p>Fax: 03 9492 3652</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
