import React from "react";

const Tag = ({ tag, color }) => {
  return (
    <div>
      <p className={`${color} px-[8px] py-[4px] rounded-[4px]`}>{tag}</p>
    </div>
  );
};

export default Tag;
