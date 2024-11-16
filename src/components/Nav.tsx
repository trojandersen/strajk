import { useState } from "react";
import navIcon from "../assets/navicon.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className="absolute h-full w-full z-50">
      <img src={navIcon} alt="navIcon" onClick={toggleMenu} />
      <ul>
        <li className="font-BebasNeune text-customRed tracking-wide">
          BOOKING
        </li>
        <li className="font-BebasNeune text-customRed tracking-wide">
          CONFIRMATION
        </li>
      </ul>
    </nav>
  );
}
