export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`w-[92%] max-w-375 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}