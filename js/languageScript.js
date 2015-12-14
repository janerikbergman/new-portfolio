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

app.controller("translationCtrl", ["$scope", "localStorageFactory", function($scope, localStorageFactory) {
  $scope.partials = 
    [ { fin: "./partials/info_fi.html", en: "./partials/info_en.html"},
      { fin: "./partials/education_fi.html", en: "./partials/education_en.html"},
      { fin: "./partials/work1_fi.html", en: "./partials/work1_en.html"},
      { fin: "./partials/work2_fi.html", en: "./partials/work2_en.html"},
      { fin: "./partials/project_fi.html", en: "./partials/project_en.html"} ];
  
  $scope.text = [{ fin: "Tietoa", en: "About Me"},
      { fin: "Koulutus", en: "Education"},
      { fin: "Työnäytteet", en: "Work"},
      { fin: "Taidot", en: "Skills"},
      { fin: "RESPONSIIVISUUS", en: "RESPONSIVE DESIGN"},
      { fin: "English", en: "Suomi"},
      { fin: "Virtuaalimuseo etusivu", en: "Virtual museum front page"},
      { fin: "Virtuaalimuseo taiteilijasivu", en: "Virtual museum artist page"},
      { fin: "Virtuaalimuseo teosluettelo", en: "Virtual museum catalogue"},
      { fin: "Virtuaalimuseo teossivu", en: "Virtual museum artwork page"}];
  
  $scope.sections = [];
  $scope.texts = [];

  var countPartials = $scope.partials.length;
  var countTexts = $scope.text.length;
  
  var isStorageAvailable = localStorageFactory.isStorageAvailable();
  
  if(isStorageAvailable === true){
    if(localStorage.getItem("portfolioLanguage") !== null)
    {
      $scope.flag = JSON.parse(localStorage.getItem("portfolioLanguage"));
    } else
    {
      $scope.flag = true;
    }
  }else{
      $scope.flag = true;
  }

  $scope.getContent = function(){
    if($scope.flag===true)
    {
        for(i = 0; i<countPartials; i++){
          $scope.sections[i] = $scope.partials[i].fin;
        }
        for(i = 0; i<countTexts; i++){
          $scope.texts[i] = $scope.text[i].fin;
        }
    }
    else if($scope.flag===false)
    {
        for(i = 0; i<countPartials; i++){
          $scope.sections[i] = $scope.partials[i].en;
        }
        for(i = 0; i<countTexts; i++){
          $scope.texts[i] = $scope.text[i].en;
        }
    }
    if(isStorageAvailable === true){
        localStorage.setItem("portfolioLanguage", $scope.flag);
    }
  }
  
  $scope.getContent();
  
  $scope.changeContent = function(){
      if($scope.flag===true)
      {
        $scope.flag = false;
      } else if($scope.flag===false)
      {
        $scope.flag = true;
      } 
      $scope.getContent();     
  }
}]);
