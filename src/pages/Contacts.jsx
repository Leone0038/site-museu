import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contacts() {
    return (
        <div className="app-container contacts-container">
            <Header />
            <div className="page-texts-container">
                <p className="page-text">+55 9771073691</p>
                <p className="page-text">+55 41918769387</p>
            </div>
            <Footer />
        </div>
    );
}
