import React from "react";

const QuestionBox = ({ title, subtitle }) => {
  return (
    <>
      <div className="collapse collapse-plus border border-gray-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">{title}</div>
        <div className="collapse-content text-sm text-gray-500">
          {subtitle}
        </div>
      </div>
    </>
  );
};

export default QuestionBox;
