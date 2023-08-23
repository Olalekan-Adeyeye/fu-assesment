import React from "react";

const ProgressStatus = ({ img, status, number, progressColor }) => {
  return (
    <div className="w-[333px] text-[14px] mb-[16px]">
      <div className="flex justify-between items-center mb-[16px] px-[4px]">
        <div
          className={`flex justify-between items-center gap-x-[8px] py-[2px]`}
        >
          <div
            className={`${progressColor} flex gap-[8px] px-[8px] rounded-[4px]`}
          >
            <img src={img} alt="warning" />
            <p className="font-[700] text-[14px]">{status}</p>
          </div>
          <p>{number}</p>
        </div>

        <div>
          <img src="assets/icons/vert_dot.svg" alt="menu" />
        </div>
      </div>
      <div className="border-[1px] border-dashed rounded-[4px] bg-white">
        <img
          src="assets/icons/circle_plus.svg"
          alt="add"
          className="block mx-auto px-[10px] py-[4px]"
        />
      </div>
    </div>
  );
};

export default ProgressStatus;
