import React from "react";

export default function Pagination({ showArt, showTech, showOther }) {
  return (
    <div>
      <button
        className="button bg-emerald-500 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={showArt}
      >
        Art
      </button>
      <button
        className="button bg-emerald-600 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={showTech}
      >
        Tech
      </button>
      <button
        className="button bg-emerald-700 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={showOther}
      >
        Other
      </button>
    </div>
  );
}
