angular
  .module('pirates')
  .controller('PiratesController', function($scope, PiratesService) {
    $scope.view = {};
    PiratesService.all().then(function(data){
      $scope.view.pirates = data.data;
    });
    // console.log($scope.view.pirates);
});
