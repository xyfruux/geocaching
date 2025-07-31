console.log("gcbajaw.js loaded")

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
})

function printScreen(){
    let output = ""
    for(let y = 10; y >= 0; y--){
        for(let x = 0; x <= 10; x++){
            if(x === plrPos[0] && y === plrPos[1]){
                output += "P" // Player position
            } else {
                output += "#" // Empty space
            }
        }
        output += "\n"
    }
    console.log(output)
}