const fs = require("fs"); // Importe la bibliothèque 'fs' de Node.js qui est utilisée pour lire et écrire des fichiers.

// déclaration de la fonction 'findSumPairs' qui prend en entrée un tableau 'numbers' et un nombre 'k'
// Elle va parcourir chaque élément du tableau en utilisant 2 boucles imbriquées pour comparer chaque élément entre eux
function findSumPairs(numbers, k) {
    let compare = 0; // On initialise la variable 'compare' qui va compter le nombre de comparaisons effectuées
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        compare++; 
        if (numbers[i] + numbers[j] === k) {
          // Si la somme des deux éléments est égale à k, alors on retourne true en utilisant l'objet littéral pour stocker aussi le nombre de comparaisons effectuées
          return {compare, result: true}
        }
      }
    }
    return {compare, result: false}; // Si aucun couple n'a été trouvé, on retourne false
  }
  
  const file = 'data.txt'; // On déclare le nom du fichier à lire
  const numbers = fs.readFileSync(file, "utf-8").split(" ").map(Number); // On lit le contenu du fichier en utilisant 'readFileSync' et on sépare chaque nombre avec 'split' puis on les convertit en nombres avec 'map'
  const k = 49; 
  const z = 456
  const {compare, result} = findSumPairs(numbers, k) // On appelle la fonction findSumPairs et on stock les résultats dans des variables
  console.log("Algorithme utilisssé : O(n²) "); 
  console.log(`Nombre de comparaisons effectuées : ${(numbers.length * (numbers.length-1))/2}`);
  console.log("Liste de nombres utilisée : " + numbers);
  console.log(`Résultat : ${result}`);
