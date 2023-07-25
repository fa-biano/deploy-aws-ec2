'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'dogs', 
      [
        {
          name: 'Terrier Patterdale',
          imgUrl: 'https://images.dog.ceo/breeds/terrier-patterdale/dog-1268559_640.jpg'
        },
        {
          name: 'Terrier Norfolk',
          imgUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1984.jpg'
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dogs', null, {});
  }
};
