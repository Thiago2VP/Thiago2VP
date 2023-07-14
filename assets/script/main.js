let initalTyper = 0;
let secondTyper = 0;
let speed = 100;
let mainTitle = "Thiago Pereira";
let mainSubTitle = "Portifólio";

function typeWriter() {

    if (initalTyper < mainTitle.length) {
        document.querySelector("#mainTittle").innerHTML += mainTitle.charAt(initalTyper);
        initalTyper++;
        setTimeout(typeWriter, speed);
    }
    if (initalTyper == mainTitle.length) {
        if (secondTyper < mainSubTitle.length) {
            document.querySelector("#mainSubTittle").innerHTML += mainSubTitle.charAt(secondTyper);
            secondTyper++;
            setTimeout(typeWriter, speed);
        }
    }
}

function showElement(id) {
    document.querySelector(id).style.visibility = "visible";
}

typeWriter();

setTimeout(() => {showElement("#indexSection")}, 2500);
