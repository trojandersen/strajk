import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Confirmation: React.FC = () => {
  return (
    <motion.main className="bg-[#FFF4F1] flex flex-col items-center">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-BebasNeune text-customRed  text-[80px] tracking-wide">
          SEE YOU SOON!
        </h1>
      </section>
      <section></section>
      <button className="py-3 px-12 font-WorkSans bg-customRed text-white font-bold tracking-widest rounded-lg hover:bg-red-500">
        SWEET, LETS GO!
      </button>
    </motion.main>
  );
};

export default Confirmation;
