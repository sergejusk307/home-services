const { categories } = require('../mocks/mock-categories');

function getCategories(req, res) {
  res.json(categories);
}

module.exports = {
  getCategories
}