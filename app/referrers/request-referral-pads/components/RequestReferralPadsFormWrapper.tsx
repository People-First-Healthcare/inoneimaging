"use client";

import { useState } from "react";
import RequestReferralPadsForm from "./RequestReferralPadsForm";
import { CheckIcon } from "lucide-react";

function RequestReferralPadsFormWrapper() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      {isFormSubmitted ? (
        <div className="flex flex-col gap-5 text-center items-center grow">
          <CheckIcon className="bg-green-400 text-white rounded-full p-2 h-10 w-10" />
          <h2 className="text-2xl">
            Your request for InOne Imaging referral pads has been received.
          </h2>
        </div>
      ) : (
        <RequestReferralPadsForm setFormSubmitted={setIsFormSubmitted} />
      )}
    </>
  );
}
export default RequestReferralPadsFormWrapper;
