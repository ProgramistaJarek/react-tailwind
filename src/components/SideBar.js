import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16  m-0  flex flex-col bg-gray-200 dark:bg-gray-900  shadow-lg ">
      <SideBarIcon icon={<FaFire size="28" />} text="test1" />
      <SideBarIcon icon={<BsPlus size="28" />} text="test2" />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} text="test3" />
      <SideBarIcon icon={<FaPoo size="28" />} text="test4" />
    </div>
  );
}

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
