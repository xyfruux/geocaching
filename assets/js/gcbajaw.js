console.log("gcbajaw.js loaded")

function printScreen(arr){
    for (let i = 0; i < arr.length; i++) {
        const comment = document.createComment(arr[i])
        document.body.appendChild(comment)
    }
}