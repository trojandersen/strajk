import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Confirmation: React.FC = () => {
  return (
    <motion.main className="flex flex-col items-center">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-BebasNeune text-customRed  text-[80px] tracking-wide">
          SEE YOU SOON!
        </h1>
      </section>
      <section></section>
      <button className="font-WorkSans bg-customRed border-r-4 p-5 text-white">
        SWEET, LETS GO!
      </button>
    </motion.main>
  );
};

export default Confirmation;
