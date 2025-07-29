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

function printScreen(arr){
    for (let i = 0; i < arr.length; i++) {
        const comment = document.createComment(arr[i])
        document.body.appendChild(comment)
    }
}