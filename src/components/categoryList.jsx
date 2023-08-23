import React from "react";

const CategoryList = ({ img, alt, category, add = false, active = false }) => {
  return (
    <div
      className={`${
        active ? "bg-[#E2E8F0] rounded-[4px]" : ""
      } px-[16px] py-[8px] flex justify-center items-center w-full  cursor-pointer`}
    >
      <div className="flex w-full items-center">
        <img src={img} alt={alt} className="w-[16px] h-[16px] mr-[8px]" />
        <h3
          className={`${
            active ? "text-[#2563EB]" : "text-gray-500"
          } font-[700] text-[14px]`}
        >
          {category}
        </h3>
      </div>
      {add && (
        <img src="assets/icons/plus.svg" alt="add" className="" />
      )}
    </div>
  );
};

export default CategoryList;
