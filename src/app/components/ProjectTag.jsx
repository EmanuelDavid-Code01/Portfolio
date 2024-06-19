import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white rounded-full border-[#1dcffd]"
    : "text-[#ADB7BE] rounded-full border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} border-2  px-6 py-2 text-xl cursor-pointer rounded-full`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
