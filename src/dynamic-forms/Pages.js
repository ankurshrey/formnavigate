import React from "react";
import Sections from "./Sections";

const Pages = ({ pData }) => {
  const data = pData;
  const sData = data[0].sections;
  return (
    <div>
      <h2>Pages From</h2>
      {data.map((d) => (
        <div>
          <p>{d.serial}</p>
          <p>{d.name}</p>
          <p>{d.heading}</p>
          <Sections sData={sData} />
        </div>
      ))}
    </div>
  );
};

export default Pages;
