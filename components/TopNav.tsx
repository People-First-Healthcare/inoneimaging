import { Menu } from "@/typings";
import { useRouter } from "next/navigation";

type Props = {
  menu: Menu[];
  activeMenu: Menu | null;
  handleHover: (menu: Menu) => void;
};

function TopNav({ menu, activeMenu, handleHover }: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (activeMenu?.link) {
      router.push(activeMenu.link);
    }
  };
  return (
    <nav className="hidden lg:flex top-full">
      {menu.map((menuItem, i) => (
        <div key={i} className="flex flex-col relative">
          <button
            className="w-full whitespace-nowrap px-5 py-1 hover:cursor-default"
            onMouseOver={() => handleHover(menuItem)}
            onClick={() => handleClick()}
          >
            {menuItem.menuTitle}
          </button>
          <span
            className={`bg-blue-neutral h-[6px] rounded-bl-full rounded-tr-full absolute top-10 transition-all duration-300 ease-in-out ${
              menuItem.menuTitle === activeMenu?.menuTitle ? "w-full" : "w-0"
            }`}
          ></span>
        </div>
      ))}
    </nav>
  );
}
export default TopNav;
