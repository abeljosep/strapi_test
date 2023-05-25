'use strict';

/**
 * frequent-asked service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frequent-asked.frequent-asked');
