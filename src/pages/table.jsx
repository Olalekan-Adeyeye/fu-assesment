import Layout from "../components/pageLayout/layout";
import TableRow from "../components/table/tableRow";
import TableHead from "../components/table/tableHead";

const Table = () => {
  return (
    <div>
      <Layout>
        <div className="flex h-auto overflow-x-auto gap-x-[25px] px-[43px] mb-[24px] pr-[15px] no-scrollbar">
          <div className="">
            <div className="text-left flex">
              <TableHead width="w-[243px]">Task name</TableHead>
              <TableHead width="w-[243px]">Description</TableHead>
              <TableHead width="w-[220px]">Assignee</TableHead>
              <TableHead width="w-[190px]">Due date</TableHead>
              <TableHead width="w-[162px]">Priority</TableHead>
              <TableHead width="w-[162px]">Status</TableHead>
              <TableHead width="w-[243px]">Project</TableHead>
              <TableHead width="w-[220px]">Tags</TableHead>
            </div>

            <div>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Table;
