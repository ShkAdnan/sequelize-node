'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey : 'user_id'
      })

      Post.hasMany(models.Tag, {
        foreignKey : 'post_id',
        as : 'test'
      })

      Post.hasMany(models.Tag, {
        foreignKey : 'post_id',
        as : 'some'
      })
    }
  };
  Post.init({
    title: DataTypes.STRING,
    user_id : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};