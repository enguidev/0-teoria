import { Icon } from "@iconify/react/dist/iconify";
import { useNavigate } from "react-router-dom";
export const BtnVolver = () => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(-1)} className="absolute top-4 left-4 bg-white text-black hover:bg-[#f2f2f2] p-3 rounded-full shadow-lg cursor-pointer">
      <Icon icon="noto-v1:left-arrow" width="24" height="24" />
    </button>
  );
};
