"use client";

import { Menu } from "@/typings";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import RequestAppointmentButton from "./RequestAppointmentButton";
import SideNav from "./SideNav";
import SideNavContent from "./SideNavContent";
import TopNav from "./TopNav";
import TopNavContent from "./TopNavContent";

const menu: Menu[] = [
  {
    menuTitle: "Services",
    subMenu: [
      { subMenuTitle: "CT scan", link: "/services/ct-scan" },
      { subMenuTitle: "Ultrasound", link: "/services/ultrasound" },
      { subMenuTitle: "X-ray", link: "/services/x-ray" },
    ],
    link: "",
  },
  {
    menuTitle: "Patient Information",
    subMenu: [
      {
        subMenuTitle: "Fees & Billing",
        link: "/patient-information/fees-billing",
      },
      { subMenuTitle: "FAQ", link: "/patient-information/faq" },
    ],
    link: "",
  },
  {
    menuTitle: "Referrers",
    subMenu: [
      {
        subMenuTitle: "Access Images",
        link: "https://patient.northwestradiology.com/",
      },
      { subMenuTitle: "e-Referral", link: "/referrers/e-referral" },
    ],
    link: "",
  },
  {
    menuTitle: "About",
    subMenu: [
      { subMenuTitle: "Our Story", link: "/about/our-story" },
      { subMenuTitle: "Getting Here", link: "/about/getting-here" },
      { subMenuTitle: "Contact Us", link: "/about/contact-us" },
    ],
    link: "",
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
    <header className="sticky top-0 bg-white z-50 shadow-md overflow-x-hidden max-h-screen">
      <div className="flex flex-col max-w-7xl mx-auto ">
        <div className="flex justify-between items-center px-6 md:px-14 py-6 lg:py-6">
          <div className="flex space-x-24 items-center">
            <div onClick={() => handleLeave()}>
              <Logo />
            </div>

            <TopNav menu={menu} handleHover={handleTopNavHover} />
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
        {activeTopNav && (
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
