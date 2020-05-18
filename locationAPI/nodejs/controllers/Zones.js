'use strict';

var utils = require('../utils/writer.js');
var Zones = require('../service/ZonesService');

module.exports.zonesByIdGetAps = function zonesByIdGetAps (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  var interestRealm = req.swagger.params['interestRealm'].value;
  Zones.zonesByIdGetAps(zoneId,interestRealm)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonesByIdGetApsById = function zonesByIdGetApsById (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  var accessPointId = req.swagger.params['accessPointId'].value;
  Zones.zonesByIdGetApsById(zoneId,accessPointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonesGet = function zonesGet (req, res, next) {
  Zones.zonesGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonesGetById = function zonesGetById (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  Zones.zonesGetById(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
