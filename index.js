var app = angular.module('myapp', ['angularMoment', 'ngAnimate']);

app.controller('mycontroller', function($scope, $rootScope){
  
  // fixing inheritence //
  $scope.view = {};
  var v = $scope.view;

  // initial values //
  v.sortBy = 'vote';
  v.showForm = false;
  v.showComments = false;
  v.showCommentForm = false;
  v.posts = [];

  // seed/test data //
  var obj = [{
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
  },
  {
    title: "another title",
    time: new Date(),
    author: "harper",
    vote: 0,
    url: "https://media.giphy.com/media/v7a9tri4q9wDS/giphy.gif",
    text: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
    comments: [
      {'author': 'pooper', 'text': 'crap'},
      {'author': 'biden', 'text': 'wow oh wow oh wow oh owo'}
    ]
  }];
  v.posts = obj;
  // end seed data //

  v.submitPost = function(){
    var obj = {};
    obj.title = v.post_title;
    obj.time = new Date();
    obj.author = v.post_author;
    obj.vote = 0;
    obj.url = v.post_url;
    obj.text = v.post_text;
    obj.comments = [];

    v.posts.push(obj);
    v.showForm = false;
    
    v.post_author = '';
    v.post_title = '';
    v.post_url = '';
    v.post_author = '';
    v.post_text = '';
  }

  v.submitComment = function(p){
    var comment = {
      'author': v.comment_author,
      'text': v.comment_text
    }

    p.comments.push(comment);
    v.comment_author = null;
    v.comment_text = null;
    p.showCommentForm = !p.showCommentForm;
    p.showComments = !p.showComments;;
    
  }

  v.vote = function(p, i){
    p.vote += i;
  }

});

$(document).ready(function(){
  $('#sortByVotes').attr('selected',true);
});

