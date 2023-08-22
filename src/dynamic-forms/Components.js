import React from "react";
// import CompData from "../json-component/form-data.json";

const Components = ({ cData }) => {
  //   const data = CompData.page_sets[0].pages[0].sections[0].components;
  //   console.log("dynamic component form data ", data);
  console.log("cData ", cData);
  return (
    <div>
      <h2>Components Map</h2>
      <form>
        {cData.map((d) => (
          <div>
            <label>{d.label}</label>
            <input name={d.name} type={d.type} />
          </div>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Components;
