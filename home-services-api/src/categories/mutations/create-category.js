const { categories } = require('../mocks/mock-categories');

function createCategory(req, res) {
  const newId = categories.length + 1;
  categories.push({ id: newId, name: req.body.name });

  res.json({
    success: true,
    message: 'Category added successfully',
    categoryId: newId
  })
}

module.exports = {
  createCategory
}