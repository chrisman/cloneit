var app = angular.module('myapp', []);

app.controller('mycontroller', function($scope){
  $scope.showForm = false;

  var obj = {
    title: "test title",
    author: "chrisbrown",
    vote: 0,
    url: "https://media.giphy.com/media/ZYi2Lc03nrryw/giphy.gif",
    text: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
  };
  $scope.posts = [obj];

  $scope.toggleSubmitForm = function(){
    console.log('togglin');
    $scope.showForm = !$scope.showForm;
  }

});
