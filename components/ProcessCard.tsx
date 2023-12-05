import { bottomupAnimation } from "@/lib/animation";
import { motion } from "framer-motion";

type Props = {
  step: number;
  desc: string;
};

function ProcessCard({ step, desc }: Props) {
  return (
    <motion.div
      {...bottomupAnimation}
      transition={{ delay: step * 0.4 }}
      className="flex flex-col items-center space-y-5 p-8 z-10"
    >
      <p className="bg-white rounded-full text-2xl w-20 h-20 flex items-center justify-center font-medium">
        {step}
      </p>
      <p className="text-lg">{desc}</p>
    </motion.div>
  );
}
export default ProcessCard;
