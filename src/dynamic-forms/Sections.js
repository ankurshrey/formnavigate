import React from "react";
import Components from "./Components";

<<<<<<< HEAD
const Sections = ({ sData, activeSectionIndex }) => {
  const section = sData[activeSectionIndex];
  const cData = section && section.components ? section.components : [];

  return (
    <div>
      <h2>Sections Data</h2>
      <div>
        {section && (
          <>
            <p>{section.serial}</p>
            <h4>{section.name}</h4>
            <p>{section.heading}</p>
            <Components cData={cData} />
          </>
        )}
      </div>
=======
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
>>>>>>> 0612fee3430b9085ee60f4afb77cb9f427a1ca73
    </div>
  );
};

export default Sections;
