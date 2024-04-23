import { useState } from "react";
import { Menu, SubMenu } from "@/typings";
import { motion } from "framer-motion";
import { appearAnimation } from "@/lib/animation";
import Link from "next/link";
import BillingCard from "./BillingCard";
import DynamicCard from "./DynamicCard";

type Props = {
  menu: Menu;
  handleLeave: () => void;
};

function TopNavContent({ menu, handleLeave }: Props) {
  const [hoveredSubMenu, setHoveredSubMenu] = useState("");

  const handleSubMenuHover = (subMenuItem: SubMenu) => {
    setHoveredSubMenu(subMenuItem.subMenuTitle);
  };

  const getActiveSubMenu = () => {
    if (hoveredSubMenu) {
      return menu.subMenu.find((item) => item.subMenuTitle === hoveredSubMenu);
    }
    // Default to the first submenu item if none hovered
    return menu.subMenu[0];
  };

  const renderDynamicCard = () => {
    if (menu.menuTitle === "Services" || menu.menuTitle === "Referrers") {
      const activeSubMenu = getActiveSubMenu();
      return activeSubMenu ? <DynamicCard subMenu={activeSubMenu} /> : null;
    } else {
      return <BillingCard />;
    }
  };

  return (
    <motion.div
      {...appearAnimation}
      className="px-14 py-10 shadow-lg absolute z-10 bg-white w-full"
      onMouseLeave={() => handleLeave()}
    >
      <div className="flex justify-between space-x-5 max-w-6xl mx-auto">
        <div className="flex flex-col flex-1">
          {menu.subMenu.map((subMenuItem, i) => (
            <Link
              href={subMenuItem.link}
              key={i}
              className="flex items-center gap-16 p-5 hover:bg-slate-50"
              onClick={() => handleLeave()}
              onMouseOver={() => handleSubMenuHover(subMenuItem)}
            >
              <div>{subMenuItem.icon}</div>
              <p className="text-xl">{subMenuItem.subMenuTitle}</p>
            </Link>
          ))}
        </div>
        <div className="flex-1 lg:flex-[0.7]" onClick={() => handleLeave()}>
          {renderDynamicCard()}
        </div>
      </div>
    </motion.div>
  );
}

export default TopNavContent;
