import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "@/typings";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestAppointmentButton from "./RequestAppointmentButton";
import { useRouter } from "next/navigation";

type Props = {
  menu: Menu[];
  handleLeave: () => void;
};

const sideNavAnimation = {
  initial: { x: "50%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

function SideNavContent({ menu, handleLeave }: Props) {
  const router = useRouter();
  const handleMenuLeaveToHome = () => {
    router.push("/");
    handleLeave();
  };
  return (
    <motion.div
      key={"sideNav"}
      {...sideNavAnimation}
      className="flex flex-col space-y-24 px-14 pb-36 h-screen w-full bg-white z-10"
    >
      <div className="space-y-5">
        {menu.map((menuItem, i) => {
          if (menuItem.subMenu.length) {
            return (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{menuItem.menuTitle}</AccordionTrigger>
                  {menuItem.subMenu.map((subMenuItem, i) => (
                    <Link
                      key={i}
                      href={subMenuItem.link}
                      onClick={() => handleLeave()}
                    >
                      <AccordionContent className="hover:px-2">
                        {subMenuItem.subMenuTitle}
                      </AccordionContent>
                    </Link>
                  ))}
                </AccordionItem>
              </Accordion>
            );
          }
          return (
            <Accordion key={i} type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger onClick={() => handleMenuLeaveToHome()}>
                  {menuItem.menuTitle}
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          );
        })}
        <div className="flex justify-center" onClick={() => handleLeave()}>
          <RequestAppointmentButton className="w-full mt-5" />
        </div>
      </div>
    </motion.div>
  );
}
export default SideNavContent;
