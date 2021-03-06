import React, { useState } from "react";

const Context = React.createContext('english');

export const LanguageStore = props => {
  const [language, setLanguage] = useState('english');

  const onLanguageChange = language => {
    setLanguage(language);
  }

  return (
    <Context.Provider value={{ language: language, onLanguageChange: onLanguageChange }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
