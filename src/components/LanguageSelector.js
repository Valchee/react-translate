import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const contextType = useContext(LanguageContext);

  return(
    <div>
      Select a language:
      <i onClick={() => contextType.onLanguageChange('english')} className="flag us" />
      <i onClick={() => contextType.onLanguageChange('polish')} className="flag pl" />
    </div>
  );
}

export default LanguageSelector
