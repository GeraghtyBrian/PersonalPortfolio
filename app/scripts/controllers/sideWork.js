'use strict';

angular.module('personalPortfolioApp')
   .controller('SideWorkCtrl',['$scope', function ($scope) {
  		$scope.SideWork = [
	  		{
		        name:'Bank of Ireland',
		        subject:'Graphics',
		        brief:'Graphics work for internal presentation for Bank of Ireland (Used with Permission).',
		        description:"",
		        image:[
		          {href:'images/sideWorkImages/BOI/b1.gif'},
		          {href:'images/sideWorkImages/BOI/b2.gif'},
		          {href:'images/sideWorkImages/BOI/b3.gif'}
		        ],
		        gitLink:' ',
		        site:' ',
		      },	
			{
				name:'Branding',
				subject:'Graphics',
				brief:'Logo for fictional international restaurant.',
				description:"",
				image:[
				  {href:'images/sideWorkImages/taste/t2.gif'},
				  {href:'images/sideWorkImages/taste/t1.gif'},
				  {href:'images/sideWorkImages/taste/t3.gif'}
				],
				gitLink:' ',
				site:' ',
			},
			{
				name:'Pen Tool',
				subject:'Graphics',
				brief:'Some traced drawings done while practicing using the pen tool in Illustrator.',
				description:"",
				image:[
				  {href:'images/sideWorkImages/pentool/pt1.gif'},
				  {href:'images/sideWorkImages/pentool/pt3.gif'},
				  {href:'images/sideWorkImages/pentool/pt2.gif'}
				],
				gitLink:' ',
				site:' ',
			},
		];
	}]);