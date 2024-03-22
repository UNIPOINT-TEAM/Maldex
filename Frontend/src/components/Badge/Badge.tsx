import React from "react";

interface BadgeProps {
  name: string;
  type?: "NEW" | "HIT";
}

const Badge: React.FC<BadgeProps> = ({ name, type }) => {
  let badgeStyle =
    "border px-[6px] py-[2px] me-1 rounded-[15px] text-[12px] font-bold tracking-wider";

  // Добавляем стили в зависимости от типа бейджа
  if (type === "NEW") {
    badgeStyle += " border-redPrimary text-redPrimary"; // Пример стилей для NEW
  } else if (type === "HIT") {
    badgeStyle += " border-greenPrimary text-greenPrimary"; // Пример стилей для HIT
  }

  return <span className={badgeStyle}>{name}</span>;
};

export default Badge;
