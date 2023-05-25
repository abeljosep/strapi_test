'use strict';

/**
 * squad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::squad.squad');
