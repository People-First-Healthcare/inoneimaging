import { GemIcon } from "lucide-react";
import { motion } from "framer-motion";

const bottomupAnimation = {
  initial: { y: "20%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeInOut" },
};

function FeatureCard() {
  return (
    <motion.div
      {...bottomupAnimation}
      className="flex space-x-5 p-6 lg:max-w-md"
    >
      <div className="flex items-center bg-purple-50 px-2">
        <GemIcon />
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-semibold text-white">24 hour service</p>
        <p className="text-gray-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
    </motion.div>
  );
}
export default FeatureCard;
