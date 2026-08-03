"use strict";

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

document.body.append(divTxt);
divTxt.append(txt1);
divTxt.append(txt2);
document.body.append(document.createElement("br"));
document.body.append(btnAvvia);

let divSuggerimento = document.createElement("div");
divSuggerimento.classList.add("container", "mt-3", "border", "p-2");
document.body.append(divSuggerimento);

let turno = 0;
let largG1 = 100;
let largG2 = 100;
let click = 0;

btnAvvia.addEventListener("click", function () {
    btnAvvia.disabled = true;
    creazioneGriglia();
});

function creazioneGriglia() {
    let btnG1 = document.createElement("button");
    btnG1.classList.add("bg-warning", "mt-3");
    btnG1.style.height = "100px";
    btnG1.style.width = largG1 + "px";
    btnG1.innerText = txt1.value;

    let btnG2 = document.createElement("button");
    btnG2.classList.add("bg-danger", "mt-3");
    btnG2.style.height = "100px";
    btnG2.style.width = largG2 + "px";
    btnG2.innerText = txt2.value;

    let container = document.createElement("div");
    container.classList.add("container", "mt-3");
    document.body.append(container);

    for (let i = 0; i < 3; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.append(row);
        for (let j = 0; j < 6; j++) {
            let nCasuale = Math.floor(Math.random() * 101) - 50;
            let col = document.createElement("div");
            col.classList.add("col", "p-0");
            row.append(col);
            let cella = document.createElement("div");
            cella.id = "cella_" + i + "_" + j;
            cella.classList.add("border", "border-dark", "border-2", "m-2", "ms-3", "bg-primary");
            cella.style.height = "100px";
            cella.style.width = "100px";
            cella.addEventListener("mouseenter", function () {
                divSuggerimento.textContent = "Valore: " + nCasuale;
            });
            cella.addEventListener("mouseleave", function () {
                divSuggerimento.textContent = "";
            });
            cella.addEventListener("click", function () {
                cella.classList.remove("bg-primary");
                cella.style.pointerEvents = "none";
                if (turno === 0) {
                    cella.classList.add("bg-warning");
                    largG1 += nCasuale;
                    btnG1.style.width = largG1 + "px";
                    if (largG1 <= 0) {
                        alert("GIOCO FINITO! Ha vinto il Giocatore 2");
                        let divVincitoreG2 = document.createElement("div");
                        let p2 = document.createElement("p");
                        p2.textContent = "Ha vinto il giocatore 2";
                        p2.style.fontSize = "15pt";
                        divVincitoreG2.append(p2);
                        document.body.append(divVincitoreG2);
                        return;
                    }
                    turno = 1;
                } else {
                    cella.classList.add("bg-danger");
                    largG2 += nCasuale;
                    btnG2.style.width = largG2 + "px";
                    if (largG2 <= 0) {
                        alert("GIOCO FINITO! Ha vinto il Giocatore 1");
                        let divVincitoreG1 = document.createElement("div");
                        let p1 = document.createElement("p");
                        p1.textContent = "Ha vinto il giocatore 1";
                        p1.style.fontSize = "15pt";
                        divVincitoreG1.append(p1);
                        document.body.append(divVincitoreG1);
                        return;
                    }
                    turno = 0;
                }
                click++;
                if (click === 18) {
                    if (largG1 > largG2) {
                        alert("Ha vinto il Giocatore 1!");
                        let divNomeVincG1 = document.createElement("div");
                        divNomeVincG1.textContent = txt1.value;
                        document.body.append(divNomeVincG1);
                    } else if (largG2 > largG1) {
                        alert("Ha vinto il Giocatore 2!");
                        let divNomeVincG2 = document.createElement("div");
                        divNomeVincG2.textContent = txt2.value;
                        document.body.append(divNomeVincG2);
                    } else {
                        alert("Pareggio!");
                    }
                }
            });
            col.append(cella);
        }
    }
    document.body.append(document.createElement("br"));
    document.body.append(btnG1);
    document.body.append(document.createElement("br"));
    document.body.append(btnG2);
}