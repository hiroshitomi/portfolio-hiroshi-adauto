import SocialPill from "./SocialPill"
import Badge from "./Badge"
import LinkedInIcon from "./icons/LinkedIn"
import GitHubIcon from "./icons/GitHub"
import MailIcon from "./icons/Mail"
import { useTranslation } from "react-i18next"

const Presentation = () => {
    const {t} = useTranslation("global")

  return (
    <>
    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col gap-y-3 md:flex-row md:gap-x-4 pb-4">{t("header.title")} 
        <a className="flex items-center text-nowrap"
            href="https://www.linkedin.com/in/hiroshidev/"
            target="_blank"
            rel="noopener noreferrer">
            <Badge>{t("header.badge")}</Badge> 
        </a>
    </h1>
        <h2 className="text-md md:text-2xl lg:text-3xl opacity-80 text-wrap">
            <span className="text-bold">{t("header.yoe")} </span>
            <span className="text-purple-300 font-semibold">{t("header.webdev")} </span>
            <span>{t("header.fromto")} </span>
            <span className="opacity-80">{t("header.special")}</span>
        </h2>
        <nav className="flex gap-4 mt-8 flex-wrap">
            <SocialPill href="https://www.linkedin.com/in/hiroshidev/">
                    <LinkedInIcon className="size-4 lg:size-6"/>
                    LinkedIn
            </SocialPill>
            <SocialPill href="https://github.com/hiroshitomi">
                    <GitHubIcon className="size-4 lg:size-6"/>
                    GitHub
            </SocialPill>
            <SocialPill href="mailto:hiroshi.tomioka95@gmail.com">
                <MailIcon className="size-4 lg:size-6"/>
                hiroshi.tomioka95@gmail.com
            </SocialPill>
        </nav>
    </>
  )
}

export default Presentation