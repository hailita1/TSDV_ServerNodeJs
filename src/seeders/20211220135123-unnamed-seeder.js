'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Results', [{
            value: '',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            value: 'OK',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            value: 'NG',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            value: 'N/A',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
