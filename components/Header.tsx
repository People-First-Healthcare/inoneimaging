"use client";

import { Menu } from "@/typings";
import { AnimatePresence } from "framer-motion";
import {
  FileTextIcon,
  FootprintsIcon,
  FormInputIcon,
  HeartHandshakeIcon,
  LampDeskIcon,
  LibraryBigIcon,
  MapIcon,
  PiggyBankIcon,
  ReceiptIcon,
  SatelliteDishIcon,
  ScanFaceIcon,
  ScanSearchIcon,
  ScrollTextIcon,
  WebcamIcon,
} from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import RequestAppointmentButton from "./RequestAppointmentButton";
import SideNav from "./SideNav";
import SideNavContent from "./SideNavContent";
import TopNav from "./TopNav";
import TopNavContent from "./TopNavContent";

const menu: Menu[] = [
  { menuTitle: "Home", link: "/", subMenu: [] },
  {
    menuTitle: "About",
    subMenu: [
      {
        subMenuTitle: "Our Story",
        link: "/about/our-story",
        icon: <HeartHandshakeIcon />,
      },
      {
        subMenuTitle: "Getting Here",
        link: "/about/getting-here",
        icon: <MapIcon />,
      },
      {
        subMenuTitle: "Contact Us",
        link: "/about/contact-us",
        icon: <LampDeskIcon />,
      },
    ],
  },
  {
    menuTitle: "Services",
    subMenu: [
      {
        subMenuTitle: "X-ray",
        description:
          "At In One Imaging, we have state-of-the-art medical imaging equipment that allows us to take quality x-ray images at the lowest possible radiation doses.",
        link: "/services/x-ray",
        icon: <ScanFaceIcon />,
      },
      {
        subMenuTitle: "CT scan",
        description:
          "CT scans take detailed 3D images of internal structures in your body using rotating x-ray tubes and computers.",
        link: "/services/ct-scan",
        icon: <WebcamIcon />,
      },
      {
        subMenuTitle: "Ultrasound",
        description:
          "Ultrasound is a type of medical imaging used to assess internal organs in the body using sound waves.",
        link: "/services/ultrasound",
        icon: <SatelliteDishIcon />,
      },
    ],
  },
  {
    menuTitle: "Payment and Fees",
    subMenu: [
      {
        subMenuTitle: "Fees & Billing",
        link: "/patient-information/fees-billing",
        icon: <ReceiptIcon />,
      },
      {
        subMenuTitle: "FAQ",
        link: "/patient-information/faq",
        icon: <LibraryBigIcon />,
      },
    ],
  },
  {
    menuTitle: "Referrers",
    subMenu: [
      {
        subMenuTitle: "Access Images",
        description:
          "Referrers can now conveniently access patient reports and images online using the login details provided by us.",
        link: "/referrers/access-patient-images",
        icon: <ScanSearchIcon />,
      },
      {
        subMenuTitle: "Request Referral Pads",
        description:
          "Referring doctors and allied health professionals may fill out our online form to order InOne Imaging Referral Pads.",
        link: "/referrers/request-referral-pads",
        icon: <FileTextIcon />,
      },
    ],
  },
];

function Header() {
  const [sideOpen, setSideOpen] = useState(false);
  const [activeTopNav, setActiveTopNav] = useState<Menu | null>(null);

  const handleBurgerClick = () => {
    setSideOpen(!sideOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleTopNavHover = (menu: Menu) => {
    setActiveTopNav(menu);
  };

  const handleLeave = () => {
    handleTopNavLeave();
    if (sideOpen) handleSideNavLeave();
  };

  const handleTopNavLeave = () => {
    setActiveTopNav(null);
  };

  const handleSideNavLeave = () => {
    setSideOpen(false);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md overflow-x-hidden lg:overflow-x-visible max-h-screen">
      <div
        className="bg-purple-light p-2"
        onMouseOver={() => handleTopNavLeave()}
      >
        <div className="bg-purple-neutral text-slate-50 text-xs font-light sm:text-base lg:text-lg flex justify-around max-w-3xl mx-auto p-1 rounded-md">
          <span className="flex justify-center items-center gap-1">
            <FootprintsIcon className="inline h-4 w-4 lg:h-6 lg:w-6" />
            Walk-ins accepted
          </span>
          <span className="flex justify-center items-center gap-1">
            <ScrollTextIcon className="inline h-4 w-4 lg:h-6 lg:w-6" />
            Accept all referrals
          </span>
          <span className="flex justify-center items-center gap-1">
            <PiggyBankIcon className="inline h-4 w-4 lg:h-6 lg:w-6" />
            Bulk billing
          </span>
        </div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto ">
        <div className="flex justify-between items-center px-6 md:px-14 py-6 lg:py-6">
          <div className="flex space-x-24 items-center">
            <div onClick={() => handleLeave()}>
              <Logo />
            </div>

            <TopNav
              menu={menu}
              activeMenu={activeTopNav}
              handleHover={handleTopNavHover}
            />
          </div>

          <div className="flex items-center space-x-8">
            <div onClick={() => handleLeave()}>
              <RequestAppointmentButton className="hidden sm:block" />
            </div>

            <SideNav sideOpen={sideOpen} handleClick={handleBurgerClick} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {activeTopNav?.subMenu.length && (
          <TopNavContent menu={activeTopNav} handleLeave={handleTopNavLeave} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sideOpen && (
          <SideNavContent menu={menu} handleLeave={handleSideNavLeave} />
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;
