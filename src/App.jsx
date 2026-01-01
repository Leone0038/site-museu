import "./css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="page-texts-container" style={{alignSelf: "start"}}>
                <p className="page-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur perspiciatis aliquam voluptatum eveniet vitae velit
                    iste quibusdam exercitationem doloribus! Iste architecto
                    dignissimos perspiciatis quam odio eligendi sequi commodi
                    nesciunt dicta. Pariatur praesentium voluptatum vitae quos?
                    Necessitatibus est harum molestias omnis cum ullam ipsum
                    laudantium odio officiis repellendus, incidunt temporibus
                    illum ipsam amet enim fugiat consequuntur facere facilis at
                    in. Accusamus. Porro aliquid odio tempore rem? Nemo, commodi
                    dolor! Natus, labore ab rem fuga quam aliquam dolore ducimus
                    illum itaque nulla. Cumque dolores quidem ullam adipisci
                    harum in doloremque similique ea?
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default App;
