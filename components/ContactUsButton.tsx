"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

function ContactUsButton({ className }: Props) {
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() => router.push("/about/contact-us")}
    >
      Contact Us
    </Button>
  );
}
export default ContactUsButton;
