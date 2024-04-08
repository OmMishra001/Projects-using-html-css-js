let NotesContainer = document.querySelector(".notes-container");
let Createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

Createbtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "remove.png"
    NotesContainer.appendChild(inputbox).appendChild(img)
});


NotesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        NotesContainer.remove();
    }

})
