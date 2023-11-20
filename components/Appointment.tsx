"use client";

import { useState } from "react";
import AppointmentForm from "./AppointmentForm";

export const revalidate = 0;

function Appointment() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      {isFormSubmitted ? (
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl">
            Thank you for requesting an appointment at In One Imaging.
          </h2>
          <p>
            Our friendly team will be in touch with you soon to confirm your
            appointment date and time.
          </p>
        </div>
      ) : (
        <>
          <p>
            Please submit your details and one of our staff will contact you to
            confirm the appointment time. Please remember to bring your referral
            to your appointment.
          </p>
          <AppointmentForm setFormSubmitted={setIsFormSubmitted} />
        </>
      )}
    </>
  );
}
export default Appointment;
