if (process.browser) {
  localStorage.setItem('selectedLanguage', undefined);
}

export const getSelectedLanguage = () => {
  if (process.browser) {
    let selectedLanguage = localStorage.getItem('language');

    if (!selectedLanguage || selectedLanguage === 'undefined') {
      const possibleLanguage = navigator.language || navigator.browserLanguage;

      if (possibleLanguage === 'cs-CZ') {
        selectedLanguage = 'CZ';
      } else {
        selectedLanguage = 'ENG';
      }

      localStorage.setItem('language', selectedLanguage);
    }

    return selectedLanguage;
  } else {
    return 'ENG';
  }
};
