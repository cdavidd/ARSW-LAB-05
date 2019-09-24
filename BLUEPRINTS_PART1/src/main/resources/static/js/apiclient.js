const apiUrl = "http://localhost:8080/blueprints/"
apiclient = (function() {
    let apiData = [];

    return {
        getBlueprintsByAuthor: function(name, callback) {
            jQuery.ajax({
                url: apiUrl + name,
                success: function (result) {
                    apiData = callback(result);
                },
                async: false
            });
            return apiData;
        },
        getBlueprintsByNameAndAuthor: function(author, name, callback) {
            jQuery.ajax({
                url: apiUrl+author+"/"+name,
                success: function (result) {
                    apiData = callback(result);
                },
                async: false
            });
            return apiData;
        }
    };
})();
