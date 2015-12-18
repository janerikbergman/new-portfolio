// JavaScript Document
var app = angular.module("translationApp", []);

app.factory("localStorageFactory", function localStorageFactory() {
  var localStorageFactory = {};
  
  localStorageFactory.isStorageAvailable = function(){
    var test = "test";
    try {
        localStorage.setItem("test", test);
        localStorage.removeItem("test");
        return true;
    } catch(e) {
        return false;
    }
  }
  return localStorageFactory;
});

app.factory("httpFactory", ["$http",function($http){
    var data;
    return {
        getData: function (callback) {
            if(data) {
                callback(data);
            } else {
                $http.get("./js/data.json").success(function(d) {
                    callback(data = d);
                });
            }
        }
    }; 
}]);

app.factory("heartFactory", ["$sce", function($sce){
    var heartFactory = {};
    var hearts = [];
    
    var heart = '<img src="./images/heart_small.png" height="27" width="30" alt="heart">';
    var heartHalf = '<img src="./images/hearthalf_small.png" height="27" width="30" alt="heart">';
    var heartEmpty = '<img src="./images/heartempty_small.png" height="27" width="30" alt="heart">';
    
    heartFactory.addHearts = function (index, value){
      hearts[index] = "";
      
      for(i = 0; i < 5; i++){
         if(value > i && !(value < i+1))
         {
            hearts[index]=$sce.trustAsHtml(hearts[index]+ heart);
         }
         else if (value > i && value < i+1)
         {
           hearts[index]=$sce.trustAsHtml(hearts[index]+ heartHalf); 
         }
         else {
            hearts[index]=$sce.trustAsHtml(hearts[index]+ heartEmpty);
         }
          
      } 

      return hearts[index];
    }
    return heartFactory;
}]);

app.factory("languageFactory", function(){
    var languageFactory = {};
    
    languageFactory.changeLanguage = function (lang, length, item1, item2){
        if(lang==="fi"){
          for(i=0;i<length;i++)
          {
            item1[i] = item2[i].en;
          }
        } else if(lang==="en"){
          for(i=0;i<length;i++)
          {
            item1[i] = item2[i].fi;
          } 
        }
    }
    return languageFactory;
});

app.controller("translationCtrl", ["$scope", "$http", "$sce", "httpFactory", "heartFactory", "languageFactory", "localStorageFactory",
  function($scope, $http, $sce, httpFactory, heartFactory, languageFactory, localStorageFactory) {
  
  $scope.skills = [];
    $scope.texts = [];
    $scope.section = [];
    $scope.texts = [];
    $scope.lang = "fi";
    
    var urlLength;
    var text = [];
    var url = [];
    var isStorageAvailable = localStorageFactory.isStorageAvailable();

    if(isStorageAvailable === true){
    if(localStorage.getItem("language") !== null)
    {
      $scope.lang = localStorage.getItem("language");
    } else
    {
      $scope.lang = "fi";
    }
    }else{
        $scope.lang = "fi";
    }

    httpFactory.getData(function(data) {
      $scope.skills = data.skills;
      url = data.urls;
      text = data.text;
      urlLength = data.urls.length;
      for(i=0;i<urlLength;i++)
      {
        if($scope.lang === "fi"){
          $scope.section[i] = url[i].fi;
        } else if ($scope.lang === "en") {
          $scope.section[i] = url[i].en;
        }
      }
      textLength = data.text.length;
      for(i=0;i<textLength;i++)
      {
        if($scope.lang === "fi"){
          $scope.texts[i] = text[i].fi;
          alert($scope.texts[i]);
        } else if ($scope.lang === "en") {
          $scope.texts[i] = text[i].en;
        }
      }
    });  

    $scope.changeLanguage = function(lang){
        languageFactory.changeLanguage(lang, urlLength, $scope.section, url);
        languageFactory.changeLanguage(lang, textLength, $scope.texts, text);
        if(lang==="fi"){
          $scope.lang = "en";
        } else if(lang==="en"){
          $scope.lang = "fi";
        }
        if(isStorageAvailable === true){
          localStorage.setItem("language", $scope.lang);
        }
    }
    
    
    $scope.addHearts = function (index, value){
       return heartFactory.addHearts(index, value);
    }
}]);
