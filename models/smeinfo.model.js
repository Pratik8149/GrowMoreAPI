const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const Smeinfo = new Schema({
  name: String,
  sector: String,
  contact: Number,
  email: String,
  address: String,
  description: String
});
/**
 * 
 * @param id
 */
Smeinfo.statics.getByName = async function (name) {
  const sme = await SmeModel.findOne({
    name: name
  });
  return sme;
}

const SmeModel = mongoose.model('smeModel', Smeinfo, 'SMEinfo');
module.exports = SmeModel;
