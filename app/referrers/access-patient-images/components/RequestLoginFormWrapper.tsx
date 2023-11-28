"use client";

import { useState } from "react";
import RequestLoginForm from "./RequestLoginForm";
import { CheckIcon } from "lucide-react";

function RequestLoginFormWrapper() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      {isFormSubmitted ? (
        <div className="flex flex-col gap-5 text-center items-center grow">
          <CheckIcon className="bg-green-400 text-white rounded-full p-2 h-10 w-10" />
          <h2 className="text-2xl">
            Thank you for requesting access to your patient's reports and
            images.
          </h2>
          <p>Our friendly team will be in touch with you shortly.</p>
        </div>
      ) : (
        <RequestLoginForm setFormSubmitted={setIsFormSubmitted} />
      )}
    </>
  );
}
export default RequestLoginFormWrapper;
