import React from "react";

import Components from "./Components";

const Sections = ({ sData }) => {
  const data = sData;
  const cData = data[0].components;
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
        </div>
      ))}
    </div>
  );
};

export default Sections;
