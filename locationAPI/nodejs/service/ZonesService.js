'use strict';


/**
 * Access point status can be retrieved for sets of access points matching attribute in the request.
 *
 * zoneId String Zone ID
 * interestRealm String Interest realm of access point (e.g. geographical area, a type of industry etc.). (optional)
 * returns Object
 **/
exports.zonesByIdGetAps = function(zoneId,interestRealm) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessPointList" : {
    "zoneId" : "zone01",
    "accessPoint" : [ {
      "accessPointId" : "001010000000000000000000000000001",
      "locationInfo" : {
        "latitude" : "90.123",
        "longitude" : "80.123",
        "altitude" : "10.0",
        "accuracy" : "0"
      },
      "connectionType" : "Macro",
      "operationStatus" : "Serviceable",
      "numberOfUsers" : "5",
      "interestRealm" : "LA",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone01/accessPoints/ap001"
    }, {
      "accessPointId" : "001010000000000000000000000000010",
      "locationInfo" : {
        "latitude" : "91.123",
        "longitude" : "81.123",
        "altitude" : "12.0",
        "accuracy" : "1"
      },
      "connectionType" : "Macro",
      "operationStatus" : "Unserviceable",
      "numberOfUsers" : "0",
      "interestRealm" : "DC",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone01/accessPoints/ap002"
    }, {
      "accessPointId" : "001010000000000000000000000000011",
      "locationInfo" : {
        "latitude" : "93.123",
        "longitude" : "83.123",
        "altitude" : "16.0",
        "accuracy" : "3"
      },
      "connectionType" : "Macro",
      "operationStatus" : "Serviceable",
      "numberOfUsers" : "5",
      "interestRealm" : "NJ",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone01/accessPoints/ap003"
    } ],
    "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone01/accessPoints"
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
 * Access point status can be retrieved for sets of access points matching attribute in the request.
 *
 * zoneId String Zone ID
 * accessPointId String Access Point ID
 * returns Object
 **/
exports.zonesByIdGetApsById = function(zoneId,accessPointId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "accessPointInfo" : {
    "accessPointId" : "001010000000000000000000000000001",
    "locationInfo" : {
      "latitude" : "90.123",
      "longitude" : "80.123",
      "altitude" : "10.0",
      "accuracy" : "0"
    },
    "connectionType" : "Macro",
    "operationStatus" : "Serviceable",
    "numberOfUsers" : "5",
    "interestRealm" : "LA",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone001/accessPoints/ap001"
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
 * Used to get a list of identifiers for zones authorized for use by the application.
 *
 * returns Object
 **/
exports.zonesGet = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneList" : {
    "zone" : [ {
      "zoneId" : "zone01",
      "numberOfAccessPoints" : "3",
      "numberOfUnserviceableAccessPoints" : "1",
      "numberOfUsers" : "10",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone01"
    }, {
      "zoneId" : "zone02",
      "numberOfAccessPoints" : "12",
      "numberOfUnserviceableAccessPoints" : "0",
      "numberOfUsers" : "36",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone02"
    } ],
    "resourceURL" : "http://example.com/exampleAPI/location/v1/zones"
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
 * Used to get the status of a zone.
 *
 * zoneId String Zone ID
 * returns Object
 **/
exports.zonesGetById = function(zoneId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneInfo" : {
    "zoneId" : "zone01",
    "numberOfAccessPoints" : "3",
    "numberOfUnserviceableAccessPoints" : "1",
    "numberOfUsers" : "10",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/zones/zone01"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

