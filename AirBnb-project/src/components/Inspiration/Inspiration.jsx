import "./Inspiration.css";
import DestinationCard from "../DestinationCard/DestinationCard";

import johannesburg from "../../assets/images/johannesburg.jpg";
import capeTown from "../../assets/images/capeTown.jpg";
import durban from "../../assets/images/durban.jpg";
import knysna from "../../assets/images/knysna.jpg";

function Inspiration() {
    return (
        <section id="destinations" className="inspiration">

            <h2>Explore South Africa</h2>

            <p className="inspiration-subtitle">
                Discover unforgettable destinations and find the perfect place to stay.
            </p>

            <div className="locations">

                <DestinationCard
                    destination={{
                        image: johannesburg,
                        title: "Johannesburg",
                        country: "South Africa",
                        distance: "53 km away",
                        description: "Modern city living and luxury experiences."
                    }}
                />

                <DestinationCard
                    destination={{
                        image: capeTown,
                        title: "Cape Town",
                        country: "South Africa",
                        distance: "168 km away",
                        description: "Ocean views and iconic mountain escapes."
                    }}
                />

                <DestinationCard
                    destination={{
                        image: durban,
                        title: "Durban",
                        country: "South Africa",
                        distance: "30 km away",
                        description: "Warm beaches and family filled holidays."
                    }}
                />

                <DestinationCard
                    destination={{
                        image: knysna,
                        title: "Knysna",
                        country: "South Africa",
                        distance: "89 km away",
                        description: "Forest retreats and peaceful lagoon stays."
                    }}
                />
            </div>

        </section>
    );
}

export default Inspiration;