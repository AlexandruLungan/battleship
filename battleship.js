// VIEW object for representing the display
var view = {
    displayMessage: function(msg){
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

//MODEL object

var ship1 = {
    locations: ["10", "20", "30"], hits: ["", "", ""]
}

var ship2 = {
    locations: ["32", "33", "34"], hits: ["", "", ""]
}

var ship3 = {
    locations: ["63", "64", "65"],hits: ["", "", "hit"]
}

var ships = [{locations: ["10", "20", "30"], hits: ["", "", ""]},
             {locations: ["32", "33", "34"], hits: ["", "", ""]},
             { locations: ["63", "64", "65"], hits: ["", "", "hit"]}
            ];