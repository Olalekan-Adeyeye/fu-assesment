import React from "react";

const TaskCard = () => {
  return (
    <div className="p-[12px] border-[1px] rounded-[4px] mb-[8px]">
      <div>
        <div>
          <div className="flex gap-[4px]">
            <p className="text-[11px] bg-[#D1FAE5] px-[6px] py-[4px] rounded-[8px]">
              Website
            </p>
            <p className="text-[11px] bg-[#FEF3C7] px-[6px] py-[4px] rounded-[8px]">
              Design
            </p>
          </div>
          <div className="my-[12px]">
            <div className="flex">
              <div className="mr-[4px]">
                <img
                  src="assets/icons/mark.svg"
                  alt="check"
                  className="w-[12px] h-[12px] mt-1"
                />
              </div>

              <p className="text-gray-800 text-[14px] font-[600]">
                Planning meeting for website and design and implementation
              </p>
            </div>
            <div className="my-[8px]">
              <p className="text-[12px] text-gray-600">
                This information here is for task description and some other
                details spoken
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-[700] text-[10px] self-end">
                Due: January 4, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src="assets/icons/task_2.svg"
            alt="task"
            className="w-[24px] h-[24px] "
          />

          <img
            src="assets/icons/task_3.svg"
            alt="task"
            className="w-[24px] h-[24px] -ml-[8px]"
          />

          <img
            src="assets/icons/task_4.svg"
            alt="task"
            className="w-[24px] h-[24px] -ml-[8px]"
          />

          <img
            src="assets/icons/task_1.svg"
            alt="task"
            className="w-[24px] h-[24px] -ml-[8px]"
          />
        </div>

        <div className="flex gap-[8px]">
          <div className="flex items-center text-[12px] gap-[4px]">
            <img
              src="assets/icons/chat.svg"
              alt="chat"
              className="w-[16px] h-[16px]"
            />
            <p>4</p>
          </div>
          <div className="flex items-center text-[12px] gap-[4px]">
            <img
              src="assets/icons/iconamoon_attachment-light.svg"
              alt="attachment"
              className="w-[16px] h-[16px]"
            />
            <p>8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
