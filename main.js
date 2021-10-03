// function charAndArray(char, array) {
//   switch (char) {
//     case "s":
//       return array.sort();
//     case "r":
//       return array.reverse();
//     case "t":
//       return array.toString();
//     case "j":
//       return array.join("&");
//       case "k":
//       return array.sort((a,b)=>{
//           (a-b)
//       });
//       default:
//           return("the char in undifaind")
//   }
// }
// console.log(charAndArray("k", ["keren", "eden", "yafit", "tikva"]));

// --------------משתנים עם קונסט----------------------------------

function charAndArrayNumbers(Sing, array) {
  const OT_ONE = "s";
  const OT_TWO = "r";
  const OT_THREE = "t";
  const OT_FOUR = "j";
  const OT_FIVE = "k";
  const OT_SIX = "h";
  switch (Sing) {
    case OT_ONE:
      return array.sort();
    case OT_TWO:
      return array.reverse();
    case OT_THREE:
      return array.toString();
    case OT_FOUR:
      return array.join("&");
    case OT_FIVE:
      return array.sort((a, b) => a - b);
    case OT_SIX:
      return array.sort((a, b) => {
        return b - a;
      });
    default:
      return "the char in undifaind";
  }
}
console.log(charAndArrayNumbers("k", [7, 8, 66, 15, 22, 34]));

// ---------------------------------------------if מקוצר

let arrayAges = [12, 24, 22, 66, 35, 6, 18];
let up20 = [];
arrayAges.forEach((age) => {
  if (age > 20) up20.push(age);
});
console.log(up20);
// --------------------------------------------- if מקוצר
let arrayAge = [12, 24, 22, 66, 35, 6, 18];
let ups20 = [];
// arrayAge.forEach((age)=>(age>20)?ups20.push((age)):console.log("not the age"));
// console.log(ups20);

// --------------------------------------------- FOR OF

for (itemAge of arrayAge) {
  if (itemAge > 20) {
    ups20.push(itemAge);
  }
}
console.log(ups20);

// --------------------------------------------- FOR IF
const NAMES={
    name:"yossi",
    age:23,
    city:"lod"
}
for(let userKey in NAMES){
    // --------------Key-------------
console.log(userKey);
// --------------Value of Key-------------
console.log(NAMES[userKey]);
}

// --------------------------------------------- FOR IF
const CAR={
    color:"red",
    Year:"2020",
    Company:"honda",
}
for(let car in CAR){
    console.log(`${car} : ${CAR[car]}`);
}

// --------------------------------------------- FOR IF&FOR EACH
const CARS=[{
    color:"red",
    Year:"2020",
    Company:"honda",
},
{
    color:"bule",
    Year:"2008",
    Company:"mazda",
},
{
    color:"black",
    Year:"2000",
    Company:"toyota",
}]

CARS.forEach((itemCar)=>{
    for(let carKEY in itemCar){
        console.log(`${carKEY} :${itemCar[carKEY]}`);
    }
})