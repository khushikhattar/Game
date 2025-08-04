import React from "react";
import { Square } from "./square";
export const Board = () => {
  return (
    <div className="board flex flex-col items-center justify-center gap-4 p-4 h-screen bg-slate-400">
      <div className="board-row flex flex-row gap-4">
        <Square name="X" />
        <Square name="X" />
        <Square name="X" />
      </div>
      <div className="board-row flex flex-row gap-4">
        <Square name="X" />
        <Square name="X" />
        <Square name="X" />
      </div>
      <div className="board-row flex flex-row gap-4">
        <Square name="X" />
        <Square name="0" />
        <Square name="0" />
      </div>
    </div>
  );
};
