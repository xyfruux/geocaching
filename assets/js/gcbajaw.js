console.log("gcbajaw.js loaded")
console.log("Du fandt stedet!\nFor at komme videre, skal du fokusere på hjemmesiden (tryk ude fra konsollen, f.eks. på teksten Inspektion) og bruge WASD-tasterne til at bevæge dig rundt.\n\nGod fornøjelse!")

plrPos = [0, 0] // X and Y coordinates

document.addEventListener("keypress", function(e){
    switch(e.key){
        case "w":
            plrPos[1] < 10 && (plrPos[1] += 1)
            break
        case "s":
            plrPos[1] > 0 && (plrPos[1] -= 1)
            break
        case "a":
            plrPos[0] > 0 && (plrPos[0] -= 1)
            break
        case "d":
            plrPos[0] < 10 && (plrPos[0] += 1)
            break
        default:
            break
    }
    console.log(plrPos)
    console.log(e)
    printScreen()
})

function printScreen(){
    let output = ""
    for(let y = 10; y >= 0; y--){
        for(let x = 0; x <= 10; x++){
            output += (x === plrPos[0] && y === plrPos[1]) ? "🥳" : "⬛"
        }
        output += "\n"
    }
    console.log(output)
}
