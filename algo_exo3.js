let colors = require('colors');
const fs = require("fs"); // Importe la bibliothèque 'fs' de Node.js qui est utilisée pour lire et écrire des fichiers.

// déclaration de la fonction 'findSumPairs' qui prend en entrée un tableau 'numbers' et un nombre 'k'
function findSumPairs(numbers, k) {
    let compare = 0; // On initialise la variable 'compare' qui va compter le nombre de comparaisons effectuées
    let hashmap = {}; // On initialise un objet littéral pour stocker les éléments du tableau
    
    for (let i = 0; i < numbers.length; i++) {
      compare++; // incrementer la variable de comparaison pour chaque iteration de la boucle
      if (hashmap[k - numbers[i]]) { // Si la valeur k-numbers[i] existe dans l'objet littéral, cela signifie qu'il existe un couple d'éléments qui donne k
        return { compare, result: true };
      }
      hashmap[numbers[i]] = true; // sinon on ajoute l'élément courant dans l'objet littéral
    }
    return { compare, result: false }; // Si aucun couple n'a été trouvé, on retourne false
  }
  
  const file = 'data2.txt'; // On déclare le nom du fichier à lire
  const numbers = fs.readFileSync(file, "utf-8").split(" ").map(Number); // On lit le contenu du fichier en utilisant 'readFileSync' et on sépare chaque nombre avec 'split' puis on les convertit en nombres avec 'map'
  const k = 2222; 
  const {compare, result} = findSumPairs(numbers, k) // On appelle la fonction findSumPairs et on stock les résultats dans des variables
  console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°".brightYellow);
  console.log(" ");
  console.log("Algorithme utilisé : O(n) ".brightBlue); 
  console.log(`Nombre de comparaisons effectuées : ${compare}`.brightBlue);
  console.log(`Liste de nombres utilisée : ${numbers}`.brightBlue);
  console.log(`Résultat : ${result}`.brightGreen);
  console.log(" ");
  console.log("°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°".brightYellow);
  