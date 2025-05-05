import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Booking: React.FC = () => {
  const [booking, setBooking] = useState({
    when: "2025-05-05T00:00",
    lanes: 1,
    people: 2,
    shoes: [38, 39, 44, 43],
  });
  const lastShoeSizeRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (lastShoeSizeRef.current) {
      lastShoeSizeRef.current.scrollIntoView({
        behavior: "instant",
        block: "end",
      });
    }
  }, [booking.shoes]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
          },
          body: JSON.stringify(booking),
        }
      );

      if (!response.ok) {
        throw new Error("Network response failure");
      }

      const data = await response.json();
      console.log("Booking successful:", data);
      navigate("/confirmation", {
        state: {
          when: data.when,
          lanes: data.lanes,
          people: data.people,
          shoes: data.shoes,
          price: data.price,
          id: data.id,
          active: data.active,
        },
      });
    } catch (error) {
      console.error("There was a problem with the booking request:", error);
    }
  };

  return (
    <main className="bg-[#FFF4F1] flex flex-col items-center">
      <section className="flex flex-col items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-BebasNeune text-customRed text-[80px] tracking-wide">
          BOOKING
        </h1>
      </section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <fieldset className="space-y-3 mb-3 w-full">
          <legend className="text-lg font-semibold text-customPurple">
            WHEN, WHAT & WHO
          </legend>
          <section className="flex justify-between gap-5">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-customPurple"
              >
                DATE
              </label>
              <input
                id="date"
                type="date"
                value={booking.when.split("T")[0]}
                onChange={(e) =>
                  setBooking({
                    ...booking,
                    when:
                      e.target.value + "T" + booking.when.split("T")[1] ||
                      "00:00",
                  })
                }
                className="mt-1 px-5 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
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
                type="time"
                value={booking.when.split("T")[1]}
                onChange={(e) =>
                  setBooking({
                    ...booking,
                    when: booking.when.split("T")[0] + "T" + e.target.value,
                  })
                }
                className="mt-1 px-5 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
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
            value={booking.people}
            onChange={(e) =>
              setBooking({ ...booking, people: parseInt(e.target.value) })
            }
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
            type="number"
            value={booking.lanes}
            onChange={(e) =>
              setBooking({ ...booking, lanes: parseInt(e.target.value) })
            }
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
          />
        </fieldset>

        <fieldset className="space-y-3 mb-5 w-full">
          <legend className="text-lg font-semibold text-customPurple">
            SHOES
          </legend>
          {booking.shoes.map((size, index) => (
            <section key={index}>
              <div>
                <label
                  htmlFor={`size-${index}`}
                  className="text-sm font-medium text-customPurple"
                >
                  SHOE SIZE {index + 1}
                </label>
                <div className="flex gap-5">
                  <input
                    id={`size-${index}`}
                    type="number"
                    value={size}
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        shoes: booking.shoes.map((s, i) =>
                          i === index ? parseInt(e.target.value) : s
                        ),
                      })
                    }
                    className="px-3 py-2 border rounded-lg w-full"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setBooking({
                        ...booking,
                        shoes: booking.shoes.filter((_, i) => i !== index),
                      })
                    }
                    className="px-10 py-1 bg-customRed text-white text-2xl rounded-full hover:bg-red-500"
                  >
                    -
                  </button>
                </div>
              </div>
            </section>
          ))}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                setBooking({ ...booking, shoes: [...booking.shoes, 38] })
              }
              className="px-3 py-1 bg-customRed text-white text-2xl rounded-full hover:bg-red-500"
            >
              +
            </button>
          </div>
        </fieldset>
        <button
          type="submit"
          className="mb-2 py-3 px-12 font-WorkSans bg-customRed text-white font-bold rounded-lg tracking-widest hover:bg-red-500"
        >
          STRIIIIIIKE!
        </button>
        <div ref={lastShoeSizeRef} />
      </form>
    </main>
  );
};

export default Booking;
