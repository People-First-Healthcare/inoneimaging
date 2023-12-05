import { Menu } from "@/typings";
import { motion } from "framer-motion";
import Link from "next/link";
import BillingCard from "./BillingCard";
import { appearAnimation } from "@/lib/animation";

type Props = {
  menu: Menu;
  handleLeave: () => void;
};

function TopNavContent({ menu, handleLeave }: Props) {
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
              className="flex items-center space-x-5 p-3 hover:bg-slate-50"
              onClick={() => handleLeave()}
            >
              <div>{subMenuItem.icon}</div>
              <div className="pl-10">
                <p className="text-xl">{subMenuItem.subMenuTitle}</p>
                <p>Description</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex-1 lg:flex-[0.7]" onClick={() => handleLeave()}>
          <BillingCard />
        </div>
      </div>
    </motion.div>
  );
}
export default TopNavContent;
