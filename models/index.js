'use strict'
const tvShow = require('./tvShow') //require the model

async function init() {
    await tvShow.sync(); // sync the model
    // also sync any extra models here
};

init();

module.exports = {
    tvShow, // export the model
    // also export any extra models here
};