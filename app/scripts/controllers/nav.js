'use strict';

angular.module('personalPortfolioApp')
  .controller('NavCtrl', function () {

	var activeTab=0;
	this.setActiveTab = function(index){
		activeTab = index;
	};
	this.getTab = function(){
		console.log(activeTab);
		return activeTab;
	};
  });