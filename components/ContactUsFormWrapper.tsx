"use client";

import { useState } from "react";
import ContactUsForm from "./ContactUsForm";
import { CheckIcon } from "lucide-react";

function ContactUsFormWrapper() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      {isFormSubmitted ? (
        <div className="flex flex-col gap-5 text-center items-center grow">
          <CheckIcon className="bg-green-400 text-white rounded-full p-2 h-10 w-10" />
          <h2 className="text-2xl">Thank you for contacting us.</h2>
          <p>Our friendly team will be in touch with you shortly.</p>
        </div>
      ) : (
        <>
          <ContactUsForm setFormSubmitted={setIsFormSubmitted} />
        </>
      )}
    </>
  );
}
export default ContactUsFormWrapper;
