import React from "react";

export default function Formcontainer({ children }) {
  return (
    <div className=" bg-[--blue] min-h-screen py-16 px-3">
      <h1 className="text-white font-semibold text-4xl mb-8 text-center">
        Zenpay
      </h1>
      <div className="bg-white mx-auto md:w-[500px] rounded-2xl ">{children}</div>
    </div>
  );
}
