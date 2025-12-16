import "./ProjectCard.css";
import { useTranslation } from "react-i18next";

export type ProjectActionIcon = {
  icon: string;
  labelKey: string;
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
  const { t } = useTranslation();

  return (
    <article
      className="project-card"
      aria-label={t("a11y_projectCard", { title })}
    >
      {onClick && (
        <button
          type="button"
          className="project-card-overlay"
          onClick={onClick}
          aria-label={t("a11y_openProject", { title })}
        />
      )}

      {/* IMAGE */}
      <div className="project-image">
        <img src={image} alt={t("a11y_projectPreview", { title })} />
      </div>

      {/* TITRE */}
      <h3 className="project-title">{title}</h3>

      {/* DESCRIPTION */}
      <p className="project-description">{description}</p>

      {/* ICÔNES D'ACTIONS */}
      <div className="project-icons">
        {icons.map(({ icon, labelKey, url }) => (
          <a
            key={labelKey}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-icon-link"
          >
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="project-icon"
            />
            <span className="sr-only">{t(labelKey)}</span>
          </a>
        ))}
      </div>

      {/* TECHNOLOGIES */}
      <p className="project-techs">{techs.join(" — ")}</p>
    </article>
  );
}
