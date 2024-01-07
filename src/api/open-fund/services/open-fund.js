'use strict';

/**
 * open-fund service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-fund.open-fund');
