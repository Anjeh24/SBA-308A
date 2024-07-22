//console.log('it works!');
let futureContnt = document.getElementById('ptag');
let clickBtn = document.getElementById('btn');
let mainDiv = document.getElementById('content');
let secndBtn = document.getElementById('btntwo');
let infoBar = document.getElementById('postcat');

clickBtn.addEventListener('click', theCatApi);

async function theCatApi(){
   const response = await fetch("https://api.thecatapi.com/v1/images/search");
   const blobs = await response.blob();
   console.log(blobs);

   document.getElementById('pets').src = URL.createObjectURL(blobs);  //credits, coding train
   
    
  }
  theCatApi();

//trying to import my key from module1.js
//import { my_Key } from "./modules/module1"; made functionality worst for some reason


//POST
secndBtn.addEventListener('click', getPosting);  

   //somewhat functional though!

//Achieved this block via class notes. Struggled with this part. Turned to lessons as last resot

//import { getPosting } from "./modules/module2"; tried importing code veral times but it impaired functionality for some reason.
async function getPosting(){        
    let enteredInfo = infoBar.ariaValueMax;
    let reqoutput = {data: enteredInfo};
 
    const res = await fetch('https://api.thecatapi.com/v1/images/search', {
     method: 'POST',
     body: JSON.stringify(reqoutput),
     headers: {
         'Content-Type': 'application/json; charset=UTF-8',// credits, class notes
     } 
    });
    alertResponse(res);
 }


async function alertResponse(res) {
    if(res.ok){
        const txtdata = await res.text();
        alert(txtdata);
    } else {
        alert('Request status not 200: ' + res.status);
    }
}



