import { useNavigate } from "react-router-dom";
export default function Logo() {
    const navigate = useNavigate();
    function redirectToHome() {
        navigate("/");
    }
    return (
        <div className="logo-container">
            <img
                src="/assets/museum-logo.svg"
                alt="Logo do museu"
                className="museum-logo"
                onClick={redirectToHome}
                loading="eager"
                fetchPriority="high"
            />
        </div>
    );
}
