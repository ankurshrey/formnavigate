import React from "react";
import Sections from "./Sections";

const Pages = ({ pData }) => {
  const data = pData;
  const s1Data = data[0].sections1;
  const s2Data = data[0].sections2;
  return (
    <div>
      <h2>Pages From</h2>
      {data.map((d) => (
        <div>
          <p>{d.serial}</p>
          <p>{d.name}</p>
          <p>{d.heading}</p>
          <Sections sData={s1Data} />
          <Sections sData={s2Data} />
        </div>
      ))}
    </div>
  );
};

export default Pages;
