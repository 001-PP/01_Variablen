"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Maximilian"; //Wertzuweisung
// console.log(firstName); //Ausgabe

// let familyName = "Mustermann";
// console.log(familyName);
// console.log(firstName + " " + familyName)

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingaben."); //Wertzuweisung
// familyName = prompt("Bitte Nachname eingaben."); //Wertzuweisung
// console.log(firstName + " " + familyName); //Ausgabe

// console.log("Datentyp: " + typeof firstName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "Hallo"; // Datentyp string
// test = 2; // Datentyp number
// test = true; // Datentyp boolean

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/* 03a Konstanten */

// const test ="hallo"; //Variable mit Konstantem Inhalt
// test = "hi"; //KEINE neue Zuweisung zur LZ möglich! --> Fehler
// console.log("Inhalt: " + test);

/***** 04 Beispiel - Berechnung *******/

// Deklaration
const birthYearJohn = 2000;
const birthYearMark = 1990;
let ageJohn, ageMark;

// let year = 2023;

let date = new Date();
let year = date.getFullYear();


//Berechnung
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("John: " + ageJohn);
console.log("Mark: " + ageMark);