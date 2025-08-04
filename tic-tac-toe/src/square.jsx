import React from "react";

export const Square = (props) => {
  return (
    <div className="square w-20 h-20 border-2 border-zinc-800 flex items-center justify-center text-2xl font-bold cursor-pointer hover:bg-zinc-200 transition">
      {props.name}
    </div>
  );
};
