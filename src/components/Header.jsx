import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { t, i18n } = useTranslation("global");

  return (
    <header id="header" className="py-2 w-full z-[9995]">
      <div className="flex items-center justify-between xl:w-[1120px] mx-auto">
        <img
          className="rounded-full size-12 ml-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSef5Z6e4QhOChOQMKJW8Kem185gcB6yKDDRCPdI_miE0hxt7-i8NTavk1IsNVg_nxNo&usqp=CAU"
          alt="Hiroshi Adauto"
        />

        <button
          onClick={handleNav}
          data-collapse-toggle="navbar-hiro"
          type="button"
          className="items-center p-2 w-10 h-10 justify-center text-sm md:hidden hover:scale-110 transition z-[99]"
          aria-controls="navbar-hiro"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {nav ? (
          <nav
            id="navbar-hiro"
            className="fixed top-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center gap-4 text-2xl z-[95]"
          >
            <a
              onClick={handleNav}
              className="focus:scale-110 hover:scale-110 transition"
              href="#top"
            >
              {t("nav.home")}
            </a>
            <a
              onClick={handleNav}
              className="focus:scale-110 hover:scale-110 transition"
              href="#sobre-mi"
            >
              {t("nav.aboutme")}
            </a>
            <a
              onClick={handleNav}
              className="focus:scale-110 hover:scale-110 transition"
              href="#experiencia"
            >
              {t("nav.experience")}
            </a>
            <a
              onClick={handleNav}
              className="focus:scale-110 hover:scale-110 transition"
              href="#proyectos"
            >
              {t("nav.projects")}
            </a>
            <a
              onClick={handleNav}
              className="focus:scale-110 hover:scale-110 transition"
              href="#contacto"
            >
              {t("nav.contact")}
            </a>
            <div>
              <button
                onClick={() => i18n.changeLanguage("es")}
                className="focus:bg-gray-600 px-2 py-1 rounded"
              >
                <img src="/ar-icon.png" alt="argentinian flag" />
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="focus:bg-gray-600 px-2 py-1 rounded"
              >
                <img src="/usa-icon.png" alt="usa flag" />
              </button>
            </div>
          </nav>
        ) : (
          ""
        )}
        <nav
          id="navbar-hiro"
          className="hidden md:flex flex-row gap-x-10 opacity-80 mr-4 xl:mr-0 items-center"
        >
          <a className="focus:scale-110 hover:scale-110 transition" href="#top">
            {t("nav.home")}
          </a>
          <a
            className="focus:scale-110 hover:scale-110 transition"
            href="#sobre-mi"
          >
            {t("nav.aboutme")}
          </a>
          <a
            className="focus:scale-110 hover:scale-110 transition"
            href="#experiencia"
          >
            {t("nav.experience")}
          </a>
          <a
            className="focus:scale-110 hover:scale-110 transition"
            href="#proyectos"
          >
            {t("nav.projects")}
          </a>
          <a
            className="focus:scale-110 hover:scale-110 transition"
            href="#contacto"
          >
            {t("nav.contact")}
          </a>
          <div className="flex gap-x-2">
            <button
              onClick={() => i18n.changeLanguage("es")}
              className="focus:bg-gray-600 hover:bg-gray-600 px-2 py-1 rounded"
            >
              <img src="/ar-icon.png" alt="argentinian flag" />
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="focus:bg-gray-600 hover:bg-gray-600 px-2 py-1 rounded"
            >
              <img src="/usa-icon.png" alt="usa flag" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
