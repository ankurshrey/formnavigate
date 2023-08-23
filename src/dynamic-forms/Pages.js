import React, { useState } from "react";
import Sections from "./Sections";

const Pages = ({ pData }) => {
  const data = pData;
  const sData = data[0].sections;
  const s_0Data = data[0].sections_0;
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const handleNextSection = () => {
    setActiveSectionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousSection = () => {
    setActiveSectionIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div>
      <h2>Pages Form</h2>
      {data.map((d) => (
        <div key={d.id}>
          <p>{d.serial}</p>
          <p>{d.name}</p>
          <p>{d.heading}</p>
          <Sections sData={sData} activeSectionIndex={activeSectionIndex} />
          <Sections sData={s_0Data} />
          {activeSectionIndex > 0 && (
            <button onClick={handlePreviousSection}>Back</button>
          )}
          {activeSectionIndex < sData.length - 1 && (
            <button onClick={handleNextSection}>Next</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pages;
