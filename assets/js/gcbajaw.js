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

comments = []
function printScreen(screen){
    // Clear comment nodes and reset comments array
    comments.forEach(i => i.remove())
    comments = []

    // Create and append new comment nodes and add to comments array, ready to be removed on next screen print
    comments = screen.map(i => {
        const comment = document.createComment(i);
        document.body.appendChild(comment);
        return comment;
    });
}