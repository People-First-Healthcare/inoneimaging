"use client";

import { useState } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import SideNavContent from "./SideNavContent";
import { Button } from "./ui/button";
import { Menu } from "@/typings";
import TopNavContent from "./TopNavContent";
import { AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const menu: Menu[] = [
  {
    menuTitle: "Services",
    subMenu: [
      { subMenuTitle: "CT Scan", link: "/services/ct-scan" },
      { subMenuTitle: "Ultrasound", link: "/services/ultrasound" },
      { subMenuTitle: "X-Ray", link: "/services/x-ray" },
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
      { subMenuTitle: "Access Images", link: "" },
      { subMenuTitle: "e-Referral", link: "" },
    ],
    link: "",
  },
  {
    menuTitle: "About",
    subMenu: [
      { subMenuTitle: "Our Vision", link: "" },
      { subMenuTitle: "Getting Here", link: "" },
      { subMenuTitle: "Contact Us", link: "" },
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

  const handleTopNavLeave = () => {
    setActiveTopNav(null);
  };

  const handleSideNavLeave = () => {
    setSideOpen(false);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="sticky top-0 bg-white z-50 opacity-100 shadow-md">
      <div className="flex flex-col max-w-7xl mx-auto ">
        <div className="flex justify-between items-center px-6 md:px-14 py-6 lg:py-3">
          <div className="flex space-x-24 items-center">
            <Logo />
            <TopNav menu={menu} handleHover={handleTopNavHover} />
          </div>

          <div className="flex items-center space-x-8">
            <Button className="hidden sm:block">Request Appointment</Button>
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
