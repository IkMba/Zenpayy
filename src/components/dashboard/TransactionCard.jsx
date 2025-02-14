import { MoveDown, MoveUp } from "lucide-react";
import React from "react";

export default function TransactionCard({ transactionDetails }) {
  let { type, amount, date, description, name } = transactionDetails;
  let a = amount.toString()
  a =  a.replace(new RegExp("^(\\d{" + (a.length%3?a.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
  var sep = ",";
  a = a.replace(/\s/g, sep);
  let amount2 = a

  return (
    <div className="border-[--blue] border p-4 flex gap-2 text-[--gray2] my-4 md:w-[550px] w-full">
      {type === "credit" ? (
        <MoveDown color="#188351" />
      ) : (
        <MoveUp color="#dc2626" />
      )}
      <div className="flex justify-between items-center w-full text-red-600 ">
        <div>
          <h3 className="text-[--gray2] first-letter:capitalize">{description}</h3>
          <h3 className="text-xl text-[--blue] font-medium">{type === "credit" ? "Crypto Credit(Btc)" : name}</h3>
        </div>
        <div>
          <h4 className={ `${type === "credit" ? "text-[#188351]" : "text-red-600"} slashed-zero tabular-nums ` } >
            ${amount2}
          </h4>
          <h4 className="text-[--gray2]">{date.split('T')[0]}</h4>
        </div>
      </div>
    </div>
  );
}
