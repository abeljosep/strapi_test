'use strict';

/**
 * fund service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fund.fund');
