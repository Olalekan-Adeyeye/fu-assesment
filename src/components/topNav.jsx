const TopNav = () => {
  /**font-size: 24px;
     font-style: normal;
     font-weight: 600;
     line-height: 32px; */
  return (
    <div className="flex justify-between items-center py-[22px] px-[24px]">
      <h2 className="text-[24px] font-[600]">Task Managememt</h2>
      <div className="flex justify-between items-center">
        <div className="relative">
          <img
            src="assets/icons/notific.svg"
            alt="notification"
            className="w-[32px] h-[32px] mr-[16px]"
          />
          <img src="assets/icons/noise.svg" alt=""  className="absolute top-0 right-4"/>
        </div>

        <div className="flex items-center">
          <img
            src="assets/icons/main_thumb.svg"
            alt="thumb"
            className="rounded-[16px]"
          />
          <p className="mx-4">Ebenezer</p>
          <img src="assets/icons/arrow_down.svg" alt="arrow down" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
