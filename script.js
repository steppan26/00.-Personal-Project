var navButtons = document.getElementsByClassName("nav-btn");
var menu1 = document.getElementById("menu1");
var sectionElements = document.getElementsByClassName("section-structure");
var navbar = document.getElementById("navbar-menu");

function buildSectionStructure(item){
    // let itemId = navbar(item);
    createButton(item);
}

function createButton(i){
    let btn = document.createElement("li");
    let sectionId = sectionElements[i].id;
    let sectionTitle = sectionElements[i].title;
    // let sectionDataLayout = sectionElements[i].getAttribute(data-layout);
    btn.appendChild(document.createTextNode(sectionTitle));
    btn.classList.add("nav-btn");
    btn.classList.add(sectionId + "-class");
    if (sectionElements[i].classList.contains("push")){

        btn.classList.add("push");
    }

    navbar.appendChild(btn);

    btn.addEventListener("click", function(){
        buttonClicked(i);
    }, false);

}

function buttonClicked(i){
    sectionElements[i].scrollIntoView();
 }


for (var element=0 ; element < sectionElements.length; element++ ) { 
    buildSectionStructure(element);
}