import React from "react";
import Assignee from "./assignee";
import Tag from "./tags";

const TableRow = () => {
  return (
    <div className="flex last-of-type:border-b-[1px]">
      <div className="flex text-[14px] w-[243px] border-t-[1px] p-[8px] border-r-[1px]">
        <img
          src="assets/icons/mark.svg"
          alt="check"
          className="[12px] h-[12px] mt-1 mr-[4px]"
        />
        <p className="text-gray-800">Review search result and hack all</p>
      </div>
      <div className="text-[12px] w-[243px] border-t-[1px] p-[8px] border-r-[1px]  ">
        <p className="text-gray-800">
          This information here is for task description and some other details
          spokention...
        </p>
      </div>
      <div className="text-[11px] text-[#475569] w-[220px] border-t-[1px] p-[8px] border-r-[1px]  ">
        <Assignee
          img="assets/icons/task_2.svg"
          alt="image"
          name="Iwaloye Olawale"
        />
        <Assignee
          img="assets/icons/sandra.svg"
          alt="image"
          name="Sandra Isburg"
        />
        <Assignee
          img="assets/icons/amandla.svg"
          alt="image"
          name="Amandla Steinberg"
        />
      </div>
      <div className="w-[190px] border-t-[1px] p-[8px] border-r-[1px]  ">
        <p className="text-[#D97706] text-[14px]">
          July 18, 2022 - July 30, 2022
        </p>
      </div>
      <div className="w-[162px] text-[12px] border-t-[1px] p-[8px] border-r-[1px] ">
        <p className="px-[8px] py-[2px] rounded-[4px] border-[#6EE7B7] border-2 bg-[#ECFDF5] w-fit">
          Low
        </p>
      </div>
      <div className="w-[162px] border-t-[1px] p-[8px] border-r-[1px] text-[14px] ">
        <div className="flex items-center gap-x-[8px]">
          <img
            src="assets/icons/warning_gray.svg"
            alt=""
            className="w-[8px] h-[8px]"
          />
          <p className="font-[700] text-[#475569]">Not Started</p>
        </div>
      </div>
      <div className="border-t-[1px] text-[12px] p-[8px] border-r-[1px] w-[243px]">
        <div className="flex items-center gap-x-[8px]">
          <img
            src="assets/icons/projects.svg"
            alt=""
            className="w-[20px] h-[20px]"
          />
          <p className="font-[600]">Projects new dawn andnd</p>
        </div>
      </div>
      <div className="w-[220px] text-[11px] border-t-[1px] p-[8px] flex gap-x-[8px]">
        <Tag tag="Frontend" color="bg-[#b7cbdfda]" />
        <Tag tag="Design" color="bg-[#F8FAC5]" />
      </div>
      {/* <div className="w-[243px] border-t-[1px] p-[8px] border-r-[1px]   flex">
       
      </div> */}
      {/* <div className="w-[243px] flex">
       
      </div> */}
    </div>
  );
};

export default TableRow;
