import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ua" : "en"

    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-md px-3 py-1 text-sm"
    >
      {i18n.language.toUpperCase()}
    </button>
  )
}