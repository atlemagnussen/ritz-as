angular.module('servicesModule', [])
.factory('facebookService', function($q) {
    this.loggedin = false;
    return {
        handleLogin: function(login) {
            console.log(login);
            if (login.status === 'connected') {
                this.loggedin = true;
            }
        },
        getMyLastName: function() {
            var deferred = $q.defer();
            if (!this.loggedin) {
                deferred.reject('Not logged in');
            }
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        },
        checkLoginState: function() {
            var deferred = $q.defer();
            FB.getLoginStatus(function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
        },
        getPosts: function(pageid, callback) {
        FB.api("/" + pageid + "/feed", function(response) {
            if (!this.loggedin) {
                if (callback) {
                    callback({error: "not logged in"});
                }
            }
            if (response && response.data && !response.error) {
                if (callback) {
                    callback(response);
                }
            }
        });
    }
    };
});
