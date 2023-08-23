import React from "react";

const TableHead = ({ width, children }) => {
  return (
    <div className={`${width} p-[8px] text-[14px] font-[700] text-gray-600`}>{children}</div>
  );
};

export default TableHead;
