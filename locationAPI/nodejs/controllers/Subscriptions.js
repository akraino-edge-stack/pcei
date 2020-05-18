'use strict';

var utils = require('../utils/writer.js');
var Subscriptions = require('../service/SubscriptionsService');

module.exports.userTrackingSubDelById = function userTrackingSubDelById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  Subscriptions.userTrackingSubDelById(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubGet = function userTrackingSubGet (req, res, next) {
  Subscriptions.userTrackingSubGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubGetById = function userTrackingSubGetById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  Subscriptions.userTrackingSubGetById(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubPost = function userTrackingSubPost (req, res, next) {
  var userTrackingSubscription = req.swagger.params['userTrackingSubscription'].value;
  Subscriptions.userTrackingSubPost(userTrackingSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubPutById = function userTrackingSubPutById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  var userTrackingSubscription = req.swagger.params['userTrackingSubscription'].value;
  Subscriptions.userTrackingSubPutById(subscriptionId,userTrackingSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubDelById = function zonalTrafficSubDelById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  Subscriptions.zonalTrafficSubDelById(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubGet = function zonalTrafficSubGet (req, res, next) {
  Subscriptions.zonalTrafficSubGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubGetById = function zonalTrafficSubGetById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  Subscriptions.zonalTrafficSubGetById(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubPost = function zonalTrafficSubPost (req, res, next) {
  var zonalTrafficSubscription = req.swagger.params['zonalTrafficSubscription'].value;
  Subscriptions.zonalTrafficSubPost(zonalTrafficSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubPutById = function zonalTrafficSubPutById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  var zonalTrafficSubscription = req.swagger.params['zonalTrafficSubscription'].value;
  Subscriptions.zonalTrafficSubPutById(subscriptionId,zonalTrafficSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusDelById = function zoneStatusDelById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  Subscriptions.zoneStatusDelById(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusGet = function zoneStatusGet (req, res, next) {
  Subscriptions.zoneStatusGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusGetById = function zoneStatusGetById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  Subscriptions.zoneStatusGetById(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusPost = function zoneStatusPost (req, res, next) {
  var zoneStatusSubscription = req.swagger.params['zoneStatusSubscription'].value;
  Subscriptions.zoneStatusPost(zoneStatusSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusPutById = function zoneStatusPutById (req, res, next) {
  var subscriptionId = req.swagger.params['subscriptionId'].value;
  var zoneStatusSubscription = req.swagger.params['zoneStatusSubscription'].value;
  Subscriptions.zoneStatusPutById(subscriptionId,zoneStatusSubscription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
