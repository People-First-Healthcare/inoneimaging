import AppointmentFormWrapper from "@/app/request-appointment/components/AppointmentFormWrapper";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an Appointment With Us Now",
  description:
    "You can easily fill out the form and our friendly team will contact you to confirm the appointment time. Please remember to bring your referral to your appointment.",
};

function RequestAppointmentPage() {
  return (
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <HeroBanner
        title={"Request Appointment"}
        image={"https://picsum.photos/id/600/1600/500"}
      />

      <div className="flex flex-col lg:flex-row items-center px-4 py-10 gap-10 lg:gap-16 mx-auto">
        {/* Form */}
        <div className="flex flex-col gap-5 max-w-xl">
          <h2 className="text-2xl">Request an Appointment</h2>
          <AppointmentFormWrapper />
        </div>

        {/* Photo */}
        <Image
          src={"https://picsum.photos/id/511/1000/1280"}
          width={400}
          height={500}
          alt="sample-photo"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
export default RequestAppointmentPage;
