import { GemIcon } from "lucide-react";

function FeatureCard() {
  return (
    <div className="flex space-x-5 p-6 lg:max-w-md">
      <div className="flex items-center bg-purple-50 px-2">
        <GemIcon />
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-semibold text-white">24 hour service</p>
        <p className="text-gray-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
    </div>
  );
}
export default FeatureCard;
