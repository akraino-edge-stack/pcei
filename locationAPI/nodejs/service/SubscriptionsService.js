'use strict';


/**
 * This operation is used for retrieving an individual subscription to user tracking change notification.
 *
 * subscriptionId String Subscription ID
 * no response value expected for this operation
 **/
exports.userTrackingSubDelById = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * This operation is used for retrieving all active subscriptions to user tracking change notifications.
 *
 * returns inline_response_200_1
 **/
exports.userTrackingSubGet = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "userTrackingSubscription" : [ {
      "clientCorrelator" : "0123",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/userTracking/subscription123",
      "callbackReference" : {
        "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
      },
      "address" : "acr:192.0.2.1",
      "userEventCriteria" : "Transferring"
    }, {
      "clientCorrelator" : "0124",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/userTracking/subscription124",
      "callbackReference" : {
        "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
      },
      "address" : "acr:192.0.2.2",
      "userEventCriteria" : "Transferring"
    } ],
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/userTracking"
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
 * This operation is used for retrieving an individual subscription to user tracking change notification.
 *
 * subscriptionId String Subscription ID
 * returns Object
 **/
exports.userTrackingSubGetById = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userTrackingSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/userTracking/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "address" : "acr:192.0.2.1",
    "userEventCriteria" : "Transferring"
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
 * This operation is used for creating a new subscription to user tracking change notification
 *
 * userTrackingSubscription UserTrackingSubscription User Tracking Subscription
 * returns Object
 **/
exports.userTrackingSubPost = function(userTrackingSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userTrackingSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/userTracking/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "address" : "acr:192.0.2.1",
    "userEventCriteria" : "Transferring"
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
 * This operation is used for updating an individual subscription to user tracking change notification.
 *
 * subscriptionId String Subscription ID
 * userTrackingSubscription UserTrackingSubscription User Tracking Subscription
 * returns Object
 **/
exports.userTrackingSubPutById = function(subscriptionId,userTrackingSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userTrackingSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/userTracking/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "address" : "acr:192.0.2.1",
    "userEventCriteria" : "Transferring"
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
 * This operation is used for cancelling a subscription and stopping corresponding notifications.
 *
 * subscriptionId String Subscription ID
 * no response value expected for this operation
 **/
exports.zonalTrafficSubDelById = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * This operation is used for retrieving all active subscriptions to zonal traffic change notifications.
 *
 * returns inline_response_200
 **/
exports.zonalTrafficSubGet = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "zonalTrafficSubscription" : [ {
      "clientCorrelator" : "0123",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zonalTraffic/subscription123",
      "callbackReference" : {
        "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
      },
      "zoneId" : "zone01",
      "interestRealm" : "LA",
      "userEventCriteria" : "Transferring"
    }, {
      "clientCorrelator" : "0124",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zonalTraffic/subscription124",
      "callbackReference" : {
        "notifyURL" : "http://clientApp.example.com/location_notifications/123457"
      },
      "zoneId" : "zone02",
      "interestRealm" : "LA",
      "userEventCriteria" : "Transferring"
    } ],
    "resourceURL" : "http://example.com/exampleAPI/location/v1/zonalTraffic"
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
 * This operation is used for updating an individual subscription to zonal traffic change notification.
 *
 * subscriptionId String Subscription ID
 * returns Object
 **/
exports.zonalTrafficSubGetById = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zonalTrafficSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zonalTraffic/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "zoneId" : "zone01",
    "interestRealm" : "LA",
    "userEventCriteria" : "Transferring"
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
 * This operation is used for creating a new subscription to zonal traffic change notification.
 *
 * zonalTrafficSubscription ZonalTrafficSubscription Zonal Traffic Subscription
 * returns Object
 **/
exports.zonalTrafficSubPost = function(zonalTrafficSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zonalTrafficSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zonalTraffic/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "zoneId" : "zone01",
    "interestRealm" : "LA",
    "userEventCriteria" : "Transferring"
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
 * This operation is used for updating an individual subscription to zonal traffic change notification.
 *
 * subscriptionId String Subscription ID
 * zonalTrafficSubscription ZonalTrafficSubscription Zonal Traffic Subscription
 * returns Object
 **/
exports.zonalTrafficSubPutById = function(subscriptionId,zonalTrafficSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zonalTrafficSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zonalTraffic/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "zoneId" : "zone01",
    "interestRealm" : "LA",
    "userEventCriteria" : "Transferring"
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
 * This operation is used for cancelling a subscription and stopping corresponding notifications.
 *
 * subscriptionId String Subscription ID
 * no response value expected for this operation
 **/
exports.zoneStatusDelById = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * This operation is used for creating a new subscription to zone status change notification.
 *
 * returns inline_response_200_2
 **/
exports.zoneStatusGet = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notificationSubscriptionList" : {
    "zoneStatusSubscription" : [ {
      "clientCorrelator" : "0123",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zoneStatus/subscription123",
      "callbackReference" : {
        "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
      },
      "zoneId" : "zone01",
      "numberOfUsersZoneThreshold" : "500",
      "operationStatus" : "Serviceable"
    }, {
      "clientCorrelator" : "0124",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zoneStatus/subscription124",
      "callbackReference" : {
        "notifyURL" : "http://clientApp.example.com/location_notifications/123457"
      },
      "zoneId" : "zone02",
      "numberOfUsersAPThreshold" : "50",
      "operationStatus" : "Serviceable"
    } ],
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zoneStatus"
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
 * This operation is used for retrieving an individual subscription to zone status change notification.
 *
 * subscriptionId String Subscription ID
 * returns Object
 **/
exports.zoneStatusGetById = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatusSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zoneStatus/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "zoneId" : "zone01",
    "numberOfUsersZoneThreshold" : "500",
    "operationStatus" : "Serviceable"
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
 * This operation is used for creating a new subscription to zone status change notification.
 *
 * zoneStatusSubscription ZoneStatusSubscription Zone Status Subscription
 * returns Object
 **/
exports.zoneStatusPost = function(zoneStatusSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatusSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zoneStatus/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "zoneId" : "zone01",
    "numberOfUsersZoneThreshold" : "500",
    "operationStatus" : "Serviceable"
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
 * This operation is used for updating an individual subscription to zone status change notification.
 *
 * subscriptionId String Subscription ID
 * zoneStatusSubscription ZoneStatusSubscription Zone Status Subscription
 * returns Object
 **/
exports.zoneStatusPutById = function(subscriptionId,zoneStatusSubscription) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatusSubscription" : {
    "clientCorrelator" : "0123",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/subscriptions/zoneStatus/subscription123",
    "callbackReference" : {
      "notifyURL" : "http://clientApp.example.com/location_notifications/123456"
    },
    "zoneId" : "zone01",
    "numberOfUsersZoneThreshold" : "500",
    "operationStatus" : "Serviceable"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

