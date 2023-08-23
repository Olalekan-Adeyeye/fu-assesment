import Layout from "../components/pageLayout/layout";
import ProgressStatus from "../components/progressStatus";
import TaskCard from "../components/task/taskCard";

const Kanban = () => {
  return (
    <div>
      <Layout>
        <div className="flex h-auto overflow-x-auto gap-x-[25px] px-[43px] no-scrollbar">
          <div className="">
            <ProgressStatus
              img="assets/icons/warning_gray.svg"
              status="Not Started"
              number={8}
              progressColor="bg-gray-200 text-gray-600"
            />
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </div>
          <div className="">
            <ProgressStatus
              img="assets/icons/warning_brown.svg"
              status="In progress"
              number={3}
              progressColor="bg-[#FFFBEB] text-[#D97706]"
            />
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </div>
          <div className="">
            <ProgressStatus
              img="assets/icons/warning_teal.svg"
              status="Completed"
              number={3}
              progressColor="bg-[#ECFDF5] text-[#059669]"
            />
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </div>
          <div className="">
            <ProgressStatus
              img="assets/icons/warning_gray.svg"
              status="In review"
              number={3}
              progressColor="bg-[#EFF6FF] text-[#2563EB]"
            />
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </div>
          <div className="">
            <ProgressStatus
              img="assets/icons/warning_gray.svg"
              status="Overdue"
              number={3}
              progressColor="bg-red-200 text-red-600"
            />
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Kanban;
