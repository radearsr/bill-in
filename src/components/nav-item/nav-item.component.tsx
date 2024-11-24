import { useNavigate, useLocation } from "react-router-dom";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, to }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    navigate(to);
  };
  const isActive = () => location.pathname === to;
  return (
    <button
      type="button"
      onClick={handleNavigate}
      className={`inline-flex flex-col items-center justify-center px-5 py-1 hover:bg-gray-50 hover:rounded-md group ${
        isActive() ? "bg-gray-50 rounded-md" : ""
      }`}
    >
      {icon}
      <span
        className={`text-sm text-gray-500 group-hover:text-blue-600 ${
          isActive() ? "text-blue-600" : ""
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default NavItem;
