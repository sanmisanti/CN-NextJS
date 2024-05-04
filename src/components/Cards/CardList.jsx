import React from "react";
import Card from "../Card";

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dfe7eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalculatorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#dfe7eb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}

const CardList = () => {
  return (
    <div className="space-y-12 px-4 md:px-6">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <Card
          title={"Consultoría de neogicos"}
          description={
            "Our experienced consultants provide strategic guidance to help your business thrive."
          }
        >
          <BriefcaseIcon className="h-8 w-8 text-[#0077b6]" />
        </Card>
        <Card
          title={"Servicios contables"}
          description={
            "Our experienced consultants provide strategic guidance to help your business thrive.Accurate financial reporting and tax planning to optimize your business."
          }
        >
          <CalculatorIcon className="h-8 w-8 text-[#0077b6]" />
        </Card>
        <Card
          title={"Desarrollo de TI"}
          description={
            "Reliable and secure IT solutions to keep your business running smoothly."
          }
        >
          <CalculatorIcon className="h-8 w-8 text-[#0077b6]" />
        </Card>
      </div>
    </div>
  );
};

export default CardList;
