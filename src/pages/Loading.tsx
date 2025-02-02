import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Loading: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.main className="flex flex-col items-center">
      <motion.img
        src={logo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/booking")}
        className="cursor-pointer"
      />
      <h1 className="font-BebasNeune text-customRed  text-[80px] tracking-widest">
        STRAJK
      </h1>
      <h2 className="font-WorkSans tracking-[0.5em]">BOWLING</h2>
    </motion.main>
  );
};

export default Loading;
