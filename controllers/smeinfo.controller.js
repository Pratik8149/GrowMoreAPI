const SmeInfo = require('../models/smeinfo.model');

/**
 * 
 * @param {any} req
 * @param {any} res
 */
module.exports.getByName = function getByName(req, res) {
  console.log();
  SmeInfo.getByName(req.params.name)
    .then(function (smeinfo) {
      // Send the results
      res.status(200).send({
        error: false,
        smeinfo: smeinfo
      });
    })
    .catch((error) => {
      throw new Error(error.name + ": " + error.message);
    });
}

