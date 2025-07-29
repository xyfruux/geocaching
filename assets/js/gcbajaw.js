console.log("gcbajaw.js loaded")

document.addEventListener("keypress", function(e){
    if(e.key === " "){
        console.log("Space key pressed")
    }
})

function printScreen(arr){
    for (let i = 0; i < arr.length; i++) {
        const comment = document.createComment(arr[i])
        document.body.appendChild(comment)
    }
}