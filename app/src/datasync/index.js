/**
 * Module : 'servicesHileModule'
 */


// Libs
const angular = require('angular');

// Services .js
//const getAllProductsService = require('./get_all_products.service.js');
const searchQueryService = require('./searchQuery.service.js');
console.log("services = +" + searchQueryService);

// Module
const servicesHileModule = angular.module('hileServices', []);

//Services attachement
servicesHileModule.service('searchQueryService',searchQueryService);
//servicesHileModule.service('getAllProductsService',getAllProductsService);

export default servicesHileModule;

