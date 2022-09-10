/*1.- Escribe un programa que escriba en la pantalla un texto que diga «Hello World».*/
let click1 = document.getElementById("click1");
click1.onclick = click1Action;
function click1Action() {
  window.alert("Hello World");
  let result = document.getElementById("result1");
  result.innerHTML = "Hello World";
  return result;
}
// document.write("Hello World");
/*2.- Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.*/
let click2 = document.getElementById("click2");
click2.onclick = click2Action;
function click2Action() {
  let number3 = 3;
  let number5 = 5;
  window.alert(number3 + number5);
  let result = document.getElementById("result2");
  result.innerHTML = number3 + number5;
  return result;
}
/*3.- Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga «Hola nombre Usuario»*/
let click3 = document.getElementById("click3");
click3.onclick = click3Action;
function click3Action() {
  let myName = prompt("Escribe tu nombre");
  window.alert("Hola " + myName);
  let result = document.getElementById("result3");
  result.innerHTML = "Hola " + myName;
  return result;
}
/*4.- Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.*/
let click4 = document.getElementById("click4");
click4.onclick = click4Action;
function click4Action() {
  let firstNumber = prompt("Escribe un número");
  let secondNumber = prompt("Escribe otro número");
  window.alert(
    "La suma es: " + (parseInt(firstNumber) + parseInt(secondNumber))
  );
  let result = document.getElementById("result4");
  result.innerHTML =
    "La suma es: " + (parseInt(firstNumber) + parseInt(secondNumber));
  return result;
}
