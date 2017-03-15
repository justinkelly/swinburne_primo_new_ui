(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

	// Add Clickable Logo

	app.controller('prmLogoAfterController', [function () {
		var vm = this;
		vm.getIconLink = getIconLink;
		function getIconLink() {
			return vm.parentCtrl.iconLink;
		}
	}]);

	app.component('prmLogoAfter',{
		bindings: {parentCtrl: '<'},
		controller: 'prmLogoAfterController',
template: '<div class="product-logo product-logo-l" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0" role="banner"><a href="//www.swinburne.edu.au/library"><img class="logo-image" alt="Library Search" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
	});

})();