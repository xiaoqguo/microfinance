/**
 * Created by ldjt on 16/10/19.
 */
var app=angular.module('mf-app',['ui.router','ionic']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'views/main.html'
    })
})