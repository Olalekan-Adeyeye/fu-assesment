import React from "react";

const Assignee = ({ img, alt, name }) => {
  return (
    <div className="flex items-center">
      <img src={img} alt={alt} className="[20px] h-[20px] my-[2px] mr-[8px]" />
      <p>{name}</p>
    </div>
  );
};

export default Assignee;
