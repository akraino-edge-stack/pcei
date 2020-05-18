'use strict';


/**
 * Users currently using a zone may be retrieved for sets of access points matching attribute in the request
 *
 * zoneId String Zone ID
 * accessPointId String Identifier of access point, reference \"definitions\" for string format (optional)
 * returns Object
 **/
exports.usersGet = function(zoneId,accessPointId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userList" : {
    "user" : [ {
      "address" : "acr:192.0.2.1",
      "accessPointId" : "001010000000000000000000000000001",
      "zoneId" : "zone01",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/users/acr%3A192.0.2.1"
    }, {
      "address" : "acr:192.0.2.2",
      "accessPointId" : "001010000000000000000000000000001",
      "zoneId" : "zone01",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/users/acr%3A192.0.2.2"
    }, {
      "address" : "acr:192.0.2.3",
      "accessPointId" : "001010000000000000000000000000010",
      "zoneId" : "zone01",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/users/acr%3A192.0.2.3"
    }, {
      "address" : "acr:192.0.2.4",
      "accessPointId" : "001010000000000000000000000000001",
      "zoneId" : "zone02",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/users/acr%3A192.0.2.4"
    }, {
      "address" : "acr:192.0.2.5",
      "accessPointId" : "001010000000000000000000000000010",
      "zoneId" : "zone02",
      "resourceURL" : "http://example.com/exampleAPI/location/v1/users/acr%3A192.0.2.5"
    } ],
    "resourceURL" : "http://example.com/exampleAPI/location/v1/users"
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
 * Users currently using a zone may be retrieved for sets of access points matching attribute in the request
 *
 * userId String User ID
 * returns Object
 **/
exports.usersGetById = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userInfo" : {
    "address" : "acr:192.0.2.1",
    "accessPointId" : "001010000000000000000000000000001",
    "zoneId" : "zone01",
    "resourceURL" : "http://example.com/exampleAPI/location/v1/users/acr%3A192.0.2.1",
    "locationInfo" : {
      "latitude" : "90.123",
      "longitude" : "80.123",
      "altitude" : "10.0",
      "accuracy" : "0"
    },
    "contextLocationInfo" : "GroundFloor"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

