/*! angular-seed 2020-02-01 */

var app=angular.module("bmpTech",["apiService"]);app.controller("MainCtrl",function(e,a){a.herokoCall().then(function(a){e.apiData=a}),e.selectionChange=function(){e.selectedBar&&(e.warningMessage="")},e.changeVal=function(a){e.selectedBar?e.apiData.bars[e.selectedBar]+a>e.apiData.limit?e.apiData.bars[e.selectedBar]=e.apiData.limit:e.apiData.bars[e.selectedBar]+a<0?e.apiData.bars[e.selectedBar]=0:e.apiData.bars[e.selectedBar]+=a:e.warningMessage="please make a selection first"}}),angular.module("bmpTech").component("bar",{templateUrl:"bar.html",bindings:{val:"=",limit:"="}});