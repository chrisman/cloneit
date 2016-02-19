var app = angular.module('myapp', ['angularMoment']);

app.controller('mycontroller', function($scope, $rootScope){

  // initial values //
  $scope.sortBy = 'vote';
  $scope.showForm = false;
  $scope.showComments = false;
  $scope.showCommentForm = false;

  // seed/test data //
  var obj = {
    title: "test title",
    time: new Date(),
    author: "chrisbrown",
    vote: 3,
    url: "https://media.giphy.com/media/ZYi2Lc03nrryw/giphy.gif",
    text: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    comments: [
      {'author': 'cb', 'text': 'neato!'},
      {'author': 'alaska', 'text': 'is this food?'}
    ]
  };
  $scope.posts = [obj];
  obj = {
    title: "another title",
    time: new Date(),
    author: "harper",
    vote: 0,
    url: "https://media.giphy.com/media/l4KhVo1OrKsqgToeQ/giphy.gif",
    text: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    comments: [
      {'author': 'cb', 'text': 'neato!'},
      {'author': 'alaska', 'text': 'is this food?'}
    ]
  };
  $scope.posts.push(obj);

  $scope.submitPost = function(){}

  $scope.submitComment = function(p){
    var comment = {
      'author': $scope.comment_author,
      'text': $scope.comment_text
    }

    console.log(p);
    p.comments.push(comment);
    p.showCommentForm = !p.showCommentForm;
    p.showComments = !p.showComments;;
    
  }

  $scope.vote = function(p, i){
    p.vote += i;
  }

});
