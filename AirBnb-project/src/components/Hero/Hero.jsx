import heroImage from "../../assets/images/hero.jpg";

import "./Hero.css";

function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})`}}
        >

            <div className="hero-content">
                <h1>Find your next South African escape</h1>

                <p>Discover unforgettable stays across South Africa —
                    from vibrant city apartments to peaceful forest cabins.
                </p>

                <button
                    className="hero-btn"
                    onClick={() =>
                        document
                        .getElementById("destinations")
                        .scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    Let's Explore
                </button>

            </div>
        </section>
    );
}

export default Hero;