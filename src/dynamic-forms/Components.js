import React from "react";
import CompData from "../json-component/form-data.json";

const Components = () => {
  const data = CompData.page_sets[0].pages[0].sections[0].components;
  console.log("dynamic component form data ", data);
  return (
    <div>
      <h2>Components Map</h2>
      {data.map((d) => (
        <form>
          <label>{d.label}</label>
          <input name={d.name} type={d.type} />
        </form>
      ))}
    </div>
  );
};

export default Components;
