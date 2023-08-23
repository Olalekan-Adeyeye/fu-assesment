const Filter = ({ filterBy, img, className }) => {
  return (
    <div
      className={`${className} text-gray-400 p-[4px] flex items-center gap-x-[8px] rounded-[4px]`}
    >
      <img src={img} />
      <p className="text-[12px]">{filterBy}</p>
    </div>
  );
};

export default Filter;
