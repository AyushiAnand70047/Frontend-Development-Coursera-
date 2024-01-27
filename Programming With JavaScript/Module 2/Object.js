var assistantManager = {
    movement: 3,
    socialSkills:30,
    streetSmarts: 30,
    health: 40,
    naxtAcheivement: "Open new store"
}

console.log(assistantManager);
// Accessing object using dot notation
console.log(assistantManager.socialSkills);
// Accessing object drone using bracket notation
console.log(assistantManager["socialSkills"]);
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    // Accessing object drone using bracket notation
    console.log(drone[arrOfKeys[i]])
}