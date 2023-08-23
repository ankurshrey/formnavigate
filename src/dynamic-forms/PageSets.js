import React from "react";
import CompData from "../json-component/form-data.json";
import Pages from "./Pages";

const PageSets = () => {
  const data = CompData.page_sets;
  const pData = data[0].pages;
  console.log("pageset data ", data);
  return (
    <div>
      <h2>PageSets Form</h2>
      {data.map((d) => (
        <div>
          {/* <p>{d.serial}</p>
          <p>{d.name}</p>
          <p>{d.heading}</p> */}
          <Pages pData={pData} />
        </div>
      ))}
      {}
    </div>
  );
};

export default PageSets;
