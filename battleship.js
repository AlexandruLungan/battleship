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
var model = {
    // three properties if we want to extind the game
    boardSize : 7,
    numShips : 3,
    shipLenght : 3,
    shipsSunk : 0,
    
    ships : [{locations: ["06", "16", "26"], hits: ["", "", ""]},
    {locations: ["24", "34", "44"], hits: ["", "", ""]},
    {locations: ["10", "11", "12"], hits: ["", "", ""]}], 

    fire: function(guess){
        for (var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess); //indexOf returns its index and -1 if not.
            if (index >= 0){
                ship.hits[index] = "hit";
                //call the display message for Hit and mark on the board
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    this.shipsSunk++;
                    //call the view in case of sunk the ship
                    view.displayMessage("You sunk my battleship!");
                }
                return true;
            }     
        }

        //notify the view to display and mark miss on the board
        view.displayMiss(guess);
        view.displayMessage("You MISS!");
        return false;
    },

    isSunk: function(ship){
        for ( var i = 0; i < this.shipLenght; i++){
            if (ship.hits[i] !== "hit"){
                return false;
            }
        }
        return true;
    }
};


//A little fire test
//model.fire("53");
//model.fire("06");

//Implementing the CONTROLER