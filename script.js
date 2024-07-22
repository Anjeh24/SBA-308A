//console.log('it works!');
let futureContnt = document.getElementById('ptag');
let clickBtn = document.getElementById('btn');
let mainDiv = document.getElementById('content');

clickBtn.addEventListener('click', theCatApi);

async function theCatApi(){
   const response = await fetch("https://api.thecatapi.com/v1/images/search");
   const blobs = await response.blob();
   console.log(blobs);

   document.getElementById('pets').src = URL.createObjectURL(blobs);
   
    
  }
  theCatApi();

//trying to import my key from module1.js
//import { my_Key } from "./modules/module1";




