/**
 * class --> known as the template
 * properties
 * method (A special type of function inside a class without the function keyword)
 * object ---> thing accroding to that class
 *
 */

// classKeyword ---- ClassName ----- Bracket
class Player {
  goal() {
    console.log("Score a Goal");
  }
  getTeamName() {
    console.log("Bazuka");
  }
  //When the class is called while creating a object constractor will be called
  constructor(name, age) {
    console.log(`Player Name is : ${name}`);
    console.log("Calling the constructor Method");
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
  }
}

const player1 = new Player("Tom Hardy", 11);
player1.goal();
player1.getTeamName();
// console.log(player1);
const player2 = new Player("Oshanto", 12);

console.log(player1);
console.log(player2);

console.log(player1 instanceof Player);
