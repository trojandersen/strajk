import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Confirmation: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <motion.main className="bg-[#FFF4F1]">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-BebasNeune text-customRed  text-[80px] tracking-wide">
          SEE YOU SOON!
        </h1>
      </section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <fieldset className="space-y-3 mb-5">
          <legend className="text-lg font-semibold text-customPurple">
            BOOKING DETAILS
          </legend>
          <section>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-customPurple"
            >
              WHEN
            </label>
            <input
              id="date"
              type="text"
              defaultValue="21.00, 3 dec"
              className="my-2 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />

            <label
              htmlFor="who"
              className="block text-sm font-medium text-customPurple"
            >
              WHO
            </label>
            <input
              id="who"
              type="text"
              defaultValue="3 pers"
              className="my-2 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
            <label
              htmlFor="lanes"
              className="block text-sm font-medium text-customPurple"
            >
              LANES
            </label>
            <input
              id="lanes"
              type="text"
              defaultValue="1 lane"
              className="my-2 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />

            <label
              htmlFor="bookingnumber"
              className="block text-sm font-medium text-customPurple"
            >
              NUMBER OF LANES
            </label>
            <input
              id="bookingnumber"
              type="text"
              defaultValue="STR812744"
              className="my-2 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </section>
        </fieldset>
        <button className="py-3 px-12 font-WorkSans bg-customRed text-white font-bold tracking-widest rounded-lg hover:bg-red-500">
          SWEET, LETS GO!
        </button>
      </form>
    </motion.main>
  );
};

export default Confirmation;
