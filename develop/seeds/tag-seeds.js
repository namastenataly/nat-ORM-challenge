const { Tag } = require('../models');

const tagData = [
  { tag_name: 'New Arrival' },
  { tag_name: 'Discounted' },
  { tag_name: 'Popular' },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;