import "./Experiences.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import experiences from "../../data/experiences";

function Experiences() {
  return (
    <section className="experiences">

      <h2>Discover Airbnb Experiences</h2>

      <div className="experience-grid">

        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            image={experience.image}
            title={experience.title}
          />
        ))}

      </div>

    </section>
  );
}

export default Experiences;