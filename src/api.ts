import React from 'react';

function hello(person:string){
   return "Hello, " + person;
}

let user:string  = "Aamod Tiwari";
const result = hello(user);
console.log("Result", result)