// DES
let dice1 = Math.floor(Math.random() * 3) + 1; // Lancer du premier dé (valeurs possibles : 1, 2, 3)
let dice2 = Math.floor(Math.random() * 3) + 1; // Lancer du deuxième dé (valeurs possibles : 1, 2, 3)
let resultdice;
if (dice1 === dice2) {
  resultdice = dice1;
} else {
  resultdice = 6 - dice1 - dice2;
}
// Des animaux
let tableAnimal = [
  [0, "Gnou"],
  [1, "Antilope"],
  [2, "Rhinocéros"],
];
let Animal = [];
for (i = 0; i < 5; i++) {
  let diceAnimal = Math.floor(Math.random() * tableAnimal.length); // Tirage aléatoire d'un index dans la table des animaux
  Animal[i] = tableAnimal[diceAnimal][0]; // Récupération de l'animal correspondant à l'index tiré et ajout à la liste des animaux
}

// Braconniers
let Braconnier = [];
for (i = 0; i < 2; i++) {
  let diceBraconniers = Math.floor(Math.random() * tableAnimal.length); // Tirage aléatoire d'un index dans la table des animaux
  Braconnier[i] = tableAnimal[diceBraconniers][0]; // Récupération de l'animal correspondant à l'index tiré et ajout à la liste des braconniers
}
// Garde Chasse
let Garde = Math.floor(Math.random() * tableAnimal.length); // Tirage aléatoire d'un index dans la table des animaux pour le garde-chasse

console.log(" Dès jaune === " + resultdice);
console.log("Les animaux sont : " + Animal);
console.log("Les dès braconniers sont : " + Braconnier); // Affichage de la liste des braconniers
console.log("Le dès garde-chasse est : " + tableAnimal[Garde][0]); // Affichage de l'animal correspondant à l'index tiré pour le garde-chasse

console.log(occurrences)

for (let result of Animal) {
  console.log(result);
}

tabOcc = [];

for (i = 0; i < 3; i++) {
  tabOcc[i] = [];
  for (j = 0; j < Animal.length; j++) {
    if (Animal[j] === tableAnimal[i][0]) tabOcc[i].push(Animal[j]);
  }
}
console.log(tabOcc);
occ = {
  0: 0,
  1: 0,
  2: 0
};
let numAnimal;
for (numAnimal of Animal) {
  occ[numAnimal] = occ[numAnimal] + 1;
}
let animalKill;
if (Braconnier[0] === Braconnier[1] && Braconnier[0] != Garde) {
  animalKill = Braconnier[0];
  occ[animalKill] = occ[animalKill] - 1;
} else if (3 - (Braconnier[0] + Braconnier[1]) != Garde) {
  animalKill = 3 - (Braconnier[0] + Braconnier[1]);
  occ[animalKill] = occ[animalKill] - 1;
}
console.log("Animal tué par le braconier : " + animalKill); // Affichage de l'animal tué

console.log(occ);
let winner = "Pas de gagnant";
if (occ[0]===resultdice && occ[1]===resultdice) {
  winner = "Rhinoceroce ==";
} else if (occ[0]===resultdice && occ[2]===resultdice) {
  winner = "Antilope =";
} else if (occ[1]===resultdice && occ[2]===resultdice) {
  winner = "Gnou========";
} else if (occ[0] === resultdice) {
  winner = "Gnou";
} else if (occ[1] === resultdice) {
  winner = "Antilope";
} else if (occ[2] === resultdice) {
  winner = "Rhinoceroce";
}
console.log(winner);

// autre méthode
// occ[numAnimal] = undefined !== occ[numAnimal] ? occ[numAnimal] + 1 : 1; // Opérateur ternaire

// voiture = {
//   carburant: "diesel",
//   conso: "5",
//   marque: "peugeot",
// };

// console.log(voiture.carburant, voiture["carburant"]);
