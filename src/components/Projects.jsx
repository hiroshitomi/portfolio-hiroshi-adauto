import HtmlIcon from "./icons/Html"
import Css3Icon from "./icons/Css3";
import JsIcon from "./icons/Js";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/Tailwind";
import CodeIcon from "./icons/Code";

const TAGS = {
    HTML: {
        name: "HTML5",
        class: "bg-orange-200 text-white",
        icon: HtmlIcon
    },
    CSS: {
        name: "CSS3",
        class: "bg-blue-200 text-white",
        icon: Css3Icon
    },
    JS: {
        name: "JavaScript",
        class: "bg-yellow-200 text-black",
        icon: JsIcon
    },
    REACT: {
        name: "React",
        class: "bg-blue-200 text-white",
        icon: ReactIcon
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-white text-[#73bcf6]",
        icon: TailwindIcon
    }
}

const PROJECTS = [
    {
        id: 1,
        title: "Landing page Escuela Miyazato",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae eos animi corrupti similique itaque, sed totam possimus alias architecto quas. Natus, reprehenderit! Voluptatum porro itaque nesciunt, aliquid debitis maiores!",
        link: "https://hiroshitomi.github.io/karate-do-miyazato/",
        github: "https://hiroshitomi.github.io/karate-do-miyazato/",
        image: "/miyazatodojo.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JS]
    },
    {
        id: 2,
        title: "Landing page TESLA - clon",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae eos animi corrupti similique itaque, sed totam possimus alias architecto quas. Natus, reprehenderit! Voluptatum porro itaque nesciunt, aliquid debitis maiores!",
        link: "https://tesla-landing-teal.vercel.app/",
        github: "https://github.com/hiroshitomi/tesla-landing",
        image: "/teslalanding.webp",
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.JS]
    },
    {
        id: 3,
        title: "TeteClothes - Tienda online",
        description: "Diseño y desarrollo de la tienda online de un emprendimiento personal para captar mayor clientes a traves de internet y agregar valor al emprendimiento",
        link: "https://teteclothes.vercel.app/",
        github: "https://github.com/hiroshitomi/TeteClothes",
        image: "/teteclothes.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.REACT , TAGS.JS]
    }
]

const Projects = () => {
  return (
    <>
    <h2 className="text-3xl font-semibold flex items-center gap-x-3">
				<CodeIcon class="size-8"/>
				Proyectos
			</h2>
    {        
    PROJECTS.map(({id, title, description, tags, image, link}) =>(
        <article className="py-16" key={id}>
            <h3 className="text-2xl font-semibold text-purple-200/90 mb-2">{title}</h3>
            <p className="text-lg mb-4 text-pretty">{description}</p>
            <ul className="flex flex-wrap gap-3 my-4">
                {
                    tags.map(tag => (
                        <li key={tag.name} className="flex items-center rounded-full text-xs gap-x-2 border border-white/20 py-2 px-3 hover:scale-110 transition hover:bg-white/25 cursor-default">
                            <tag.icon className="size-4"/> {tag.name}
                        </li>
                    ))
                }
            </ul>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded group hover:bg-gradient-to-r from-gray-200/10 to-purple-800">
                <img src={image} alt={`Captura de pantalla del proyecto ${title}`}
                className="rounded shadow-2xl shadow-white/20 group-hover:opacity-10"/>
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-wider text-center mb-3">
                        {title}
                    </h3>
                    <a href={link}>
                        <p className="text-center p-1 md:p-3 mx-auto rounded-lg sm:w-1/2 bg-white text-gray-700 font-bold cursor-pointer text-md hover:bg-gray-400 duration-200 hover:text-white">Explorar</p>
                    </a>
                </div>
            </div>
        </article>
    ))}
    </>
  )
}

export default Projects