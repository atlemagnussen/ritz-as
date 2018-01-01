angular.module('filtersModule', [])
.filter('dateView', function() {
    return function(input) {
        var m = moment(input);
        return m.format("YY-MM-DD HH:mm");
    }
});
