// only needs to be updated when a new folder
// in 'components' is created

// doesn't have to exist, but makes things easier

const folderNames = [
  'page',
  'positioning',
  'text',
  'transitions',
];

const exportObject = {};
folderNames.forEach(folderName => {
  const module = require(`./${folderName}`);

  for (let componentName in module) {
    exportObject[componentName] = module[componentName];
  };
});

module.exports = exportObject;
