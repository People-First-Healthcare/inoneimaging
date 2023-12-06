"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
};

function RequestAppointmentButton({ className, variant }: Props) {
  const router = useRouter();
  return (
    <Button
      className={className}
      variant={variant}
      onClick={() => router.push("/request-appointment")}
    >
      Request Appointment
    </Button>
  );
}
export default RequestAppointmentButton;
