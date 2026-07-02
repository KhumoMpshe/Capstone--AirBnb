import "./ExperienceCard.css";

function ExperienceCard({ image, title }) {
  return (
    <div className="experience-card">
      <img src={image} alt={title} />

      <div className="experience-overlay">
        <h3>{title}</h3>

        <button>Explore</button>
      </div>
    </div>
  );
}

export default ExperienceCard;