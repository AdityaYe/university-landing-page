export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`w-[92%] max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}