'use strict';

angular.module('personalPortfolioApp')
  .controller('ColWorkCtrl',['$scope', function ($scope) {
  		$scope.collegeWork = [
      {
        name:'Branding',
        subject:'Creative Design',
        brief:'Create the branding for a fictional restaurant of your choice.',
        description:"",
        image:[
          {href:'images/colWorkImages/brandingPrimal/bp3.gif'},
          {href:'images/colWorkImages/brandingPrimal/bp1.gif'},
          {href:'images/colWorkImages/brandingPrimal/bp2.gif'}
        ],
        gitLink:' ',
        site:' ',
      },
      {
        name:'Palio Restaurant',
        subject:'Web Design',
        brief:'Create a website for the same fictional restaurant use in the create design assigment.',
        description:"",
        image:[
          {href:'images/colWorkImages/webDesignPrimal/p2.gif'},
          {href:'images/colWorkImages/webDesignPrimal/p1.gif'},
          {href:'images/colWorkImages/webDesignPrimal/p3.gif'}
        ],
        gitLink:'https://github.com/GeraghtyBrian/PalioRestaurant',
        site:'../portfolioSites/palio/index.html',
      },
      {
  			name:'Quiz',
  			subject:'ASP.NET',
  			brief:"Build a quiz website that allows a user to register and login, can feed a quiz to a user, track the quiz's state through multiple pages and display the results at the end.",
  			description:'For this assignment we had the choice to work alone or as part of a group. Me and a fellow student opted to work as a group as we knew it would greatly expand the scope of what we could achieve in the alloted time. I did front-end, back-end and database work on this project',
  			image:[
          {href:'images/colWorkImages/quiz/q1.gif'},
          {href:'images/colWorkImages/quiz/q2.gif'},
          {href:'images/colWorkImages/quiz/q3.gif'}
        ],
        gitLink:"https://github.com/CollegeAssignments/Sem4_WebProg_Quiz_Part2",
        site:' ',
  		},
      ];
  }]);