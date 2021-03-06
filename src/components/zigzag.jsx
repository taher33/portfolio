import React from "react";

function Zigzag({ classN }) {
  return (
    <svg
      className={classN}
      width="230"
      height="56"
      viewBox="0 0 230 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 50L46.8787 8.12132C48.0503 6.94975 49.9497 6.94975 51.1213 8.12132L90.8787 47.8787C92.0503 49.0503 93.9497 49.0503 95.1213 47.8787L134.879 8.12132C136.05 6.94975 137.95 6.94975 139.121 8.12132L178.879 47.8787C180.05 49.0503 181.95 49.0503 183.121 47.8787L225 6"
        stroke="#34FDF8"
        stroke-width="13"
      />
    </svg>
  );
}

export default Zigzag;
