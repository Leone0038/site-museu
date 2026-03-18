import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function redirectToHome() {
        navigate("/");
    }
    return (
        <header className="header">
            <img
                src="/assets/museum-logo.svg"
                alt="Logo do museu"
                className="museum-logo"
                onClick={redirectToHome}
                width={100}
                loading="eager"
                fetchPriority="high"
            />
            <div className="links">
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/contatos">Contate-nos</NavLink>
                <NavLink to="/acervo">Acervo</NavLink>
                <NavLink to="/noticias">Notícias</NavLink>
            </div>
        </header>
    );
}
