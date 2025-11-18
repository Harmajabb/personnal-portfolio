import "./ProjectCard.css";

export type ProjectActionIcon = {
  icon: string;
  label: string;
  url: string;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  icons: ProjectActionIcon[];
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  description,
  image,
  techs,
  icons,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      {/* IMAGE */}
      <div className="project-image">
        <img src={image} alt={`Aperçu du projet ${title}`} />
      </div>

      {/* TITRE */}
      <h3 className="project-title">{title}</h3>

      {/* DESCRIPTION */}
      <p className="project-description">{description}</p>

      {/* ICÔNES D'ACTIONS */}
      <div className="project-icons">
        {icons.map(({ icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-icon-link"
          >
            <img src={icon} alt={label} className="project-icon" />
          </a>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <p className="project-techs">{techs.join(" — ")}</p>
    </button>
  );
}
