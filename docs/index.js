const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const info = require('./info');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...info
};