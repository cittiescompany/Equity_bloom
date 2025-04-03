"use client";
import React from "react";
import { IconBase } from "react-icons";

const SecondHero = () => {
  return (
    <section className="p-3 sm:p-20 flex flex-col gap-10 items-center justify-center">
      <h1 className="font-semibold text-3xl text-center ">
        Find out why millions worldwide trust Citties
      </h1>
      <div className="grid sm:grid-cols-3 gap-10">
        {[1, 1, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-full"
          >
            <div>
              <IconBase />
            </div>
            <strong className="text-xl">
              {index === 0
                ? "Peace of Mind"
                : index === 1
                ? "Great Value"
                : "Delivery Time Guaranteed"}
            </strong>
            <p className="text-center font-medium">
              {index === 0
                ? "You and your recipients can track your transfer every step of the way."
                : index === 1
                ? "Enjoy consistently great rates and no hidden fees. Whether using the app or online, you'll see all fees before sending."
                : "You can trust that transfers will be delivered on time or we’ll refund your fees."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondHero;
