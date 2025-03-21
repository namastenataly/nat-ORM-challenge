const { Category } = require('../models');

const categoryData = [
  { category_name: 'Electronics' },
  { category_name: 'Furniture' },
  { category_name: 'Clothing' },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;