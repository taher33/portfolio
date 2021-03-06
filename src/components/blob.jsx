import React from "react";

function Blob({ classN }) {
  return (
    <svg
      className={classN}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EDF2F9"
        d="M37.3,-39.9C46.4,-28.2,50.6,-14.1,54.5,4C58.5,22,62.3,44.1,53.2,54.6C44.1,65.1,22,64.1,1.5,62.7C-19.1,61.2,-38.2,59.3,-51.7,48.8C-65.2,38.2,-73,19.1,-70.9,2.1C-68.8,-14.9,-56.7,-29.8,-43.3,-41.6C-29.8,-53.3,-14.9,-62,-0.4,-61.5C14.1,-61.1,28.2,-51.7,37.3,-39.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default Blob;
