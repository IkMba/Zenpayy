import React from "react";


export default function ({ size, bgColor, title, amount, icon, text }) {

  return (
    <div
      className={`${bgColor} text-[--blue]  text-sm rounded-lg flex flex-col gap-2 px-4 py-8 w-[150px] flex-grow md:w-[300px] max-w-[300px]`}
    >
      {icon}

      <h4 className="text-2xl">{title}</h4>
      <h4 className="text-[--gray2]">{text}</h4>
      <h4 className="text-2xl ">{amount}</h4>
    </div>
  );
}
