import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="video-container">
                <video
                    src="/assets/museum-video.webm"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/museum-video-poster.webp"
                    preload="metadata"
                ></video>
                <div>
                    <h1 style={{whiteSpace: 'nowrap'}}>
                        Museu de Canindé:
                    </h1>
                    <h1>A Renascença de um Legado</h1>
                    <h2>
                        Um plano estratégico para garantir a sustentabilidade e
                        relevância de um patrimônio de fé e memória.
                    </h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
