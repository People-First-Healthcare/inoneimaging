import { Mail, MapPin, Phone, PrinterIcon } from "lucide-react";
import Link from "next/link";

function ContactUsContent() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={"https://maps.app.goo.gl/RBscTfw1Kbzy9Gfm8"}
        target="_blank"
        className="flex gap-3 items-center"
      >
        <MapPin className="w-10 basis-1/12" />

        <p className="basis-11/12">
          Shop RP25E Roxburgh Village, 250 Somerton Road, Roxburgh Park, VIC
          3064
        </p>
      </Link>

      <Link
        href={`mailto:${"info@inoneimaging.com.au"}`}
        className="flex gap-3 items-center"
      >
        <Mail className="w-10 basis-1/12" />
        <p className="basis-11/12">info@inoneimaging.com.au</p>
      </Link>

      <Link href={`tel:1300765456`} className="flex gap-3 items-center">
        <Phone className="w-10 basis-1/12" />
        <p className="basis-11/12">1300 765 456</p>
      </Link>

      <Link href={`tel:0394923652`} className="flex gap-3 items-center">
        <PrinterIcon className="w-10 basis-1/12" />
        <p className="basis-11/12">03 9492 3652</p>
      </Link>
    </div>
  );
}
export default ContactUsContent;
