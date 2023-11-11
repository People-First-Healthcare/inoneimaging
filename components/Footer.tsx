import { SocialIcon } from "react-social-icons";
import Logo from "./Logo";
import ChangeLanguage from "./ChangeLanguage";

function Footer() {
  return (
    <footer className="bg-purple-800">
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 text-center  text-white py-14 sm:py-16 space-y-8 lg:space-y-0 sm:text-left max-w-7xl mx-auto w-11/12">
        <div className="sm:col-span-3 lg:col-span-2 flex flex-col space-y-5">
          <div className="flex justify-center sm:justify-normal">
            <Logo />
          </div>
          <p className="max-w-[30ch] mx-auto sm:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center space-x-5 sm:justify-normal">
            <SocialIcon
              url="https://facebook.com"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <SocialIcon
              url="https://instagram.com"
              style={{ width: "24px", height: "24px" }}
            />
            <SocialIcon
              url="https://linkedin.com"
              style={{ width: "24px", height: "24px" }}
            />

            <ChangeLanguage />
          </div>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-300 font-medium">
            Services
          </p>
          <p>CT Scan</p>
          <p>Ultrasound</p>
          <p>X-Ray</p>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-300 font-medium">
            Partners
          </p>
          <p>In One Vision</p>
          <p>In One Allied Health</p>
        </div>
        <div className="flex flex-col text-sm space-y-3">
          <p className="text-xs uppercase text-purple-300 font-medium">
            Contact
          </p>
          <p>
            Shop RP25E Roxburgh Village, 250 Somerton Road, Roxburgh Park, VIC
            3064
          </p>
          <p>info@inoneimaging.com.au</p>
          <p>+61 3 9063 0200</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
