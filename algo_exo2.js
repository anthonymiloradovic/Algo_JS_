const fs = require("fs"); //importe le module fs pour lire les données depuis un fichier

function buildings_with_west_view(building_heights) { // déclare une fonction qui prend une liste de hauteur de bâtiments en entrée
    let count = 1; //initialise un compteur à 1
    for (let i = 0; i < building_heights.length - 2; i++) { // itère sur tous les éléments de la liste sauf les 2 derniers
        let sun = true; //initialise une variable sun à true qui servira à checker si un bâtiment a une vue vers l'ouest
        for (let j = i + 1; j < building_heights.length - i; j++) { // itère sur tous les éléments de la liste qui viennent après building_heights[i]
            if (building_heights[i] <= building_heights[j]) { // si l'élément suivant est plus haut ou égal
                sun = false; //alors le bâtiment n'a pas de vue vers l'ouest
            };
        };
        sun ? count++ : null; // si sun est true, incrémente le compteur
    };
    return count; // renvoie le compteur final
}

const file = 'data.txt'; // nom du fichier contenant les données
const building_heights = fs.readFileSync(file, "utf-8").split(" ").map(Number); // lit le fichier, split les données en utilisant les espaces comme séparateur et convertit les strings en nombres
console.log("Algorithme utilisé : O(n²) "); // indique que l'algorithme utilisé a une complexité en O(n²)
console.log(`Nombre de comparaisons effectuées : ${(building_heights.length * (building_heights.length-1))/2}`);// indique le nombre de comparaisons effectuées
console.log("Liste de hauteur utilisée : " + building_heights); // affiche la liste de hauteur utilisée
console.log(`Résultat : ${buildings_with_west_view(building_heights)}`);// affiche le résultat de la fonction qui est le nombre de bâtiments ayant une vue vers l'ouest
