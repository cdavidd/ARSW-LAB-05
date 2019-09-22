function getAuthorBlueprints(author) {
  //Si ingresa autor != null
  let cont = 0;
  if (author) {
    $("#blueprintAuthorName > h2").text(author + "'s blueprints: ");
    let url = "http://localhost:8080/blueprints/" + author;
    $.getJSON(url, function(blueprints) {
      $("#blueprintTable > tbody").empty(); //Limpia el cuerpo de la tabla para otros datos
      for (let i = 0; i < blueprints.length; i++) {
        let row = $("<tr />");
        $("#blueprintTable > tbody").append(row);
        row.append($("<td>" + blueprints[i].name + "</td>"));
        row.append($("<td>" + blueprints[i].points.length + "</td>"));
        cont = cont + blueprints[i].points.length;
        row.append(
          $(
            "<td><form><button type='button' class='btn btn-primary' onclick='blueprintOpen( \"" +
              author +
              '" , "' +
              blueprints[i].name +
              "\")' data-toggle='modal' data-target='#blueprintPointsModal'>Open</button></form></td>"
          )
        );
      }
      $("#blueprintSum > h3").text("Total user points: " + cont);
    });
  } else {
    alert("No author provided");
  }
}

function blueprintOpen(author, blueprintName) {
  let url = "http://localhost:8080/blueprints/" + author + "/" + blueprintName;
  $.getJSON(url, function(blueprint) {
    $("#blueprintPointsTable > tbody").empty();
    for (let i = 0; i < blueprint.points.length; i++) {
      let row = $("<tr />");
      $("#blueprintPointsTable > tbody").append(row);
      row.append("<td>" + blueprint.points[i].x + "</td>");
      row.append("<td>" + blueprint.points[i].y + "</td>");
    }
  });
}
