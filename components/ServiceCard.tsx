import { Service } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { appearOnceAnimation } from "@/lib/animation";

type Props = {
  service: Service;
  order: number;
};

function ServiceCard({ service: { id, title, image }, order }: Props) {
  return (
    <motion.div {...appearOnceAnimation} transition={{ delay: order * 0.08 }}>
      <Link
        href={`/services/${id}`}
        className="flex flex-col group items-center"
      >
        <div className="relative flex items-center justify-center shadow-xl w-52 h-52 rounded-xl overflow-hidden">
          <Image
            src={image}
            fill
            alt={title}
            className="absolute group-hover:scale-110 transition-all duration-500 ease-in-out object-cover"
          />
        </div>
        <p className="text-lg py-2">{title}</p>
      </Link>
    </motion.div>
  );
}
export default ServiceCard;
