import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const CardList = () => {
  const temasTeoria = [
    { title: "useEffect", to: "/useeffect" },
    { title: "imagenes", to: "/imagenes" },
  ];
  return (
    <div className="group flex flex-col gap-4">
      {temasTeoria.map((item, index) => (
        <Link
          to={item.to}
          key={index}
          className="w-full bg-[#151515] p-5 rounded-xl border-3 border-[#333] flex justify-between hover:border-[#e776f3] cursor-pointer"
        >
          <h3 className="font-medium text-lg">{item.title}</h3>
          <Icon
            className="group-hover:text-[#e776f3]"
            icon="weui:arrow-filled"
            width="12"
            height="24"
          />
        </Link>
      ))}
    </div>
  );
};
