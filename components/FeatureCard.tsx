import { motion } from "framer-motion";

const bottomupAnimation = {
  initial: { y: "20%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeInOut" },
};

type Props = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

function FeatureCard({ title, desc, icon }: Props) {
  return (
    <motion.div
      {...bottomupAnimation}
      className="flex space-x-5 p-6 lg:max-w-md"
    >
      <div className="flex items-center bg-purple-50 px-2 rounded-md">
        <div>{icon}</div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-xl font-semibold text-white">{title}</p>
        <p className="text-gray-50">{desc}</p>
      </div>
    </motion.div>
  );
}
export default FeatureCard;
