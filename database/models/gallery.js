const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  id: { type: Number, unique: true },
  photos: { type: Array, required: true }
});

const GalleryModel = mongoose.model('Gallery', GallerySchema);

const findByID = (id, callback) => {
  GalleryModel.find({ id }, callback);
};

const insertOne = (room, callback) => {
  GalleryModel.create(room, callback);
};

const insertMany = (docs, callback) => {
  return GalleryModel.insertMany(docs, callback);
}

module.exports = {
  findByID,
  insertOne,
  insertMany
};