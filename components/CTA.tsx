import RequestAppointmentButton from "./RequestAppointmentButton";

function CTA() {
  return (
    <div className="bg-cta-bg text-white p-10 rounded-3xl mx-4 flex flex-col text-center">
      <h2 className="text-4xl p-5">Book your next appointment now</h2>
      <p className="p-10 max-w-5xl">
        Complete our booking form and one of our friendly staff will contact you
        &#45; it&#39;s quick, and easy. Click on the below link and follow the
        simple steps. Remember to have your referral handy.
      </p>
      <RequestAppointmentButton variant="secondary" className="w-fit mx-auto" />
    </div>
  );
}
export default CTA;
