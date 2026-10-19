"use strict";

let lyseroed =   "rgb(255, 200, 200)";
let lysegroenn = "rgb(200, 255, 200)";
let lysegul =    "rgb(255, 255, 170)";

let fornavnInput = document.getElementById("fornavn");
fornavnInput.addEventListener("input", fornavnValidering);

let etternavnInput = document.getElementById("etternavn");
etternavnInput.addEventListener("input", etternavnValidering);

let mobilInput = document.getElementById("mobil");
mobilInput.addEventListener("input", mobilValidering);

let passordInput = document.getElementById("passord");
passordInput.addEventListener("input", visPassordStyrke);

let passordRepetertInput = document.getElementById("passordRepetert");
passordRepetertInput.addEventListener("input", passordRepetertValidering);

function fornavnValidering() {
	let fornavn = fornavnInput.value;
	if (fornavn.length >= 2 && fornavn.length <= 20) {
		fornavnInput.setAttribute("style", "background-color:" + lysegroenn);
	} else {
		fornavnInput.setAttribute("style", "background-color:" + lyseroed);
	}
}

function etternavnValidering() {
	let etternavn = etternavnInput.value;
	if (etternavn.length >= 2 && etternavn.length <= 20) {
		etternavnInput.setAttribute("style", "background-color:" + lysegroenn);
	} else {
		etternavnInput.setAttribute("style", "background-color:" + lyseroed);
	}
}

function mobilValidering() {
	let mobil = mobilInput.value;
	if (mobil.length === 8) {
		mobilInput.setAttribute("style", "background-color:" + lysegroenn);
	} else {
		mobilInput.setAttribute("style", "background-color:" + lyseroed);
	}
}

function visPassordStyrke() {
	let passord = passordInput.value;
	if (passord.length < 8) {
		passordInput.setAttribute("style", "background-color:" + lyseroed);
	} else if (passord.length < 14) {
		passordInput.setAttribute("style", "background-color:" + lysegul);
	} else {
		passordInput.setAttribute("style", "background-color:" + lysegroenn);
	}
}

function passordRepetertValidering() {
	let passord = passordInput.value;
	let passordRepetert = passordRepetertInput.value;
	if (passordRepetert === passord) {
		passordRepetertInput.setAttribute("style", "background-color:" + lysegroenn);
	} else {
		passordRepetertInput.setAttribute("style", "background-color:" + lyseroed);
	}
}
