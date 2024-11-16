import { motion } from "framer-motion";

export default function Booking() {
  return (
    <motion.main className="h-full flex flex-col items-center place-content-center bg-[#FFF4F1]">
      <section>
        <h1 className="font-BebasNeune text-customRed text-[80px] tracking-wide">
          STRAJK
        </h1>
      </section>
      <section></section>
      <button className="bg-customRed border-r-4 p-5 text-white">
        STRIIIIIIKE!
      </button>
    </motion.main>
  );
}
