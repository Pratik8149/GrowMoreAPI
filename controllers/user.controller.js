const User = require('../models/user.model');
/**
 * 
 * @param {any} req
 * @param {any} res
 */
module.exports.getAll = function getAll(req, res) {
    // Retrieve all users    
    User.getAll()
        .then(function (users) {
            // Send the results
            res.status(200).send({
                error: false,
                users: users
            });
        })
        .catch((error) => {
        throw new Error(error.name + ": " + error.message);
    });
}
/**
 * 
 * @param {any} req
 * @param {any} res
 */
module.exports.createUser = function createUser(req, res) {
    // Retrieve all users    
    User.createUser(req.body.user)
        .then(function (user) {
            // Send the results
            res.status(200).send({
                error: false,
                createdUser: user
            });
        })
        .catch((error) => {
            throw new Error(error.name + ": " + error.message);
        });
}
/**
 * 
 * @param {any} req
 * @param {any} res
 */
module.exports.getByEmail = function getByEmail(req, res) {
    // Retrieve all users    
    User.getByEmail(req.params.email)
        .then(function (user) {
            // Send the results
            res.status(200).send({
                error: false,
                user: user
            });
        })
        .catch((error) => {
            throw new Error(error.name + ": " + error.message);
        });
}
