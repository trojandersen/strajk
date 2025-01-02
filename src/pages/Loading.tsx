import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Loading() {
  return (
    <motion.main className="flex flex-col items-center">
      <motion.img src={logo} />
      <h1 className="font-BebasNeune text-customRed  text-[80px] tracking-wide">
        STRAJK
      </h1>
      <h2 className="font-WorkSans tracking-[0.5em]">BOWLING</h2>
    </motion.main>
  );
}
