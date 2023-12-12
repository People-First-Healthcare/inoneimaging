import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ChangeLanguage from "./ChangeLanguage";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-footer-bg bg-bottom bg-no-repeat mt-10 border-t-[0.5px] border-purple-100">
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 text-center py-14 sm:py-16 space-y-8 lg:space-y-0 sm:text-left max-w-7xl mx-auto w-11/12">
        <div className="sm:col-span-3 lg:col-span-2 flex flex-col space-y-5">
          <div className="flex justify-center sm:justify-normal">
            <Logo />
          </div>
          <p className="max-w-[30ch] mx-auto sm:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
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
          <p className="text-xs uppercase text-purple-500 font-medium">
            Services
          </p>
          <Link href={"/services/ct-scan"}>
            <p>CT Scan</p>
          </Link>
          <Link href={"/services/ultrasound"}>
            <p>Ultrasound</p>
          </Link>
          <Link href={"/services/x-ray"}>
            <p>X-Ray</p>
          </Link>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-500 font-medium">
            Partners
          </p>
          <Link
            href={"https://www.inonehealthcare.com.au/vision-clinic/"}
            target="_blank"
          >
            <p>In One Vision</p>
          </Link>
          <Link
            href={"https://www.inonehealthcare.com.au/allied-health/"}
            target="_blank"
          >
            <p>In One Allied Health</p>
          </Link>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-500 font-medium">
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
          <Link href={`tel:${+61390630200}`}>
            <p>+61 3 9063 0200</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
