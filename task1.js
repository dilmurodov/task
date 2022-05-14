/**
 * selected RANDOM numbers  from interval [0, 256*256*256], converted it to HEXADECIMAL number and added `#` symbol at this hexadecimal number.
 */

setInterval(() => {document.querySelector('body').style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`}, 1000)