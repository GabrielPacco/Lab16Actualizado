const mongoose = require('mongoose');
const { Schema } = mongoose;

const noticiaSchema = new Schema({
  title:  String,
  description: String,
  contend: String,
  url_: String,
  admin: String,
  image: String,
  tag: String,
});

const Noticia = mongoose.model('Noticia',noticiaSchema);
module.exports = Noticia;
