import { createContext, useState } from "react";

export const TranslationContext = createContext();

const tValue = localStorage.getItem("translation");

export const TranslationContextProvider = ({ children }) => {
    const [language, setLanguage] = useState(tValue ?? "en");

    const changeLanguageHandler = (newLanguage) => {
        localStorage.setItem("translation", newLanguage);
        setLanguage(newLanguage);
    };

    return <TranslationContext.Provider value={{ language, changeLanguageHandler }}>
        {children}
    </TranslationContext.Provider>;
};