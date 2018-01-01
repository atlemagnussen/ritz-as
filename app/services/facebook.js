angular.module('servicesModule', [])
    .factory('facebookService', function($q) {
        this.loggedin = false;

        var eventListeners = {
            connect: []
        };


        this.listEvents = {};

        this.clearEvent = (evtName) => {
            if (eventListeners[evtName]) {
                eventListeners[evtName].length = 0;
            }
        };

        return {
            on: (evtName, func) => {
                if (eventListeners[evtName]) {
                    eventListeners[evtName].push(func);
                }
            },
            un: (evtName, func) => {
                if (eventListeners[evtName]) {
                    var index = eventListeners[evtName].indexOf(func);
                    if (index > -1) {
                        eventListeners[evtName].splice(index, 1);
                    }
                }
            },
            handleLogin: (login) => {
                console.log(login);
                if (login.status === 'connected') {
                    this.loggedin = true;
                    if (eventListeners.connect && eventListeners.connect.length > 0) {
                        eventListeners.connect.forEach((func) => {
                            func();
                        });
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
                try {
                    FB.api("/" + pageid + "/feed", function(response) {
                        if (!response || response.error) {
                            deferred.reject('Error occured');
                        } else {
                            deferred.resolve(response);
                        }
                    });
                } catch (e) {
                    deferred.reject(e);
                }

                return deferred.promise;
            }
        };
    });
