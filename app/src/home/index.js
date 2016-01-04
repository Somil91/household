/**
 * Module : 'home'
 */


// Libs
const angular = require('angular');
const uiRouter = require('angular-ui-router');

// Services
//const hileServices = require('./datasync/get_all_products.service');
const allServices = require('../datasync/').name;

console.log("all services =" + allServices);

// Module and Controllers
const homeHileModule = angular.module('home', [uiRouter,allServices]);
const homerouting = require('./home.routes.js')(homeHileModule);
const homeController = require('./home.controller');


//Module Attachments
homeHileModule.config(homerouting);
homeHileModule.controller('HomeController' ,homeController);


export default homeHileModule;

