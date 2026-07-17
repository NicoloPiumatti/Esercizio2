"use strict"

let divTxt = document.createElement("div");
divTxt.classList.add("container", "d-flex");
let txt1 = document.createElement("input");
txt1.type = "text";
txt1.classList.add("p-2", "flex-fill", "m-2");
let txt2 = document.createElement("input");
txt2.type = "text";
txt2.classList.add("p-2", "flex-fill", "m-2");
let btnAvvia = document.createElement("button");
btnAvvia.style.border = "3px solid black";
btnAvvia.style.borderRadius = "10px";
btnAvvia.textContent = "Avvia gioco!";
btnAvvia.classList.add("btn", "container-fluid", "bg-success", "text-white");
let breakRow = document.createElement("br");
document.body.append(divTxt);
divTxt.append(txt1);
divTxt.append(txt2);
document.body.append(breakRow);
document.body.append(btnAvvia);

let turno = 0; // 0 -> giallo / 1 -> rosso

btnAvvia.addEventListener("click", function () {
    creazioneGriglia();
});

function creazioneGriglia() {
    let container = document.createElement("div");
    container.classList.add("container", "mt-3");
    document.body.append(container);

    for (let i = 0; i < 3; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.append(row);
        for (let j = 0; j < 6; j++) {
            let nCasuale;
            nCasuale = Math.floor(Math.random() * 101) - 50;
            let col = document.createElement("div");
            col.classList.add("col", "p-0");
            row.append(col);
            let cella = document.createElement("div");
            cella.setAttribute("id", "cella_" + i + "_" + j);
            cella.classList.add("border", "border-dark", "border-2", "m-2", "ms-3", "bg-primary");
            cella.style.height = "100px";
            cella.style.width = "100px";
            cella.textContent = nCasuale;
            cella.textContent = "";
            cella.addEventListener("click", function(){
                if(turno == 0)
                {
                    document.getElementById("cella_" + i + "_" + j).classList.remove("bg-primary");
                    document.getElementById("cella_" + i + "_" + j).classList.add("bg-warning");
                    document.getElementById("cella_" + i + "_" + j).style.pointerEvents = "none";
                    widthG1 += parseInt(document.getElementById("cella_" + i + "_" + j).value || 0, 10);
                    btnG1.style.width = widthG1 + "px";
                    turno = 1;
                } else
                {
                    document.getElementById("cella_" + i + "_" + j).classList.remove("bg-primary");
                    document.getElementById("cella_" + i + "_" + j).classList.add("bg-danger");
                    document.getElementById("cella_" + i + "_" + j).style.pointerEvents = "none";
                    turno = 0;
                }
            });
            col.append(cella);
        }
    }

    let btnG1 = document.createElement("button");
    btnG1.classList.add("bg-warning", "mt-3");
    btnG1.style.height = "100px";
    btnG1.style.width = "100px";
    let widthG1 = parseInt(btnG1.style.width);
    btnG1.innerText = txt1.value;
    let btnG2 = document.createElement("button");
    btnG2.classList.add("bg-danger", "mt-3");
    btnG2.style.height = "100px";
    btnG2.style.width = "100px";
    let widthG2 = parseInt(btnG2.style.width);
    btnG2.innerText = txt2.value;
    document.body.append(breakRow);
    document.body.append(btnG1);
    document.body.append(breakRow);
    document.body.append(btnG2);
}