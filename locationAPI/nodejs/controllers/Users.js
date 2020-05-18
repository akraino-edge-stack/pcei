'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.usersGet = function usersGet (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  var accessPointId = req.swagger.params['accessPointId'].value;
  Users.usersGet(zoneId,accessPointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGetById = function usersGetById (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Users.usersGetById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
