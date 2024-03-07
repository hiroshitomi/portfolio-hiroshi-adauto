import AboutIcon from "./icons/About";
import { useTranslation } from "react-i18next"

const AboutMe = () => {
  const {t} = useTranslation("global")

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-x-3">
        <AboutIcon className="size-10" />
        {t("section.aboutme.title")}
      </h2>
      <h2 className="text-md md:text-2xl lg:text-3xl opacity-80 text-wrap">
        {t("section.aboutme.constant")}{" "}
        <span className="text-purple-300 font-semibold">
          <strong>{t("section.aboutme.kaizen")}</strong>
          <em> {t("section.aboutme.meaning")}</em>
        </span>{" "}
        <ul className="pt-5">
          <li>
            <span className="text-purple-300 font-semibold">{t("section.aboutme.preparedto")}</span> {t("section.aboutme.preparedphrase")}
          </li>
          <li>
            <span className="text-purple-300 font-semibold">{t("section.aboutme.trainedto")}</span> {t("section.aboutme.trainedphrase")}
          </li>
          <li>{t("section.aboutme.adaptphrase")} <span className="text-purple-300 font-semibold">{t("section.aboutme.adapt")}</span></li>
        </ul>
      </h2>
    </div>
  );
};

export default AboutMe;
