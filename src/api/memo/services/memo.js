'use strict';

/**
 * memo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memo.memo');
