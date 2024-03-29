import ExperienceItem from "./ExperienceItem"
import ExperienceWorkIcon from "./icons/ExperienceWork"

const EXPERIENCES = [
  {
    id: 1,
    date: "Enero 2022 - Actualidad",
    title: "Frontend Developer BioSoft Online S.R.L",
    description:
      "Desarrollando el frontend sobre sistemas de autorizaciones en línea para Bioquímicos en Argentina, formando parte de un equipo de trabajo, aplicando metodologías ágiles para el proceso, desarrollo e implementación de los sistemas. Utilizando tecnologías del ecosistema Microsoft, C# y Blazor.",
    link: "",
  },
  {
    id: 2,
    date: "Octubre 2022 - Actualidad",
    title: "Developer TeteClothes",
    description:
      "Desarrollando la tienda online completa de un emprendimiento propio, utilizando en el frontend React, JS y Bootstrap. El backend es serverless, utilizando Google Firebase para almacenar los datos. Hemos mejorado la presencia en internet y aumentado las ventas desde la creación de la tienda.",
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
