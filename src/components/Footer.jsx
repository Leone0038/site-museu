import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <p className="year">
                © {new Date().getFullYear()} Museu Regional de Canindé
            </p>
        </footer>
    );
}
