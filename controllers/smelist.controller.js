const Sme = require('../models/smelist.model');
/**
 * 
 * @param {any} req
 * @param {any} res
 */
module.exports.getAll = function getAll(req, res) {
    // Retrieve all SMEs    
    Sme.getAll()
        .then(function (smes) {
            // Send the results
            res.status(200).send({
              smes: smes,
               
            });
        })
        .catch((error) => {
        throw new Error(error.name + ": " + error.message);
    });
}

