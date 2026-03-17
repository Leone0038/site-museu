import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    function redirectToHome() {
        navigate("/");
    }
    return (
        <footer className="footer">
            <img
                src="/assets/museum-logo.svg"
                alt="Logo do museu"
                className="museum-logo"
                onClick={redirectToHome}
                width={100}
                loading="eager"
                fetchpriority="high"
            />
            <p className="year">
                © {new Date().getFullYear()} Museu Regional de Canindé
            </p>
        </footer>
    );
}
