import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
    const navigate = useNavigate();
    function redirectToHome() {
        navigate("/");
    }
    return (
        <header className="header">
            <Logo/>
            <div className="links">
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/contatos">Contate-nos</NavLink>
                <NavLink to="/acervo">Acervo</NavLink>
                <NavLink to="/noticias">Notícias</NavLink>
            </div>
        </header>
    );
}
