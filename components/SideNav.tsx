import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

type Props = {
  sideOpen: boolean;
  handleClick: () => void;
};

function SideNav({ sideOpen, handleClick }: Props) {
  return (
    <nav className="lg:hidden">
      <div onClick={handleClick}>
        {!sideOpen ? (
          <HamburgerMenuIcon width={30} height={30} />
        ) : (
          <Cross1Icon width={30} height={30} />
        )}
      </div>
    </nav>
  );
}
export default SideNav;
