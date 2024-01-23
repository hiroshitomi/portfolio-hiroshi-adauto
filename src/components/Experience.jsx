import ExperienceItem from "./ExperienceItem"
import ExperienceWorkIcon from "./icons/ExperienceWork"

const EXPERIENCES = [
  {
    id: 1,
    date: "Enero 2022 - Actualidad",
    title: "Frontend Developer BioSoft Online S.R.L",
    description:
      "Desarrollando el frontend sobre sistemas de autorización en línea para Bioquímicos en Argentina.",
    link: "",
  },
  {
    id: 2,
    date: "Octubre 2022 - Actualidad",
    title: "Developer TeteClothes",
    description:
      "Desarrollando la tienda online completa de un emprendimiento propio, utilizando React.",
    link: "",
  },
];

const Experience = () => {
  return (
    <>
    <h2 className="text-3xl font-semibold mb-6 flex items-center gap-x-3">
				<ExperienceWorkIcon class="size-8"/>
				Experiencia laboral
    </h2>
    <ol className="relative border-s border-gray-200 ml-3">
      {EXPERIENCES.map((experience) => (
        <li className="mb-10 ms-4" key={experience.id}>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
    </>
  );
};

export default Experience;
