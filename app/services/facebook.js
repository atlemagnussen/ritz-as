angular.module('servicesModule', [])
    .factory('facebookService', function($q) {
        this.loggedin = false;
        this.events = [];
        return {
            on: (e, fn) => {
                if (e && fn) {
                    this.events.push(fn);
                }
            },
            un: function(e, fn) {
                if (e, fn) {
                    this.events = [];
                }
            },
            handleLogin: (login) => {
                console.log(login);
                if (login.status === 'connected') {
                    this.loggedin = true;
                    for(var i=0; i<this.events.length; i++) {
                        var fn = this.events[i];
                        fn();
                    }
                }
            },
            getMyLastName: () => {
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
            checkLoginState: () => {
                var deferred = $q.defer();
                FB.getLoginStatus(function(response) {
                    if (!response || response.error) {
                        deferred.reject('Error occured');
                    } else {
                        deferred.resolve(response);
                    }
                });
                return deferred.promise;
            },
            getPosts: (pageid) => {
                var deferred = $q.defer();
                if (!this.loggedin) {
                    deferred.reject('Not logged in');
                }
                FB.api("/" + pageid + "/feed", function(response) {
                    if (!response || response.error) {
                        deferred.reject('Error occured');
                    } else {
                        deferred.resolve(response);
                    }
                });
                return deferred.promise;
            }
        };
    });
