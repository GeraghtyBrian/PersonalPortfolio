'use strict';

angular.module('personalPortfolioApp')
  .controller('ColWorkCtrl',['$scope', function ($scope) {
  		$scope.collegeWork = [
      {
        name:'Branding',
        subject:'Creative Design',
        brief:'Create the branding for a fictional restaurant of your choice.',
        description:"",
        image:'images/colWorkImages/brandingAssignment01.png',
        gitLink:' ',
        site:' ',
      },
      {
        name:'Palio Restaurant',
        subject:'Web Design',
        brief:'Create a website for the same fictional restaurant use in the create design assigment.',
        description:"",
        image:'images/colWorkImages/webDesignAssigment01.png',
        gitLink:'https://github.com/GeraghtyBrian/PalioRestaurant',
        site:'../portfolioSites/palio/index.html',
      },
      {
  			name:'Quiz',
  			subject:'ASP.NET',
  			brief:"Build a quiz website that allows a user to register and login, can feed a quiz to a user, track the quiz's state through multiple pages and display the results at the end.",
  			description:'For this assignment we had the choice to work alone or as part of a group. Me and a fellow student opted to work as a group as we knew it would greatly expand the scope of what we could achieve in the alloted time. I did front-end, back-end and database work on this project',
  			image:'images/colWorkImages/quiz.png',
        gitLink:"https://github.com/CollegeAssignments/Sem4_WebProg_Quiz_Part2",
        site:' ',
  		},
      ];
  }]);