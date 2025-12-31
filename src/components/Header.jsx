import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function redirectToHome() {
    navigate("/");
  }
  return (
    <header className="header">
      <img
        src="src/assets/museum.png"
        alt="Logo do museu"
        className="museum-logo"
        onClick={redirectToHome}
        width={100}
      />
      <div className="links">
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/numeros">Telefones</NavLink>
      </div>
    </header>
  );
}
