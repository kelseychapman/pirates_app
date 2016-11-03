angular
  .module('pirates')
  .factory('PiratesService', function ($http) {
  return {
    all: function() {
      console.log('hello');
      return $http.get('/api/pirates').then(function(data){
        console.log(data);
        return data;
      });
    }
  }
})
