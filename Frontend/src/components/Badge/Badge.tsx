import React from "react";

interface BadgeProps {
  name: string;
}
const Badge: React.FC<BadgeProps> = ({ name }) => {
  return (
    <span className="border px-[6px] py-[2px] me-1 rounded-[15px] text-[12px] font-bold tracking-wider">
      {name}
    </span>
  );
};

export default Badge;
