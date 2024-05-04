import React from "react";

const Card = ({ children, title, description }) => {
  return (
    <div className="grid gap-4">
      {children}
      <h3 className="text-xl font-bold text-[#dfe7eb]">{title}</h3>
      <p className="text-[#dfe7eb]">{description}</p>
    </div>
  );
};

export default Card;
