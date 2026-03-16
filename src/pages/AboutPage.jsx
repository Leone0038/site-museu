import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
    return (
        <div className="about-container">
            <Header />
            <div className="page-texts-container">
                <p className="page-text">
                    <strong>Legado de Fé:</strong> Fundado em 1973, abriga mais
                    de 5.000 peças doadas por romeiros, representando um espaço
                    simbólico para o turismo de romaria.
                </p>

                <p className="page-text">
                    <strong>Patrimônio Cultural:</strong> Conserva objetos,
                    documentos e informações que ilustram a trajetória e a
                    identidade do povo da região.
                </p>
                <p className="page-text">
                    <strong>Âncora do Turismo:</strong> Concentra informações
                    culturais valiosas, sendo um atrativo fundamental para
                    visitantes que desejam conhecer a vida da cidade.{" "}
                </p>
            </div>
            <Footer />
        </div>
    );
}
