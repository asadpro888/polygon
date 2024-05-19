"use strict";
const box = document.querySelector('.box');
const inp = document.querySelector('.inp');
const inp1 = document.querySelector('.inp1');
const body = document.querySelector('body');
const btn = document.querySelector('.bttn');

btn.addEventListener('click', function(){
    if(body.classList.contains('some')){
        body.classList.remove('some');    
    }else{
        body.classList.add('some');  
    }
});
const currentPlace = +prompt("Where are you?", "Thanks");

const channel = prompt("Who's your favorite youtuber");
console.log(`https://youtube.com/${channel}`);