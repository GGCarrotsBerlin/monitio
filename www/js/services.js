angular.module('starter.services', [])

.factory('Questions', function(){
  var questions = [
    {
      id: 1,
      title: 'Mood',
      icon: 'ion-android-happy',
      options: [
      {icon:'happy_box',text:'Happy'}, {icon:'neutral',text:'Neutral'}, {icon:'angry',text:'Angry'}, {icon:'sad_box',text:'Sad'}
      ]
    },
    {
      id: 2,
      title: 'Sex life',
      icon: 'ion-ios-heart',
      options: [{icon:'protected_sex',text:'Protected'}, {icon:'unprotected',text:'Unprotected'}, {icon:'1partner',text:'One partner'}, {icon:'multiple_partners',text:'Multiple Partners'}]
    },
  ];

  return {
    all: function(){
      return questions;
    },
    get: function(qID){
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(qID)) {
          return questions[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
