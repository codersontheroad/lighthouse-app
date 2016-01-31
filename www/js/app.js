// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      // cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// .factory("Items", function($firebaseArray) {
//     var itemsRef = new Firebase("https://gttrzh5n8tm.firebaseio-demo.com/");
//     return $firebaseArray(itemsRef);
// })
.controller('AlertCtrl', function($scope, $firebaseArray){
  var ref = new Firebase("https://rescue-lighthouse.firebaseio.com/");
  $scope.messages = $firebaseArray(ref);
  $scope.sendAlert = function() {
    console.log('hello');
    var onSuccess = function(position, $scope) {
      var lattitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var position = ""+lattitude+", "+longitude;
      var id = "asdf12346k";
      var d = new Date();
      var epochtime = d.getTime();
      var utcSeconds = epochtime;
      var time = new Date(utcSeconds);
      var time = String(time);
      var g = time.indexOf("G");
      time = time.substring(0,g);
      console.log(time);
      // });
      var myDataRef = new Firebase('https://sizzling-inferno-4233.firebaseio.com/');
      myDataRef.push({
            "id": id,
            "longitude": longitude,
            "lattitude": lattitude,
            "position": position,
            "time": time
          });
    };

  // onError Callback receives a PositionError object
  //
    function onError(error) {
        console.log('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
})
