import React from "react";
import CompData from "../json-component/form-data.json";

const Sections = () => {
  const data = CompData.page_sets[0].pages[0].sections;
  console.log("Section Data ", data);
  return <div>Sections</div>;
};

export default Sections;
