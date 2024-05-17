export default function Link({ children, color = "primary", onClick }) {
  return (
    <a
      onClick={onClick}
      className={color === "error" ? "link red" : "link blue"}
      href="#"
    >
      {children}
    </a>
  );
}
