let arrowRightF = document.getElementById("arrowRightF");
let openFolderF = document.getElementById("openFolderF");
let arrowRightB = document.getElementById("arrowRightB");
let openFolderB = document.getElementById("openFolderB");
let arrowRightD = document.getElementById("arrowRightD");
let openFolderD = document.getElementById("openFolderD");
let arrowRightO = document.getElementById("arrowRightO");
let openFolderO = document.getElementById("openFolderO");

let frontDropF = document.querySelectorAll(".frontDrop");

let openFront = document.getElementById('openFront');

openFront.addEventListener("click",()=> {
    arrowRightF.classList.toggle("fa-arrow-down");
    openFolderF.classList.toggle("fa-folder-open");
    frontDropF.style.display="block";
})

let openBack = document.getElementById('openBack');

openBack.addEventListener("click",()=> {
    arrowRightB.classList.toggle("fa-arrow-down");
    openFolderB.classList.toggle("fa-folder-open");
})

let openData = document.getElementById('openData');

openData.addEventListener("click",()=> {
    arrowRightD.classList.toggle("fa-arrow-down");
    openFolderD.classList.toggle("fa-folder-open");
})

let openOthers = document.getElementById('openOthers');

openOthers.addEventListener("click",()=> {
    arrowRightO.classList.toggle("fa-arrow-down");
    openFolderO.classList.toggle("fa-folder-open");
})

