'use strict';


/**
 * Radio Node Location Lookup
 * Radio Node Location Lookup to retrieve a radio node associated to a zone.
 *
 * zoneId String Indentifier of zone
 * accessPointId String Identifier of access Point
 * returns inline_response_200_5
 **/
exports.apByIdGET = function(zoneId,accessPointId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessPointInfo" : {
    "locationInfo" : {
      "altitude" : 5.962134,
      "orientationMajorAxis" : 4,
      "shape" : 7,
      "confidence" : 5,
      "latitude" : [ 9.301444, 9.301444 ],
      "offsetAngle" : 2,
      "accuracy" : 0,
      "includedAngle" : 2,
      "velocity" : {
        "verticalUncertainty" : 4,
        "horizontalSpeed" : 1,
        "bearing" : 1,
        "uncertainty" : 6,
        "verticalSpeed" : 1,
        "velocityType" : 7
      },
      "accuracySemiMinor" : 1,
      "innerRadius" : 7,
      "accuracyAltitude" : 6,
      "uncertaintyRadius" : 1,
      "longitude" : [ 3.6160767, 3.6160767 ],
      "timestamp" : {
        "seconds" : 5,
        "nanoSeconds" : 1
      }
    },
    "operationStatus" : "Serviceable",
    "resourceURL" : "resourceURL",
    "numberOfUsers" : 0,
    "timezone" : "timezone",
    "accessPointId" : "accessPointId",
    "interestRealm" : "interestRealm",
    "connectionType" : "Femto"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Radio Node Location Lookup
 * Radio Node Location Lookup to retrieve a list of radio nodes associated to a zone.
 *
 * zoneId String Indentifier of zone
 * interestRealm String Interest realm of access point (e.g. geographical area, a type of industry etc.). (optional)
 * returns inline_response_200_4
 **/
exports.apGET = function(zoneId,interestRealm) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessPointList" : {
    "resourceURL" : "resourceURL",
    "zoneId" : "zoneId",
    "accessPoint" : [ {
      "locationInfo" : {
        "altitude" : 5.962134,
        "orientationMajorAxis" : 4,
        "shape" : 7,
        "confidence" : 5,
        "latitude" : [ 9.301444, 9.301444 ],
        "offsetAngle" : 2,
        "accuracy" : 0,
        "includedAngle" : 2,
        "velocity" : {
          "verticalUncertainty" : 4,
          "horizontalSpeed" : 1,
          "bearing" : 1,
          "uncertainty" : 6,
          "verticalSpeed" : 1,
          "velocityType" : 7
        },
        "accuracySemiMinor" : 1,
        "innerRadius" : 7,
        "accuracyAltitude" : 6,
        "uncertaintyRadius" : 1,
        "longitude" : [ 3.6160767, 3.6160767 ],
        "timestamp" : {
          "seconds" : 5,
          "nanoSeconds" : 1
        }
      },
      "operationStatus" : "Serviceable",
      "resourceURL" : "resourceURL",
      "numberOfUsers" : 0,
      "timezone" : "timezone",
      "accessPointId" : "accessPointId",
      "interestRealm" : "interestRealm",
      "connectionType" : "Femto"
    }, {
      "locationInfo" : {
        "altitude" : 5.962134,
        "orientationMajorAxis" : 4,
        "shape" : 7,
        "confidence" : 5,
        "latitude" : [ 9.301444, 9.301444 ],
        "offsetAngle" : 2,
        "accuracy" : 0,
        "includedAngle" : 2,
        "velocity" : {
          "verticalUncertainty" : 4,
          "horizontalSpeed" : 1,
          "bearing" : 1,
          "uncertainty" : 6,
          "verticalSpeed" : 1,
          "velocityType" : 7
        },
        "accuracySemiMinor" : 1,
        "innerRadius" : 7,
        "accuracyAltitude" : 6,
        "uncertaintyRadius" : 1,
        "longitude" : [ 3.6160767, 3.6160767 ],
        "timestamp" : {
          "seconds" : 5,
          "nanoSeconds" : 1
        }
      },
      "operationStatus" : "Serviceable",
      "resourceURL" : "resourceURL",
      "numberOfUsers" : 0,
      "timezone" : "timezone",
      "accessPointId" : "accessPointId",
      "interestRealm" : "interestRealm",
      "connectionType" : "Femto"
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a subscription
 * Method to delete a subscription.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * no response value expected for this operation
 **/
exports.areaCircleSubDELETE = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve subscription information
 * Get subscription information.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns inline_response_200_7
 **/
exports.areaCircleSubGET = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "circleNotificationSubscription" : {
    "requester" : "requester",
    "trackingAccuracy" : 7.0614014,
    "address" : [ "address", "address" ],
    "callbackReference" : {
      "notificationFormat" : "XML",
      "callbackData" : "callbackData",
      "notifyURL" : "notifyURL"
    },
    "latitude" : 5.962134,
    "count" : 0,
    "link" : [ {
      "rel" : "rel",
      "href" : "href"
    }, {
      "rel" : "rel",
      "href" : "href"
    } ],
    "frequency" : 1,
    "duration" : 6,
    "enteringLeavingCriteria" : "Entering",
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "checkImmediate" : true,
    "radius" : 2.302136,
    "longitude" : 5.637377
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all active subscriptions to area change notifications
 * This operation is used for retrieving all active subscriptions to area change notifications.
 *
 * returns inline_response_200_6
 **/
exports.areaCircleSubListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "distanceNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    } ],
    "circleNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    } ],
    "resourceURL" : "http://example.com/aeiou",
    "userTrackingSubscription" : [ {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    }, {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    } ],
    "zonalTrafficSubscription" : [ {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    }, {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    } ],
    "zoneStatusSubscription" : [ {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    }, {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    } ],
    "periodicNotificationSubscription" : [ {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    }, {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a subscription for area change notification
 * Creates a subscription to the Location Service for an area change notification.
 *
 * body Area_circle_body Subscription to be created
 * returns area_circle_body
 **/
exports.areaCircleSubPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "circleNotificationSubscription" : {
    "requester" : "requester",
    "trackingAccuracy" : 7.0614014,
    "address" : [ "address", "address" ],
    "callbackReference" : {
      "notificationFormat" : "XML",
      "callbackData" : "callbackData",
      "notifyURL" : "notifyURL"
    },
    "latitude" : 5.962134,
    "count" : 0,
    "link" : [ {
      "rel" : "rel",
      "href" : "href"
    }, {
      "rel" : "rel",
      "href" : "href"
    } ],
    "frequency" : 1,
    "duration" : 6,
    "enteringLeavingCriteria" : "Entering",
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "checkImmediate" : true,
    "radius" : 2.302136,
    "longitude" : 5.637377
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a subscription information
 * Updates a subscription.
 *
 * body Circle_subscriptionId_body Subscription to be modified
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns circle_subscriptionId_body
 **/
exports.areaCircleSubPUT = function(body,subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "circleNotificationSubscription" : {
    "requester" : "requester",
    "trackingAccuracy" : 7.0614014,
    "address" : [ "address", "address" ],
    "callbackReference" : {
      "notificationFormat" : "XML",
      "callbackData" : "callbackData",
      "notifyURL" : "notifyURL"
    },
    "latitude" : 5.962134,
    "count" : 0,
    "link" : [ {
      "rel" : "rel",
      "href" : "href"
    }, {
      "rel" : "rel",
      "href" : "href"
    } ],
    "frequency" : 1,
    "duration" : 6,
    "enteringLeavingCriteria" : "Entering",
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "checkImmediate" : true,
    "radius" : 2.302136,
    "longitude" : 5.637377
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * UE Distance Lookup of a specific UE
 * UE Distance Lookup between terminals or a terminal and a location
 *
 * address List address of users (e.g. \"sip\" URI, \"tel\" URI, \"acr\" URI)
 * requester String Entity that is requesting the information (optional)
 * latitude Float Latitude geo position (optional)
 * longitude Float Longitude geo position (optional)
 * returns inline_response_200
 **/
exports.distanceGET = function(address,requester,latitude,longitude) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "terminalDistance" : {
    "distance" : 6,
    "accuracy" : 0,
    "timestamp" : {
      "seconds" : 5,
      "nanoSeconds" : 1
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a subscription
 * Method to delete a subscription.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * no response value expected for this operation
 **/
exports.distanceSubDELETE = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve subscription information
 * Get subscription information.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns inline_response_200_8
 **/
exports.distanceSubGET = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "distanceNotificationSubscription" : {
    "requester" : "requester",
    "trackingAccuracy" : 7.386282,
    "distance" : 3.6160767,
    "criteria" : "AllWithinDistance",
    "count" : 9,
    "link" : [ null, null ],
    "frequency" : 4,
    "duration" : 2,
    "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
    "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "checkImmediate" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all active subscriptions to distance change notifications
 * This operation is used for retrieving all active subscriptions to a distance change notifications.
 *
 * returns inline_response_200_6
 **/
exports.distanceSubListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "distanceNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    } ],
    "circleNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    } ],
    "resourceURL" : "http://example.com/aeiou",
    "userTrackingSubscription" : [ {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    }, {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    } ],
    "zonalTrafficSubscription" : [ {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    }, {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    } ],
    "zoneStatusSubscription" : [ {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    }, {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    } ],
    "periodicNotificationSubscription" : [ {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    }, {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a subscription for distance change notification
 * Creates a subscription to the Location Service for a distance change notification.
 *
 * body Subscriptions_distance_body Subscription to be created
 * returns subscriptions_distance_body
 **/
exports.distanceSubPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "distanceNotificationSubscription" : {
    "requester" : "requester",
    "trackingAccuracy" : 7.386282,
    "distance" : 3.6160767,
    "criteria" : "AllWithinDistance",
    "count" : 9,
    "link" : [ null, null ],
    "frequency" : 4,
    "duration" : 2,
    "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
    "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "checkImmediate" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a subscription information
 * Updates a subscription.
 *
 * body Distance_subscriptionId_body Subscription to be modified
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns distance_subscriptionId_body
 **/
exports.distanceSubPUT = function(body,subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "distanceNotificationSubscription" : {
    "requester" : "requester",
    "trackingAccuracy" : 7.386282,
    "distance" : 3.6160767,
    "criteria" : "AllWithinDistance",
    "count" : 9,
    "link" : [ null, null ],
    "frequency" : 4,
    "duration" : 2,
    "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
    "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "checkImmediate" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a subscription
 * Method to delete a subscription.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * no response value expected for this operation
 **/
exports.periodicSubDELETE = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve subscription information
 * Get subscription information.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns inline_response_200_9
 **/
exports.periodicSubGET = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "periodicNotificationSubscription" : {
    "duration" : 1,
    "requester" : "requester",
    "address" : [ "address", "address" ],
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "link" : [ null, null ],
    "frequency" : 1,
    "requestedAccuracy" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all active subscriptions to periodic notifications
 * This operation is used for retrieving all active subscriptions to periodic notifications.
 *
 * returns inline_response_200_6
 **/
exports.periodicSubListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "distanceNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    } ],
    "circleNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    } ],
    "resourceURL" : "http://example.com/aeiou",
    "userTrackingSubscription" : [ {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    }, {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    } ],
    "zonalTrafficSubscription" : [ {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    }, {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    } ],
    "zoneStatusSubscription" : [ {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    }, {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    } ],
    "periodicNotificationSubscription" : [ {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    }, {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a subscription for periodic notification
 * Creates a subscription to the Location Service for a periodic notification.
 *
 * body Subscriptions_periodic_body Subscription to be created
 * returns subscriptions_periodic_body
 **/
exports.periodicSubPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "periodicNotificationSubscription" : {
    "duration" : 1,
    "requester" : "requester",
    "address" : [ "address", "address" ],
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "link" : [ null, null ],
    "frequency" : 1,
    "requestedAccuracy" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a subscription information
 * Updates a subscription.
 *
 * body Periodic_subscriptionId_body Subscription to be modified
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns periodic_subscriptionId_body
 **/
exports.periodicSubPUT = function(body,subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "periodicNotificationSubscription" : {
    "duration" : 1,
    "requester" : "requester",
    "address" : [ "address", "address" ],
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "link" : [ null, null ],
    "frequency" : 1,
    "requestedAccuracy" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a subscription
 * Method to delete a subscription.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * no response value expected for this operation
 **/
exports.userTrackingSubDELETE = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve subscription information
 * Get subscription information.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns inline_response_200_10
 **/
exports.userTrackingSubGET = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userTrackingSubscription" : {
    "address" : "address",
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "userEventCriteria" : [ "Entering", "Entering" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all active subscriptions to user tracking notifications
 * This operation is used for retrieving all active subscriptions to user tracking notifications.
 *
 * returns inline_response_200_6
 **/
exports.userTrackingSubListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "distanceNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    } ],
    "circleNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    } ],
    "resourceURL" : "http://example.com/aeiou",
    "userTrackingSubscription" : [ {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    }, {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    } ],
    "zonalTrafficSubscription" : [ {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    }, {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    } ],
    "zoneStatusSubscription" : [ {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    }, {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    } ],
    "periodicNotificationSubscription" : [ {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    }, {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a subscription for user tracking notification
 * Creates a subscription to the Location Service for user tracking change notification.
 *
 * body Subscriptions_userTracking_body Subscription to be created
 * returns subscriptions_userTracking_body
 **/
exports.userTrackingSubPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userTrackingSubscription" : {
    "address" : "address",
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "userEventCriteria" : [ "Entering", "Entering" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a subscription information
 * Updates a subscription.
 *
 * body UserTracking_subscriptionId_body Subscription to be modified
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns userTracking_subscriptionId_body
 **/
exports.userTrackingSubPUT = function(body,subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userTrackingSubscription" : {
    "address" : "address",
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "userEventCriteria" : [ "Entering", "Entering" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * UE Location Lookup of a specific UE or group of UEs
 * UE Location Lookup of a specific UE or group of UEs
 *
 * zoneId List Identifier of zone (optional)
 * accessPointId List Identifier of access point (optional)
 * address List address of users (e.g. \"sip\" URI, \"tel\" URI, \"acr\" URI) (optional)
 * returns inline_response_200_1
 **/
exports.usersGET = function(zoneId,accessPointId,address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userList" : {
    "resourceURL" : "resourceURL",
    "user" : [ {
      "locationInfo" : {
        "altitude" : 5.962134,
        "orientationMajorAxis" : 4,
        "shape" : 7,
        "confidence" : 5,
        "latitude" : [ 9.301444, 9.301444 ],
        "offsetAngle" : 2,
        "accuracy" : 0,
        "includedAngle" : 2,
        "velocity" : {
          "verticalUncertainty" : 4,
          "horizontalSpeed" : 1,
          "bearing" : 1,
          "uncertainty" : 6,
          "verticalSpeed" : 1,
          "velocityType" : 7
        },
        "accuracySemiMinor" : 1,
        "innerRadius" : 7,
        "accuracyAltitude" : 6,
        "uncertaintyRadius" : 1,
        "longitude" : [ 3.6160767, 3.6160767 ],
        "timestamp" : {
          "seconds" : 5,
          "nanoSeconds" : 1
        }
      },
      "address" : "http://example.com/aeiou",
      "resourceURL" : "resourceURL",
      "accessPointId" : "accessPointId",
      "zoneId" : "zoneId",
      "ancillaryInfo" : "ancillaryInfo",
      "contextLocationInfo" : "contextLocationInfo"
    }, {
      "locationInfo" : {
        "altitude" : 5.962134,
        "orientationMajorAxis" : 4,
        "shape" : 7,
        "confidence" : 5,
        "latitude" : [ 9.301444, 9.301444 ],
        "offsetAngle" : 2,
        "accuracy" : 0,
        "includedAngle" : 2,
        "velocity" : {
          "verticalUncertainty" : 4,
          "horizontalSpeed" : 1,
          "bearing" : 1,
          "uncertainty" : 6,
          "verticalSpeed" : 1,
          "velocityType" : 7
        },
        "accuracySemiMinor" : 1,
        "innerRadius" : 7,
        "accuracyAltitude" : 6,
        "uncertaintyRadius" : 1,
        "longitude" : [ 3.6160767, 3.6160767 ],
        "timestamp" : {
          "seconds" : 5,
          "nanoSeconds" : 1
        }
      },
      "address" : "http://example.com/aeiou",
      "resourceURL" : "resourceURL",
      "accessPointId" : "accessPointId",
      "zoneId" : "zoneId",
      "ancillaryInfo" : "ancillaryInfo",
      "contextLocationInfo" : "contextLocationInfo"
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a subscription
 * Method to delete a subscription.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * no response value expected for this operation
 **/
exports.zonalTrafficSubDELETE = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve subscription information
 * Get subscription information.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns inline_response_200_11
 **/
exports.zonalTrafficSubGET = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zonalTrafficSubscription" : {
    "duration" : 6,
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "zoneId" : "zoneId",
    "interestRealm" : [ "interestRealm", "interestRealm" ],
    "userEventCriteria" : [ null, null ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all active subscriptions to zonal traffic notifications
 * This operation is used for retrieving all active subscriptions to zonal traffic change notifications.
 *
 * returns inline_response_200_6
 **/
exports.zonalTrafficSubListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "distanceNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    } ],
    "circleNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    } ],
    "resourceURL" : "http://example.com/aeiou",
    "userTrackingSubscription" : [ {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    }, {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    } ],
    "zonalTrafficSubscription" : [ {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    }, {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    } ],
    "zoneStatusSubscription" : [ {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    }, {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    } ],
    "periodicNotificationSubscription" : [ {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    }, {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a subscription for zonal traffic notification
 * Creates a subscription to the Location Service for zonal traffic change notification.
 *
 * body Subscriptions_zonalTraffic_body Subscription to be created
 * returns subscriptions_zonalTraffic_body
 **/
exports.zonalTrafficSubPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zonalTrafficSubscription" : {
    "duration" : 6,
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "zoneId" : "zoneId",
    "interestRealm" : [ "interestRealm", "interestRealm" ],
    "userEventCriteria" : [ null, null ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a subscription information
 * Updates a subscription.
 *
 * body ZonalTraffic_subscriptionId_body Subscription to be modified
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns zonalTraffic_subscriptionId_body
 **/
exports.zonalTrafficSubPUT = function(body,subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zonalTrafficSubscription" : {
    "duration" : 6,
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "zoneId" : "zoneId",
    "interestRealm" : [ "interestRealm", "interestRealm" ],
    "userEventCriteria" : [ null, null ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cancel a subscription
 * Method to delete a subscription.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * no response value expected for this operation
 **/
exports.zoneStatusSubDELETE = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve subscription information
 * Get subscription information.
 *
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns inline_response_200_12
 **/
exports.zoneStatusSubGET = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatusSubscription" : {
    "operationStatus" : [ "Serviceable", "Serviceable" ],
    "numberOfUsersAPThreshold" : 7,
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "zoneId" : "zoneId",
    "numberOfUsersZoneThreshold" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all active subscriptions to zone status notifications
 * This operation is used for retrieving all active subscriptions to zone status change notifications.
 *
 * returns inline_response_200_6
 **/
exports.zoneStatusSubListGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "distanceNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.386282,
      "distance" : 3.6160767,
      "criteria" : "AllWithinDistance",
      "count" : 9,
      "link" : [ null, null ],
      "frequency" : 4,
      "duration" : 2,
      "monitoredAddress" : [ "monitoredAddress", "monitoredAddress" ],
      "referenceAddress" : [ "referenceAddress", "referenceAddress" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true
    } ],
    "circleNotificationSubscription" : [ {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    }, {
      "requester" : "requester",
      "trackingAccuracy" : 7.0614014,
      "address" : [ "address", "address" ],
      "callbackReference" : {
        "notificationFormat" : "XML",
        "callbackData" : "callbackData",
        "notifyURL" : "notifyURL"
      },
      "latitude" : 5.962134,
      "count" : 0,
      "link" : [ {
        "rel" : "rel",
        "href" : "href"
      }, {
        "rel" : "rel",
        "href" : "href"
      } ],
      "frequency" : 1,
      "duration" : 6,
      "enteringLeavingCriteria" : "Entering",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "checkImmediate" : true,
      "radius" : 2.302136,
      "longitude" : 5.637377
    } ],
    "resourceURL" : "http://example.com/aeiou",
    "userTrackingSubscription" : [ {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    }, {
      "address" : "address",
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "userEventCriteria" : [ "Entering", "Entering" ]
    } ],
    "zonalTrafficSubscription" : [ {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    }, {
      "duration" : 6,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "interestRealm" : [ "interestRealm", "interestRealm" ],
      "userEventCriteria" : [ null, null ]
    } ],
    "zoneStatusSubscription" : [ {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    }, {
      "operationStatus" : [ "Serviceable", "Serviceable" ],
      "numberOfUsersAPThreshold" : 7,
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "zoneId" : "zoneId",
      "numberOfUsersZoneThreshold" : 1
    } ],
    "periodicNotificationSubscription" : [ {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    }, {
      "duration" : 1,
      "requester" : "requester",
      "address" : [ "address", "address" ],
      "resourceURL" : "resourceURL",
      "clientCorrelator" : "clientCorrelator",
      "link" : [ null, null ],
      "frequency" : 1,
      "requestedAccuracy" : 1
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a subscription for zone status notification
 * Creates a subscription to the Location Service for zone status change notification.
 *
 * body Subscriptions_zoneStatus_body Subscription to be created
 * returns subscriptions_zoneStatus_body
 **/
exports.zoneStatusSubPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatusSubscription" : {
    "operationStatus" : [ "Serviceable", "Serviceable" ],
    "numberOfUsersAPThreshold" : 7,
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "zoneId" : "zoneId",
    "numberOfUsersZoneThreshold" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a subscription information
 * Updates a subscription.
 *
 * body ZoneStatus_subscriptionId_body Subscription to be modified
 * subscriptionId String Subscription Identifier, specifically the \"self\" returned in the subscription request
 * returns zoneStatus_subscriptionId_body
 **/
exports.zoneStatusSubPUT = function(body,subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatusSubscription" : {
    "operationStatus" : [ "Serviceable", "Serviceable" ],
    "numberOfUsersAPThreshold" : 7,
    "resourceURL" : "resourceURL",
    "clientCorrelator" : "clientCorrelator",
    "zoneId" : "zoneId",
    "numberOfUsersZoneThreshold" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Zones information Lookup
 * Used to get a list of identifiers for zones authorized for use by the application.
 *
 * returns inline_response_200_2
 **/
exports.zonesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneList" : {
    "resourceURL" : "resourceURL",
    "zone" : [ {
      "resourceURL" : "resourceURL",
      "numberOfUsers" : 1,
      "zoneId" : "zoneId",
      "numberOfAccessPoints" : 0,
      "numberOfUnserviceableAccessPoints" : 6
    }, {
      "resourceURL" : "resourceURL",
      "numberOfUsers" : 1,
      "zoneId" : "zoneId",
      "numberOfAccessPoints" : 0,
      "numberOfUnserviceableAccessPoints" : 6
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Zones information Lookup
 * Used to get the information for an authorized zone for use by the application.
 *
 * zoneId String Indentifier of zone
 * returns inline_response_200_3
 **/
exports.zonesGetById = function(zoneId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneInfo" : {
    "resourceURL" : "resourceURL",
    "numberOfUsers" : 1,
    "zoneId" : "zoneId",
    "numberOfAccessPoints" : 0,
    "numberOfUnserviceableAccessPoints" : 6
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

