'use strict'
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = {}
console.log(config)
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config)
}
console.log('Past If')
fs
  .readdirSync(__dirname)
  .filter(function (file) {
    if (file === 'Vote.js') {
      return false
    }
    console.log(file)
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function (file) {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
console.log('After fs')
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})
console.log(sequelize)
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
