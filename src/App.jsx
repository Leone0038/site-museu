import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="video-container">
                <video
                    src="/assets/home-page-video.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
                <div>
                    <h1>
                        Museu de Canindé:<br></br>A Renascença de um Legado
                    </h1>
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
