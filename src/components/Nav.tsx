import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import navIcon from "../assets/navicon.svg";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className="absolute left-2 top-2 z-10">
      <img
        className="cursor-pointer"
        src={navIcon}
        alt="navIcon"
        onClick={toggleMenu}
      />
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="flex flex-col py-2 px-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.li
              className="font-BebasNeune text-customRed tracking-wider cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                navigate("/booking");
              }}
              whileHover={{ scale: 1.1 }}
            >
              BOOKING
            </motion.li>
            <motion.li
              className="font-BebasNeune text-customRed tracking-wider cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                navigate("/confirmation");
              }}
              whileHover={{ scale: 1.1 }}
            >
              CONFIRMATION
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
