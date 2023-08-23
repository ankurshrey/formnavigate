import React from "react";
const Components = ({ cData }) => {

  console.log("cData ", cData);
  return (
    <form>
      {
        cData.map((d) => (
          <div key={d.name}>
            {/* {
              d.type === "button" ? (
                <button>{d.label}</button>
              ) : (
                <>
                  <label>{d.label}</label>
                  <input name={d.name} type={d.type} />
                </>
              )
            } */}
            <label>{d.label}</label>
            <input name={d.name} type={d.type} />
          </div>
        ))
      }
    </form>
  );
};

export default Components;
