/**
 * Created by ldjt on 16/10/19.
 */
var app=angular.module('mf-app',['ui.router','ionic','ngAnimate']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'views/main.html',
        controller:'mainCrl'
    }).state('applyloan',{
        url:'/applyloan',
        templateUrl:'views/applyloan.html',
        controller:'applyLoanCrl'
    }).state('info',{
        url:'/info',
        templateUrl:'views/infomation.html',
        controller:'infomationCrl'
    })
});
app.animation('.fad', function () {
    return {
        enter: function(element, done) {
            element.css({
                opacity: 0
            });
            element.animate({
                opacity: 1
            }, 1000, done);
        },
        leave: function (element, done) {
            element.css({
                opacity: 1
            });
            element.animate({
                opacity: 0
            }, 1000, done);
        }
    };
});