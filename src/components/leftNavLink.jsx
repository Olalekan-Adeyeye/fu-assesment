import { NavLink } from "react-router-dom";

const LeftNavLink = ({ to, img, alt, invert = false }) => {
  return (
    <NavLink
      to={to}
      className="flex justify-center items-center border-gray-600  mb-[24px] w-full"
    >
      <img
        src={img}
        alt={alt}
        className={`${invert ? "invert" : ""} w-[20px] h-[20px]`}
      />
    </NavLink>
  );
};

export default LeftNavLink;
