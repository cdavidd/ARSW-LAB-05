function getAuthorBlueprints(author){
    //Si ingresa autor
    if (author){
        let url = "http://localhost:8080/blueprints/"+author;
        $.getJSON(url, function (blueprints) {
            $("#blueprintTable > tbody").empty(); //Limpia el cuerpo de la tabla para otros datos
            for (let i = 0; i < blueprints.length; i++){
                let row = $("<tr />");
                $("#blueprintTable > tbody").append(row);
                row.append($("<td>" + blueprints[i].name + "</td>"));
                row.append($("<td>" + blueprints[i].points.length + "</td>"));
                row.append($("<td><form><button class='btn btn-primary'>Open</button></form></td>"));
            }
        })
    }
    else{
        alert("No author provided");
    }
}
