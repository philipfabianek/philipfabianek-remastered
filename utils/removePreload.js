const removePreload = () => {
  if (global.document) {
    window.onload = () => {
      const preload = document.getElementsByClassName('preload')[0];
      if (preload) {
        preload.classList.remove('preload');
      }
    };
  }
};

export default removePreload;
