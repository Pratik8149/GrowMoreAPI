const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const Sme = new Schema({
	name: String,
	sector: String,
	profit: String
});
/**
 * 
 * */
Sme.statics.getAll = function () {
  // Find all SMEs
  return SmeModel1.find({}).then(smes => {
		return smes;
	});
};


const SmeModel1 = mongoose.model('smeModel1', Sme, 'SMELists');
module.exports = SmeModel1;
