'use strict';

/**
 * invest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invest.invest');
