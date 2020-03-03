module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    // The email cannot be null, and must be a proper email before creation
    meal: {
      type: DataTypes.STRING,
      allowNull: false
    }

  })
  return Post
}
