import React from "react";

import Components from "./Components";

const Sections = ({ sData }) => {
  const data = sData;
  const cData = data[0].components;
  const c2Data = data[0].components2;
  console.log("Section Data ", data);
  return (
    <div>
      <h2>Sections Data</h2>
      {data.map((d) => (
        <div>
          <p>{d.serial}</p>
          <p>{d.name}</p>
          <p>{d.heading}</p>
          <Components cData={cData} />
          <Components cData={c2Data} />
        </div>
      ))}
    </div>
  );
};

export default Sections;
