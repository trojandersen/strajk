import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Confirmation: React.FC = () => {
  const location = useLocation();
  const booking = location.state as {
    when: string;
    people: number;
    lanes: number;
    shoes: number[];
    price: number;
    id: string;
    active: boolean;
  };

  const formattedTime = new Date(booking.when).toLocaleString("sv-SE", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <motion.main className="bg-[#FFF4F1]">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-BebasNeune text-customRed  text-[80px] tracking-wide">
          SEE YOU SOON!
        </h1>
      </section>
      <form className="flex flex-col items-center">
        <fieldset className="space-y-3 mb-5">
          <legend className="text-lg font-semibold text-customPurple">
            BOOKING DETAILS
          </legend>
          <section>
            <label className="block text-sm font-medium text-customPurple">
              WHEN
            </label>
            <input
              type="text"
              readOnly
              value={formattedTime}
              className="my-2 px-3 py-2 border rounded-lg"
            />

            <label className="block text-sm font-medium text-customPurple">
              WHO
            </label>
            <input
              type="text"
              readOnly
              value={`${booking.people} pers`}
              className="my-2 px-3 py-2 border rounded-lg"
            />

            <label className="block text-sm font-medium text-customPurple">
              LANES
            </label>
            <input
              type="text"
              readOnly
              value={`${booking.lanes} lane${booking.lanes > 1 ? "s" : ""}`}
              className="my-2 px-3 py-2 border rounded-lg"
            />

            <label className="block text-sm font-medium text-customPurple">
              PRICE
            </label>
            <input
              type="text"
              readOnly
              value={`${booking.price} SEK`}
              className="my-2 px-3 py-2 border rounded-lg"
            />

            <label className="block text-sm font-medium text-customPurple">
              BOOKING ID
            </label>
            <input
              type="text"
              readOnly
              value={booking.id}
              className="my-2 px-3 py-2 border rounded-lg"
            />
          </section>
        </fieldset>
        <button className="py-3 px-12 font-WorkSans bg-customRed text-white font-bold tracking-widest rounded-lg hover:bg-red-500">
          SWEET, LET'S GO!
        </button>
      </form>
    </motion.main>
  );
};

export default Confirmation;
