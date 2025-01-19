import { MoveDown, MoveUp } from "lucide-react";
import React from "react";

export default function TransactionCard({ transactionDetails }) {
  const { type, amount, date, description, name } = transactionDetails;
  return (
    <div className="border-[--blue] border p-4 flex gap-2 text-[--gray2] my-4 md:max-w-[550px]">
      {type === "credit" ? (
        <MoveDown color="#062863" />
      ) : (
        <MoveUp color="#dc2626" />
      )}
      <div className="flex justify-between items-center w-full text-red-600 ">
        <div>
          <h3 className="text-[--gray2]">{description}</h3>
          <h3 className="text-xl text-[--blue] font-medium">{name}</h3>
        </div>
        <div>
          <h4
            className={type === 'credit' ? 'text-[--blue]' : 'text-red-600' }
          >
            {amount}
          </h4>
          <h4 className="text-[--gray2]">{date}</h4>
        </div>
      </div>
    </div>
  );
}
