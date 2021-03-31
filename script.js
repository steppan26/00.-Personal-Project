var navButtons = document.getElementsByClassName("nav-btn");
var menu1 = document.getElementById("menu1");
var heroPage = document.getElementById("hero");
var sectionStructure = document.getElementsByClassName("section-structure");


function pressButton(){
    heroPage.scrollIntoView();
}



menu1.addEventListener("click", pressButton);