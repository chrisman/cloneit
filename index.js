var app = angular.module('myapp', []);

app.controller('mycontroller', function($scope){
  $scope.showForm = false;
  $scope.showComments = false;
  $scope.showCommentForm = false;

  var obj = {
    title: "test title",
    author: "chrisbrown",
    vote: 0,
    url: "https://media.giphy.com/media/ZYi2Lc03nrryw/giphy.gif",
    text: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    comments: [
      {'author': 'cb', 'text': 'neato!'}
    ]
  };
  $scope.posts = [obj];

  // Toggles //
  $scope.toggleSubmitForm = function(){
    $scope.showForm = !$scope.showForm;
  }
  $scope.toggleComments = function(){
    $scope.showComments = !$scope.showComments;
  }
  $scope.toggleCommentForm = function(){
    $scope.showCommentForm = !$scope.showCommentForm;
  }

});
