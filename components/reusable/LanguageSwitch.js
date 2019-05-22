// React
import { useState } from 'react';
import PropTypes from 'prop-types';

const LanguageSwitch = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const coverPosition = !selectedLanguage ? "left" : "right";

  return (
    <button
      className="language-switch"
      onClick={() => setSelectedLanguage(Math.abs(selectedLanguage - 1))}
    >
      <div className="language-switch__language">CZE</div>
      <div className="language-switch__language">ENG</div>
      <div className={`language-switch__selected-cover language-switch__selected-cover--${coverPosition}`}></div>
    </button>
  );
};

LanguageSwitch.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default LanguageSwitch;
