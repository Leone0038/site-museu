import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState("");

    const images = Array.from(
        { length: 10 },
        (_, i) => `/assets/carousel-${i + 1}.webp`,
    );

    return (
        <div className="app-container">
            <Header />
            <div className="container-fluid p-5">
                <div
                    id="museumCarousel"
                    className="carousel slide shadow-museum"
                    style={{
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <div className="carousel-inner">
                        {images.map((imgSrc, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <img
                                    src={imgSrc}
                                    className="d-block w-100"
                                    alt={`Museum exhibit ${index + 1}`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#imageModal"
                                    onClick={() => setSelectedImg(imgSrc)}
                                    style={{ cursor: "zoom-in" }}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#museumCarousel"
                        data-bs-slide="prev"
                        style={{ zIndex: 10 }} // Explicitly lift above the images
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#museumCarousel"
                        data-bs-slide="next"
                        style={{ zIndex: 10 }} // Explicitly lift above the images
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* --- BOOTSTRAP MODAL PREVIEW --- */}
            <div
                className="modal fade"
                id="imageModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-body p-0 text-center position-relative">
                            {selectedImg && (
                                <img
                                    src={selectedImg}
                                    className="img-fluid rounded shadow-lg"
                                    alt="Enlarged view"
                                    style={{ maxHeight: "95vh" }}
                                />
                            )}
                            <button
                                type="button"
                                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
