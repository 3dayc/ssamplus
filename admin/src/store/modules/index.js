import camelCase from 'lodash/camelCase';

const requireModule = require.context('.', false, /\.js$/);

const modules = {};

requireModule.keys().forEach(filename => {
  // module 폴더에 index.js 제외
  const isIndexJsFile = filename === './index.js';
  if (!isIndexJsFile) {
    const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, '')); // camelCase 치환
    console.log(moduleName);
    modules[moduleName] = { namespaced: true, ...requireModule(filename) }; 
  }
});

export default modules;
