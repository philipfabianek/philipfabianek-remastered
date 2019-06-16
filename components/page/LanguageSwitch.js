// React
import { useState } from 'react';
import PropTypes from 'prop-types';

// utils
import { getSelectedLanguage } from "../../utils/getSelectedLanguage";

const POSSIBLE_LANGUAGES = ['CZ', 'ENG'];

const LanguageSwitch = props => {
  if (!props.visible) {
    return null;
  }

  const [languageState, setLanguageState] = useState(getSelectedLanguage());
  const languageIndex = POSSIBLE_LANGUAGES.indexOf(languageState);
  const coverPosition = !languageIndex ? "left" : "right";

  const setSelectedLanguage = () => {
    if (process.browser) {
      const languageToSet = POSSIBLE_LANGUAGES[Math.abs(languageIndex - 1)];
      localStorage.setItem('language', languageToSet);
      setLanguageState(languageToSet);
    }
  };

  return (
    <button
      className="language-switch"
      onClick={setSelectedLanguage}
    >
      <div className="language-switch__language">CZ</div>
      <div className="language-switch__language">ENG</div>
      <div className={`language-switch__selected-cover language-switch__selected-cover--${coverPosition}`}></div>
    </button>
  );
};

LanguageSwitch.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default LanguageSwitch;
