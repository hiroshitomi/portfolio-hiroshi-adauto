const Badge = ({ children }) => {
  return (
    <span className="bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white hover:scale-110 transition text-xs font-medium me-2 px-2 py-0.5 rounded">
      {children}
    </span>
  );
};

export default Badge;
