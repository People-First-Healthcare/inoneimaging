import { Mail, MapPin, Phone } from "lucide-react";

function ContactUsContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <MapPin className="w-10 basis-1/12" />
        <p className="basis-11/12">
          Shop RP25E Roxburgh Village, 250 Somerton Road, Roxburgh Park, VIC
          3064
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <Mail className="w-10 basis-1/12" />
        <p className="basis-11/12">info@inoneimaging.com.au</p>
      </div>
      <div className="flex gap-3 items-center">
        <Phone className="w-10 basis-1/12" />
        <p className="basis-11/12">(03) 9063 0200</p>
      </div>
    </div>
  );
}
export default ContactUsContent;
