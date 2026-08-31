"use client"
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { FaDocker } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { RiNextjsFill } from "react-icons/ri";
import { SiBetterauth, SiGithub, SiGoogle, SiPrisma, SiShadcnui, SiVercel } from "react-icons/si";

const transitionVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

type DevStack = {
  name: string;
  icon: IconType | typeof ShieldCheck;
};

const devStacks: DevStack[] = [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Prisma ORM", icon: SiPrisma },
  { name: "Better Auth", icon: SiBetterauth },
  { name: "Google", icon: SiGoogle },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "Docker", icon: FaDocker }
];

export default function Integrations() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % devStacks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = devStacks[index];
  const Icon = current.icon;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={transitionVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-col items-center gap-2"
        >
          <Icon className="w-16 h-16" />
          <span className="text-lg font-semibold">{current.name}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}