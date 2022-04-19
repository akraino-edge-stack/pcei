'use strict';

var utils = require('../utils/writer.js');
var Location = require('../service/LocationService');

module.exports.apByIdGET = function apByIdGET (req, res, next, zoneId, accessPointId) {
  Location.apByIdGET(zoneId, accessPointId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apGET = function apGET (req, res, next, zoneId, interestRealm) {
  Location.apGET(zoneId, interestRealm)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.areaCircleSubDELETE = function areaCircleSubDELETE (req, res, next, subscriptionId) {
  Location.areaCircleSubDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.areaCircleSubGET = function areaCircleSubGET (req, res, next, subscriptionId) {
  Location.areaCircleSubGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.areaCircleSubListGET = function areaCircleSubListGET (req, res, next) {
  Location.areaCircleSubListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.areaCircleSubPOST = function areaCircleSubPOST (req, res, next, body) {
  Location.areaCircleSubPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.areaCircleSubPUT = function areaCircleSubPUT (req, res, next, body, subscriptionId) {
  Location.areaCircleSubPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.distanceGET = function distanceGET (req, res, next, address, requester, latitude, longitude) {
  Location.distanceGET(address, requester, latitude, longitude)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.distanceSubDELETE = function distanceSubDELETE (req, res, next, subscriptionId) {
  Location.distanceSubDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.distanceSubGET = function distanceSubGET (req, res, next, subscriptionId) {
  Location.distanceSubGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.distanceSubListGET = function distanceSubListGET (req, res, next) {
  Location.distanceSubListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.distanceSubPOST = function distanceSubPOST (req, res, next, body) {
  Location.distanceSubPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.distanceSubPUT = function distanceSubPUT (req, res, next, body, subscriptionId) {
  Location.distanceSubPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.periodicSubDELETE = function periodicSubDELETE (req, res, next, subscriptionId) {
  Location.periodicSubDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.periodicSubGET = function periodicSubGET (req, res, next, subscriptionId) {
  Location.periodicSubGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.periodicSubListGET = function periodicSubListGET (req, res, next) {
  Location.periodicSubListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.periodicSubPOST = function periodicSubPOST (req, res, next, body) {
  Location.periodicSubPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.periodicSubPUT = function periodicSubPUT (req, res, next, body, subscriptionId) {
  Location.periodicSubPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubDELETE = function userTrackingSubDELETE (req, res, next, subscriptionId) {
  Location.userTrackingSubDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubGET = function userTrackingSubGET (req, res, next, subscriptionId) {
  Location.userTrackingSubGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubListGET = function userTrackingSubListGET (req, res, next) {
  Location.userTrackingSubListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubPOST = function userTrackingSubPOST (req, res, next, body) {
  Location.userTrackingSubPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userTrackingSubPUT = function userTrackingSubPUT (req, res, next, body, subscriptionId) {
  Location.userTrackingSubPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next, zoneId, accessPointId, address) {
  Location.usersGET(zoneId, accessPointId, address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubDELETE = function zonalTrafficSubDELETE (req, res, next, subscriptionId) {
  Location.zonalTrafficSubDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubGET = function zonalTrafficSubGET (req, res, next, subscriptionId) {
  Location.zonalTrafficSubGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubListGET = function zonalTrafficSubListGET (req, res, next) {
  Location.zonalTrafficSubListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubPOST = function zonalTrafficSubPOST (req, res, next, body) {
  Location.zonalTrafficSubPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonalTrafficSubPUT = function zonalTrafficSubPUT (req, res, next, body, subscriptionId) {
  Location.zonalTrafficSubPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusSubDELETE = function zoneStatusSubDELETE (req, res, next, subscriptionId) {
  Location.zoneStatusSubDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusSubGET = function zoneStatusSubGET (req, res, next, subscriptionId) {
  Location.zoneStatusSubGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusSubListGET = function zoneStatusSubListGET (req, res, next) {
  Location.zoneStatusSubListGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusSubPOST = function zoneStatusSubPOST (req, res, next, body) {
  Location.zoneStatusSubPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zoneStatusSubPUT = function zoneStatusSubPUT (req, res, next, body, subscriptionId) {
  Location.zoneStatusSubPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonesGET = function zonesGET (req, res, next) {
  Location.zonesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.zonesGetById = function zonesGetById (req, res, next, zoneId) {
  Location.zonesGetById(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
