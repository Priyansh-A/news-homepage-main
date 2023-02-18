let btn = document.querySelector(".burger")
let menu = document.querySelector(".open")
let close = document.querySelector(".cant-see") 
btn.addEventListener("click", ()=>{
    menu.classList.remove("menu")
    btn.classList.remove("burger")
    close.classList.add("burger-close")

})

close.addEventListener("click", ()=>{
    menu.classList.add("menu")
    btn.classList.add("burger")
    close.classList.remove("burger-close")
})