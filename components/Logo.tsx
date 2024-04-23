import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logos/InOneImaging.png";

function Logo() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="In One Imaging logo" width={230} />
    </Link>
  );
}
export default Logo;
