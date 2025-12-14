import { Icon } from "@iconify/react/dist/iconify";
export const BtnVolver = () => {
  return (
    <button className="absolute top-4 left-4 bg-white text-black hover:bg-[#f2f2f2] p-3 rounded-full shadow-lg cursor-pointer">
      <Icon icon="noto-v1:left-arrow" width="24" height="24" />
    </button>
  );
};
