var BlueprintModule = (function () {

    var _author;
    var _authorBlueprint = [];

    var _mapNamePoints = function (blueprints) {
        return blueprints.map(function (blueprint) {
            return {name:blueprint.name, points:blueprint.points.length};
        });
    };

    var _sumPoints= function(blueprints){
        var sum = blueprints.reduce(function (total, currentValue) {
            return total + currentValue.points;
        }, 0);
        $("#blueprintSum > h3").text("Total user points: " + sum);
    }

    //blueprints : mapeo de blueprints
    var _genTable = function (blueprints) {
        _sumPoints(blueprints);
        $("#blueprintTable > tbody").empty(); //Limpia el cuerpo de la tabla para otros datos
        blueprints.map(function (blueprint) {
            $("#blueprintTable > tbody").append(
                "<tr> <td>" + blueprint.name + "</td>" + "<td>"+ blueprint.points +"</td></tr>"
            )
        });
    };

    var changeAuthorName = function (author) {
        _author = author;
    };

    var updateListPlans = function (author) {
        changeAuthorName(author);
        $("#blueprintAuthorName > h2").text(author + "'s blueprints: ");
        _genTable(apimock.getBlueprintsByAuthor(author,_mapNamePoints));
    };

    return {
        changeAuthorName : changeAuthorName,
        updateListPlans : updateListPlans
    };

})();