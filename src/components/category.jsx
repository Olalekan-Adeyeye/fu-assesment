import CategoryList from "./categoryList";

const Category = () => {
  return (
    <div className="py-[24px] px-[8px] bg-[#F1F5F9] w-[252px]">
      <div>
        <div className="flex items-center">
          <img
            src="assets/icons/avatar.svg"
            alt="avatar"
            className="w-[24px] h-[24px]"
          />
          <p className="mx-[8px]">Frontend</p>
          <img src="assets/icons/arrow_up_down.svg" alt="arrow_up_down" />
        </div>
        <div className="my-[24px]">
          <CategoryList
            img="assets/icons/overview.svg"
            alt="category"
            category="Overview"
          />
          <CategoryList
            img="assets/icons/projects.svg"
            alt="category"
            category="Projects"
          />
          <CategoryList
            img="assets/icons/task.svg"
            alt="category"
            category="Task"
            add={true}
            active={true}
          />
          <CategoryList
            img="assets/icons/team_members.svg"
            alt="category"
            category="Team members"
            add={true}
          />
          <CategoryList
            img="assets/icons/draft.svg"
            alt="category"
            category="Draft"
            add={true}
          />
          <CategoryList
            img="assets/icons/trash.svg"
            alt="category"
            category="Trash"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
