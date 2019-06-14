// only needs to be updated when a new folder
// in 'components' is created

// doesn't have to exist, but makes things easier

import * as pageComponents from './page';
import * as positionComponents from './positioning';
import * as textComponents from './text';
import * as transitionComponents from './transitions';

const thingsToExport = [
  pageComponents,
  positionComponents,
  textComponents,
  transitionComponents,
];

const exportObject = {};
thingsToExport.forEach(components => {
  for (let componentName in components) {
    exportObject[componentName] = components[componentName];
  }
});

module.exports = exportObject;
