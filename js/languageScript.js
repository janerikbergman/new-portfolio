// JavaScript Document
angular.module("translationApp", [])
.controller("translationCtrl", ["$scope", function($scope) {
  $scope.content = 
    [ { fin: "./partials/info_fi.html", en: "./partials/info_en.html"},
      { fin: "./partials/education_fi.html", en: "./partials/education_en.html"},
      { fin: "./partials/work_fi.html", en: "./partials/work_en.html"},
      { fin: "./partials/project_fi.html", en: "./partials/project_en.html"}, ];
  
  $scope.buttons = [{ fin: "Tietoa", en: "About Me"},
      { fin: "Koulutus", en: "Education"},
      { fin: "Työnäytteet", en: "Work"},];
       
  $scope.info = $scope.content[0].fin;
  $scope.education = $scope.content[1].fin;
  $scope.work = $scope.content[2].fin;
  $scope.project = $scope.content[3].fin;
  $scope.buttonText = "English";
  
  $scope.infoButton = $scope.buttons[0].fin;
  $scope.educationButton = $scope.buttons[1].fin;
  $scope.workButton = $scope.buttons[2].fin;
  
  var flag = true;
  
  $scope.changeContent = function(){
      if(flag===true)
      {
        $scope.info = $scope.content[0].en;
        $scope.education = $scope.content[1].en;
        $scope.work = $scope.content[2].en;
        $scope.project = $scope.content[3].en;
        $scope.infoButton = $scope.buttons[0].en;
        $scope.educationButton = $scope.buttons[1].en;
        $scope.workButton = $scope.buttons[2].en;
        $scope.buttonText = "Suomi";
        flag = false;
      }else if(flag===false)
      {
        $scope.info = $scope.content[0].fin;
        $scope.education = $scope.content[1].fin;
        $scope.work = $scope.content[2].fin;
        $scope.project = $scope.content[3].fin;
        $scope.infoButton = $scope.buttons[0].fin;
        $scope.educationButton = $scope.buttons[1].fin;
        $scope.workButton = $scope.buttons[2].fin;
        $scope.buttonText = "English";
        flag = true;
      }
  }
}]);
