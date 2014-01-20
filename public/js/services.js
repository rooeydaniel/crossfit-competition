'use strict';

/* Services */
angular.module('addressBookApp.services', ['angularLocalStorage'])
    .factory('SessionService', function($http, storage) {
        return {
            saveUserSession: function(data) {
                storage.set('user', data);
            },
            getUserSession: function() {
                return storage.get('user');
            },
            removeUserSession: function() {
                storage.clearAll();
            },
            isUserLoggedIn: function() {
                return storage.get('user') != null;
            },
            saveCurrentContact: function(data) {
                storage.set('contact', data);
            },
            getCurrentContact: function() {
                return storage.get('contact');
            }
        };
    })
    .value('version', '0.1');
