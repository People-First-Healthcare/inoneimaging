"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

function RequestAppointmentButton({ className }: Props) {
  const router = useRouter();
  return (
    <Button
      className={className}
      onClick={() => router.push("/request-appointment")}
    >
      Request Appointment
    </Button>
  );
}
export default RequestAppointmentButton;
