const SidebarItem = ({ label, danger }) => {
  return (
    <div
      className={`px-3 py-2 rounded cursor-pointer flex items-center gap-2
        ${danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-blue-50"}
      `}
    >
      ▶ <span>{label}</span>
    </div>
  );
};

export default SidebarItem