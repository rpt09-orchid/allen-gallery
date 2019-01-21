const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  id: { type: Number, unique: true },
  photos: { type: Array, required: true }
});

const PropertyModel = mongoose.model('Property', PropertySchema);

const findByID = (id, callback) => {
  PropertyModel.find({ id }, callback);
};

const insertOne = (room, callback) => {
  PropertyModel.create(room, callback);
};

const insertMany = (docs, callback) => {
  PropertyModel.insertMany(docs, callback);
}

module.exports = {
  findByID,
  insertOne,
  insertMany
};