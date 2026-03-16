import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Gallery() {
    return (
        <div className="app-container">
            <Header />
            <div className="container-fluid p-5">
                <div
                    id="carouselExample"
                    class="carousel slide"
                    style={{ width: "80%", margin: "0 auto" }}
                >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src="/assets/carousel-1.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-2.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-3.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-4.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-5.jpeg "
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-6.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-7.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-8.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-9.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/assets/carousel-10.jpeg"
                                class="d-block w-100"
                                alt="..."
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
