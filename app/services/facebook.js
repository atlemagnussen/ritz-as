angular.module('servicesModule')
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
            getPosts: (pageid, debug) => {
                var deferred = $q.defer();
                if (debug) {
                    var debugData = {
                        "data": [{
                            "created_time": "2017-12-23T11:57:33+0000",
                            "message": "\u00d8nsker alle mine kunder en riktig god jul og et godt nytt\u00e5r \ud83c\udf84\ud83d\ude0a Kommer til \u00e5 ha \u00e5pen salong i romjulen fra 1000 til 1400. Mvh J\u00f8rn",
                            "id": "252325751858559_368626023561864"
                        }, {
                            "created_time": "2017-12-18T09:04:54+0000",
                            "message": "Hei folkens , da g\u00e5r vi inn i juleuka og Ritz har  selvf\u00f8lgelig \u00e5pent i dag mandag fra 1000 til 1900, det samme resten av uka untatt l\u00f8rdag den 23, da stenger vi kl. 1600.\nJ\u00f8rn",
                            "id": "252325751858559_366914987066301"
                        }, {
                            "created_time": "2017-11-01T14:01:19+0000",
                            "message": "Ny produkt for gutta \ud83d\udc4d",
                            "id": "252325751858559_350997795324687"
                        }, {
                            "created_time": "2017-09-27T11:32:44+0000",
                            "message": "Ritz Herrefris\u00f8r uti v\u00e5ji\ud83d\udc4d\ud83d\ude0e",
                            "story": "RITZ Herrefris\u00f8r shared their photo.",
                            "id": "252325751858559_339501373140996"
                        }, {
                            "created_time": "2017-09-26T09:41:47+0000",
                            "message": "Da er Erik klar til \u00e5 tr\u00e5 p\u00e5 i finv\u00e6ret \ud83d\ude01\ud83d\udc4d\ud83d\ude0e\ud83d\ude0e v\u00e6rt uti v\u00e5ji p\u00e5 Ritz Herrefris\u00f8r \ud83d\ude0e\ud83d\ude0e\ud83d\udc4d",
                            "story": "RITZ Herrefris\u00f8r added 2 new photos.",
                            "id": "252325751858559_339201216504345"
                        }, {
                            "created_time": "2017-09-12T09:17:56+0000",
                            "message": "Da er vi spenna klare \ud83d\ude01\ud83d\udc4dRitz uti v\u00e5je\ud83d\ude0e\ud83d\ude0e\ud83d\udc4d",
                            "id": "252325751858559_334869710270829"
                        }, {
                            "created_time": "2017-09-08T07:35:32+0000",
                            "message": "Da er vi igagn p\u00e5 Ritz  igjen\ud83d\ude01\ud83d\udc4d\ud83d\udc4d\ud83d\udc4dkaffen er satt p\u00e5 og velkommne skal dere v\u00e6re \ud83d\udc4d",
                            "id": "252325751858559_333603280397472"
                        }, {
                            "created_time": "2017-09-02T16:35:34+0000",
                            "message": "Da er vi igang med oppusinga av Ritz, og vi starter opp Torsdag 7,sept. Kl 1000. Gamle og nye kunder hjertlig velkommne \ud83d\ude0a\ud83d\udc4d\ud83d\udc4d\nTelf. 90806036 , og vi er tilbake p\u00e5 Bryggen Fosnav\u00e5g igjen \ud83d\udc4d\nHilsen J\u00f8rn",
                            "id": "252325751858559_331870163904117"
                        }, {
                            "created_time": "2017-08-05T14:26:02+0000",
                            "message": "Hei folkens \ud83d\ude01\nDa var sommerferien over etter 3 herlige uker i Stavern med godt sommerv\u00e6r\ud83d\ude0e\ud83d\udc4d er jeg n\u00e5 i full gang med \u00e5 planlegge og forberede Ritz  til \u00e5 komme tilbake til Fosnav\u00e5g Brygge \ud83d\ude01\ud83d\udc4d\nKommer til \u00e5 \u00e5pne i begynnelsen av september\ud83d\ude01\ud83d\udc4d hilsen J\u00f8rn",
                            "id": "252325751858559_322722431485557"
                        }, {
                            "created_time": "2017-07-17T06:51:23+0000",
                            "message": "Hei folkens\n\nDa er det ferie tider og Ritz holder stengt fra 16 juli til begynnelsen av september. Da flytter vi inn igjen i lokalene p\u00e5 Fosnav\u00e5g Brygge.\nHa en solrik sommer alle sammen \ud83d\ude0e\ud83d\ude0e\ud83d\udc4d",
                            "id": "252325751858559_315552762202524"
                        }, {
                            "created_time": "2017-06-26T10:35:47+0000",
                            "message": "Hei, Ritz kommer dessverre til \u00e5 v\u00e6re stengt fra 1juli til 6juli .",
                            "id": "252325751858559_306650056426128"
                        }, {
                            "created_time": "2017-06-12T08:24:45+0000",
                            "message": "Da er jeg tilbake p\u00e5 salong Ritz igjen, etter en rask tur p\u00e5 \u00f8stlandet \ud83d\ude01\ud83d\udc4d",
                            "id": "252325751858559_300593390365128"
                        }, {
                            "created_time": "2017-06-08T10:04:21+0000",
                            "message": "Ritz er dessverre stengt tor, fre og l\u00f8rdag. Er tilbake  p\u00e5 Mandag \ud83d\udc4d",
                            "id": "252325751858559_299084647182669"
                        }, {
                            "created_time": "2017-05-09T09:51:19+0000",
                            "story": "RITZ Herrefris\u00f8r shared The Great British Barber Bash's photo.",
                            "id": "252325751858559_288287804929020"
                        }, {
                            "created_time": "2017-03-31T10:25:04+0000",
                            "message": "For dem som etterlyser Fixit snapp, s\u00e5 har det  desverre ikke latt seg gj\u00f8re , da det er sv\u00e6rt vanskelig for Odin  og skille to salonger i et lokale. S\u00e5 dere kan g\u00e5 inn \u00e5 bruke Fixit online for \u00e5 bestille time p\u00e5 Ritz herrefris\u00f8r.\ud83d\ude0a\ud83d\udc4d\ud83d\udc4d",
                            "id": "252325751858559_272476049843529"
                        }, {
                            "created_time": "2017-03-11T14:49:14+0000",
                            "message": "Da ble det litt barbering i dag \ud83d\ude01",
                            "id": "252325751858559_264959923928475"
                        }, {
                            "created_time": "2017-03-02T12:59:51+0000",
                            "message": "Nye herreprodukter",
                            "id": "252325751858559_261549037602897"
                        }, {
                            "created_time": "2017-03-02T12:53:47+0000",
                            "message": "Nye herreprodukt\ud83d\ude0a",
                            "id": "252325751858559_261547794269688"
                        }, {
                            "created_time": "2017-03-02T12:51:58+0000",
                            "story": "RITZ Herrefris\u00f8r updated their profile picture.",
                            "id": "252325751858559_261547487603052"
                        }, {
                            "created_time": "2017-02-17T11:25:53+0000",
                            "message": "Hei folkens!\nDa er jeg kommet godt i gang med klippingen og godt \u00e5 se at mange av dere gode '  gamle' kunder har funnet fram \ud83d\ude0a H\u00e5per at flere vil stikke hode innom for en klipp eller en god prat.\nStikk en tur innom da folkens \ud83d\ude0a",
                            "id": "252325751858559_256546648103136"
                        }, {
                            "created_time": "2017-02-06T20:47:59+0000",
                            "story": "RITZ Herrefris\u00f8r updated their cover photo.",
                            "id": "252325751858559_252340885190379"
                        }],
                        "paging": {
                            "cursors": {
                                "before": "Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXlOVEl6TWpVM05URTROVGcxTlRrNkxUZAzJNakU0T0RneE1ESXlOVGd3TnprNU5URVBER0ZA3YVY5emRHOXllVjlwWkE4ZAk1qVXlNekkxTnpVeE9EVTROVFU1WHpNMk9EWXlOakF5TXpVMk1UZAzJOQThFZAEdsdFpRWmFQa1N0QVE9PQZDZD",
                                "after": "Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXlOVEl6TWpVM05URTROVGcxTlRrNkxUa3hOamcxTVRVek5qSTBOVGcxTmpNME9Ua1BER0ZA3YVY5emRHOXllVjlwWkE4ZAk1qVXlNekkxTnpVeE9EVTROVFU1WHpJMU1qTTBNRGc0TlRFNU1ETTNPUThFZAEdsdFpRWlltT0QvQVE9PQZDZD"
                            }
                        }
                    };
                    deferred.resolve(debugData);
                }

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
