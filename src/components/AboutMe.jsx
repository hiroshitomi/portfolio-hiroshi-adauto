import AboutIcon from "./icons/About";

const AboutMe = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-x-3">
        <AboutIcon className="size-10" />
        Sobre mí
      </h2>
      <h2 className="text-md md:text-2xl lg:text-3xl opacity-80 text-wrap">
        En constante aprendizaje aplicando la filosofía{" "}
        <span className="text-purple-300 font-semibold">
          <strong>Kaizen</strong>
          <em> (pensamiento japonés de mejora continua).</em>
        </span>{" "}
        <ul className="pt-5">
          <li><span className="text-purple-300 font-semibold">Preparado</span> para resolver problemas.</li>
          <li>
            <span className="text-purple-300 font-semibold">Capacitado</span> para trabajar de forma independiente y colaborativa.
          </li>
          <li>Gran <span className="text-purple-300 font-semibold">adaptabilidad.</span></li>
        </ul>
      </h2>
    </div>
  );
};

export default AboutMe;
