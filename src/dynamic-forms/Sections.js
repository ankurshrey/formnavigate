import React from "react";
import Components from "./Components";

const Sections = ({ sData, activeSectionIndex }) => {
  const section = sData[activeSectionIndex];
  const cData = section && section.components ? section.components : [];

  return (
    <div>
      <h2>Sections Data..</h2>
      <div>
        {section && (
          <>
            {/* <p>{section.serial}</p> */}
            <h3>{section.name}</h3>
            <p>{section.heading}</p>
            <Components cData={cData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Sections;
