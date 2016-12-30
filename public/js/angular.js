"use strict";
var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "ang-views/home.html"
        }).otherwise({
            redirectTo: '/'
        });    }
)
