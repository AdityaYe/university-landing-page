export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`w-[92%] max-w-[1500px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}