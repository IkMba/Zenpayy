import React from "react";

export default function Formcontainer({ children }) {
  return (
    <div className="max-w-[100%] overflow-hidden">
      {children}
      {/* <h1 className="text-white font-semibold text-4xl mb-8 text-center">Zenpay</h1>
      <div className="bg-white md:w-[500px] rounded-2xl ">
      </div> */}
    </div>
  );
}
