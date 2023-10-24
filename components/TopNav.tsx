import { Menu } from "@/typings";

type Props = {
  menu: Menu[];
  handleHover: (menu: Menu) => void;
};

function TopNav({ menu, handleHover }: Props) {
  return (
    <nav className="hidden lg:flex top-full">
      {menu.map((menuItem, i) => (
        <button
          key={i}
          className="w-full whitespace-nowrap p-5"
          onMouseOver={() => handleHover(menuItem)}
        >
          {menuItem.menuTitle}
        </button>
      ))}
    </nav>
  );
}
export default TopNav;
