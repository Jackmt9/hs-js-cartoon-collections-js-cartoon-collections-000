function dwarfRollCall(dwarves) {
  var dwarvesList = "";
  for (var i = 0; i < dwarves.length; i++) {
    var position = i + 1;
    dwarvesList += position + ". " + dwarves[i] + " ";
  }
  return dwarvesList;
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }
    else return false;
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++){
    if (foods[i]=="cheddar" || foods[i]=="gouda" || foods[i]=="camembert"){
      return foods[i];
    }
  }
  return "no cheese!";
}