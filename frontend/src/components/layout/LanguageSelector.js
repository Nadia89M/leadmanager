
import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    return (
        <div class="language">
            <span className={i18n.language == "it" ? "current-language" : ""} onClick={() => i18n.changeLanguage('it')}>IT</span> | <span className={i18n.language == "en" ? "current-language" : ""} onClick={() => i18n.changeLanguage('en')}>EN</span>
        </div>
    )
}

export default LanguageSelector