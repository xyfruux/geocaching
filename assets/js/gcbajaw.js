console.log("gcbajaw.js loaded")
console.log("Du fandt stedet!\nFor at komme videre, skal du fokusere på hjemmesiden (tryk ude fra konsollen, f.eks. på teksten Inspektion) og bruge WASD-tasterne til at bevæge dig rundt.\n\nGod fornøjelse!")

plrPos = [0, 0] // X and Y coordinates
btnPos = [Math.floor(Math.random() * 8) + 3, Math.floor(Math.random() * 8) + 3] // Random button position, from 3 to 10 on both axes

document.addEventListener("keypress", function(e){
    e.key === "w" && plrPos[1] < 10 && plrPos[1]++;
    e.key === "s" && plrPos[1] > 0 && plrPos[1]--;
    e.key === "a" && plrPos[0] > 0 && plrPos[0]--;
    e.key === "d" && plrPos[0] < 10 && plrPos[0]++;

    if(["w", "a", "s", "d"].includes(e.key)){
        printScreen();

        if(plrPos[0] === btnPos[0] && plrPos[1] === btnPos[1]){
            console.log("Du trykkedet på knappen!");
        }
    }
})

function printScreen(){
    let output = ""
    for(let y = 10; y >= 0; y--){
        for(let x = 0; x <= 10; x++){
            output += x === plrPos[0] && y === plrPos[1] ? "🥳" : x === btnPos[0] && y === btnPos[1] ? "🔴" : "⬛";

        }
        output += "\n"
    }
    console.log(output)
}
