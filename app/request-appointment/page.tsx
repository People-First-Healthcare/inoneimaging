import AppointmentFormWrapper from "@/components/AppointmentFormWrapper";
import Image from "next/image";

function RequestAppointmentPage() {
  return (
    <section id="e-referral" className="flex flex-col">
      {/* Image, title */}
      <div className="relative flex flex-col justify-center items-center h-80 lg:h-96">
        <Image
          src={"https://picsum.photos/id/502/1600/500"}
          alt={"request appointment background"}
          fill
          className="absolute object-cover opacity-50 -z-10"
        />
        <div className="flex flex-col items-center gap-2 bg-white p-3">
          <h1 className="text-3xl lg:text-5xl text-gray-950">Appointment</h1>
        </div>
      </div>

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
