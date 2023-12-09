let btn = document.querySelector(".btn");
let noteContainer = document.querySelector(".note-container");
let box = document.querySelectorAll(".input-box");
let Delete = document.querySelector(".delete");
btn.addEventListener("click", ()=>{
    let input = document.createElement("p");
    let img = document.createElement("img");
    input.className="input-box";
    img.className="delete";
    img.src="delete.png";
    input.setAttribute("contenteditable", "true");
    noteContainer.appendChild(input).appendChild(img);
})
noteContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="IMG") {
        e.target.parentElement.remove();        
    }
})