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
		          {hrefFull:'images/sideWorkImages/BOI/full/b1.gif', hrefThumb:'images/sideWorkImages/BOI/thumb/b1.gif'},
		          {hrefFull:'images/sideWorkImages/BOI/full/b2.gif', hrefThumb:'images/sideWorkImages/BOI/thumb/b2.gif'},
		          {hrefFull:'images/sideWorkImages/BOI/full/b3.gif', hrefThumb:'images/sideWorkImages/BOI/thumb/b3.gif'}
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
				  {hrefFull:'images/sideWorkImages/taste/full/t2.gif', hrefThumb:'images/sideWorkImages/taste/thumb/t2.gif'},
				  {hrefFull:'images/sideWorkImages/taste/full/t1.gif', hrefThumb:'images/sideWorkImages/taste/thumb/t1.gif'},
				  {hrefFull:'images/sideWorkImages/taste/full/t3.gif', hrefThumb:'images/sideWorkImages/taste/thumb/t3.gif'}
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
				  {hrefFull:'images/sideWorkImages/pentool/full/pt1.gif', hrefThumb:'images/sideWorkImages/pentool/thumb/pt1.gif'},
				  {hrefFull:'images/sideWorkImages/pentool/full/pt3.gif', hrefThumb:'images/sideWorkImages/pentool/thumb/pt3.gif'},
				  {hrefFull:'images/sideWorkImages/pentool/full/pt2.gif', hrefThumb:'images/sideWorkImages/pentool/thumb/pt2.gif'}
				],
				gitLink:' ',
				site:' ',
			},
		];
	}]);