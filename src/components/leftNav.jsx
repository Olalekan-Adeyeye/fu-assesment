import LeftNavLink from "./leftNavLink";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="py-[28px] px-[16px] w-[64px]">
      <h1 className="text-[22px] font-[600] mb-[24px] text-[#2563EB]">
        <Link to="/home">FU</Link>
      </h1>
      <div className="w-full">
        <LeftNavLink
          to="/dashboard"
          img="assets/icons/dashboard.svg"
          alt="dashboard"
        />
        <LeftNavLink
          to="/sticky"
          img="assets/icons/sticky_note.svg"
          alt="sticky"
        />
        <LeftNavLink
          to="/supervised-user"
          img="assets/icons/supervised_user.svg"
          alt="supervised_user"
        />
        <LeftNavLink
          to="/"
          img="assets/icons/note.svg"
          alt="note"
          invert={true}
        />
        <LeftNavLink
          to="/inventory"
          img="assets/icons/inventory.svg"
          alt="inventory
          "
        />
        <LeftNavLink
          to="/calculate"
          img="assets/icons/calculate.svg"
          alt="calculate"
        />{" "}
        <LeftNavLink to="/people" img="assets/icons/people.svg" alt="people" />
        <LeftNavLink
          to="/settings"
          img="assets/icons/settings.svg"
          alt="settings"
        />
      </div>
    </div>
  );
};

export default LeftNav;

// px-[16px] py-[28px] flex flex-col justify-center
