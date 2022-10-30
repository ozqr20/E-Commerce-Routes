// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'item_id'
});

Category.hasMany(Product, {
  foreignKey: 'item_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'item_id',
  as: 'product_tag'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'item_id',
  as: 'tag_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
