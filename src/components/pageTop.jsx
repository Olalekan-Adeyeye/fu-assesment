import Filter from "./filter";

const PageTop = () => {
  return (
    <div className="mt-[8px] mb-[24px] px-[43px]">
      <div className="w-full flex justify-between items-center mb-[12px] border-b-[1px] border-b-gray-200">
        <div className=" flex justify-between items-center text-[14px]">
          <p className="border-b-2 border-blue-700 mr-[18px] py-[4px]">
            Lone Task
          </p>
          <p className="mr-[18px] py-[4px] text-gray-400">Task in projects</p>
          <p className=" py-[4px] text-gray-400">Files</p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Sort</p>
          <img
            src="assets/icons/search.svg"
            alt=" search"
            className="mx-[16px]"
          />
          <img src="assets/icons/num_num.svg" alt="num" />
          <img
            src="assets/icons/hori_dot.svg"
            alt="more"
            className="ml-[16px] mr-[8px]"
          />
          <p className="bg-[#2563EB] px-[10px] py-[4px] rounded-[4px] text-white text-[14px]">
            New Task
          </p>
        </div>
      </div>
      <div className="flex gap-[12px]">
        <Filter
          img="assets/icons/user_gray.svg"
          alt="filter"
          filterBy="Assignee"
          className="border-[1px]"
        />
        <Filter img="assets/icons/user_blue.svg" filterBy="Assignee: Zaddy"  className="border-[1px] border-[#60A5FA] text-[#60A5FA]"/>
        <Filter img="assets/icons/plus.svg" filterBy="Filter" />
      </div>
    </div>
  );
};

// "assets/icons/filterby.svg" alt="filter" className="w-[16px] h-[16px]

export default PageTop;
