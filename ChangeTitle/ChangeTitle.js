const h1 = document.getElementsByClassName("h1")[0]
const btn = document.getElementsByClassName("btn-change")[0]
const initalText = "Hello, I'm OmniFab"
const newText = "Hi, You 're Welcome!"


btn.addEventListener('click', (event) => {

    let stateInitial = h1.dataset.bool == "true"
    
    if(stateInitial){
        h1.textContent = newText
        h1.dataset.bool = "false"
    }else{
        h1.textContent = initalText
        h1.dataset.bool = "true"
    }
})
