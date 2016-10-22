/**
 * Created by ldjt on 16/10/19.
 */
var app=angular.module('mf-app',['ui.router','ionic']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/applyloan');
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'views/main.html',
        controller:'mainCrl'
    }).state('applyloan',{
        url:'/applyloan',
        templateUrl:'views/applyloan.html',
        controller:'applyLoanCrl'
    })
})
