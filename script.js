/*1.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World».*/
document.write("Hello World");
/*2.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.*/
let number3 = 3;
let number5 = 5;
document.write(number3 + number5);
/*3.- Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga «Hola nombre Usuario»*/
let myName = prompt("Escribe tu nombre");
document.write("Hola " + myName);
/*4.- Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.*/
let firstNumber = prompt("Escribe un número");
let secondNumber = prompt("Escribe otro número");
document.write(
  "La suma es: " + (parseInt(firstNumber) + parseInt(secondNumber))
);
