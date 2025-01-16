import { useState } from "react";
import logo from "../assets/logo.svg";

const Booking: React.FC = () => {
  const [shoeSizes, setShoeSizes] = useState<string[]>(["Euro 44"]);

  const addShoeSize = () => setShoeSizes([...shoeSizes, "Euro 44"]);
  const removeShoeSize = (index: number) => {
    setShoeSizes(shoeSizes.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <main className="bg-[#FFF4F1]">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-BebasNeune text-customRed text-[80px] tracking-wide">
          BOOKING
        </h1>
      </section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <fieldset className="space-y-3 mb-3">
          <legend className="text-lg font-semibold text-customPurple">
            WHEN, WHAT & WHO
          </legend>
          <section className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-customPurple"
              >
                DATE
              </label>
              <input
                id="date"
                type="text"
                defaultValue="3 dec"
                className="mt-1 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-customPurple"
              >
                TIME
              </label>
              <input
                id="time"
                type="text"
                defaultValue="21.00"
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </section>

          <label
            htmlFor="bowlers"
            className="block text-sm font-medium text-customPurple"
          >
            NUMBER OF AWESOME BOWLERS
          </label>
          <input
            id="bowlers"
            type="text"
            defaultValue="3 pers"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />

          <label
            htmlFor="lanes"
            className="block text-sm font-medium text-customPurple"
          >
            NUMBER OF LANES
          </label>
          <input
            id="lanes"
            type="text"
            defaultValue="1 lane"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </fieldset>

        <fieldset className="flex flex-col items-center space-y-3 mb-5">
          <legend className="text-lg font-semibold text-customPurple">
            SHOES
          </legend>
          {shoeSizes.map((size, index) => (
            <section key={index}>
              <div className="flex flex-col">
                <label
                  htmlFor={`size-${index}`}
                  className=" text-sm font-medium text-customPurple"
                >
                  SHOE SIZE {index + 1}
                </label>
                <div className="flex gap-5">
                  <input
                    id={`size-${index}`}
                    type="text"
                    value={size}
                    onChange={(e) =>
                      setShoeSizes(
                        shoeSizes.map((s, i) =>
                          i === index ? e.target.value : s
                        )
                      )
                    }
                    className="px-3 py-2 border rounded-lg w-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeShoeSize(index)}
                    className="px-4 py-1 bg-customRed text-white text-2xl rounded-full  hover:bg-red-500"
                  >
                    -
                  </button>
                </div>
              </div>
            </section>
          ))}
          <button
            type="button"
            onClick={addShoeSize}
            className="px-3 py-1 bg-customRed text-white text-2xl rounded-full hover:bg-red-500"
          >
            +
          </button>
        </fieldset>
        <button
          type="submit"
          className="py-3 px-12 font-WorkSans bg-customRed text-white font-bold rounded-lg tracking-widest hover:bg-red-500"
        >
          STRIIIIIIKE!
        </button>
      </form>
    </main>
  );
};

export default Booking;
