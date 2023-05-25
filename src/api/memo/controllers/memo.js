'use strict';

/**
 * memo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::memo.memo');
