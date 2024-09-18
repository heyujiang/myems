'use strict';
app.factory('EnergyStorageContainerFirecontrolService', function($http) {
    return {
        getAllEnergyStorageContainerFirecontrols: function(headers, callback) {
            $http.get(getAPI()+'energystoragecontainerfirecontrols', {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        getEnergyStorageContainerFirecontrolsByEnergyStorageContainerID: function(id, headers, callback) {
            $http.get(getAPI()+'energystoragecontainers/'+id+'/firecontrols', {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        addEnergyStorageContainerFirecontrol: function(id, energystoragecontainerfirecontrol, headers, callback) {
            $http.post(getAPI()+'energystoragecontainers/'+id+'/firecontrols',{data:energystoragecontainerfirecontrol}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        editEnergyStorageContainerFirecontrol: function(id, energystoragecontainerfirecontrol, headers, callback) {
            $http.put(getAPI()+'energystoragecontainers/'+id+'/firecontrols/'+energystoragecontainerfirecontrol.id,{data:energystoragecontainerfirecontrol}, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
        deleteEnergyStorageContainerFirecontrol: function(id, energystoragecontainerfirecontrolID, headers, callback) {
            $http.delete(getAPI()+'energystoragecontainers/'+id+'/firecontrols/'+energystoragecontainerfirecontrolID, {headers})
            .then(function (response) {
                callback(response);
            }, function (response) {
                callback(response);
            });
        },
    };
});
