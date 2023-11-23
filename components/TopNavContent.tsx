import { Menu } from "@/typings";
import { motion } from "framer-motion";
import { DnaIcon } from "lucide-react";
import Link from "next/link";
import BillingCard from "./BillingCard";

type Props = {
  menu: Menu;
  handleLeave: () => void;
};

const topNavAnimation = {
  initial: { y: "-50%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

function TopNavContent({ menu, handleLeave }: Props) {
  return (
    <motion.div
      key={"topNavAnimation"}
      {...topNavAnimation}
      className="px-14 py-10  shadow-lg absolute top-20 z-10 bg-white w-full"
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
              <DnaIcon width={30} height={30} />
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
